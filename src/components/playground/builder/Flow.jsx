'use client'

import React, {useState, useRef, useCallback, useEffect} from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Handle,
    Position, useStore, MarkerType, updateEdge
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './Sidebar';
import Link from "next/link";
import CustomControl from "@/components/playground/builder/CustomControl";
import MyModal from "@/shared/modals/DefaultModal";
import GreenEdge from "@/components/playground/builder/CustomEdge";
import ConnectionLine from "@/components/playground/builder/ConnectionLine";
import MobileSidebar from "@/components/playground/builder/MobileSidebar";


const connectionNodeIdSelector = (state) => state.connectionNodeId;


function Message({data,id}) {

    const connectionNodeId = useStore(connectionNodeIdSelector);

    const isConnecting = !!connectionNodeId;
    const isTarget = connectionNodeId && connectionNodeId !== id;
    const isConnected = data.target


    return <div className='rounded-sm min-w-[220px] bg-white relative h-[80px]'>

        <Handle

            type="target"
            position={Position.Left}
            id="a"
            style={{
                bottom: 0,
                left: 0,
                border: '1px solid #1d4ed8',
                background: isConnected ? '#fff' : '#000',
                width: isTarget ? '100%' : 0,
                height: isTarget ? '100%' : 0,
                borderRadius: 0,
                opacity:"0"
        }}
        />
        <div className='flex justify-between w-full px-4 items-center bg-gray-900 rounded-t-sm'>
            <span className='text-black text-[12px] font-medium py-1'>{data.name}</span>
            <img src="/images/playgorund/builder/message.svg" alt="message" width={16}/>
        </div>

        <div className='p-4 text-sm font-light'>
            {data.message.length > 25 ? `${data.message.slice(0,25)}...` : data.message}
        </div>

        <Handle
            type="source"
            position={Position.Right}
            id={id}
            style={{
                top: 77,
                right: -3,
                border: `1px solid #000`,
                background: "#fff"
         }}
        />
    </div>
}


const nodeTypes = {message: Message}
const edgeTypes = { greenEdge: GreenEdge}


let id = 0;
const getId = () => `${id++}`;


const initialNodes = [
    {
        id: 'uu',
        type: 'message',
        data: {name: `message`,message:"this is a content area",target:"uu1"},
        position: {x: -50, y: 50},
    },
    {
        id: 'uu1',
        type: 'message',
        data: {name: `message_1`,message:"this is a content area",source:"uu"},
        position: {x: 250, y: 5},
    },
];
let initialEdges = []
 initialNodes.map(({data, id}) => {
    if (data.target){

        return initialEdges.push({
            id: getId(),
            target: data.target,
            source: id,
            sourceHandle: id,
            type: 'greenEdge',
            markerEnd: {
                type: MarkerType.ArrowClosed,
                color: '#79d594',
                orient: `auto`,
            },
            animated: false,
        })
    }
})


const Flow = () => {

    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [selectNode, setSelectNode] = useState(null)
    const [isClose,setIsClose] = useState(false)
    const [isOpen, setIsOpen] = useState({
        status: false,
        data: null
    })


    const onConnect = useCallback(
        (params) =>    setEdges((els) =>
            addEdge(
                {
                    ...params,
                    type: "greenEdge",
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                        color: "#79d594",
                    },
                },
                els
            )
        ),
        [],
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }


            const position = reactFlowInstance.screenToFlowPosition({
                x: event.clientX,
                y: event.clientY,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: {message: `${type} node`, name: `${type}_${getId()}`},
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance],
    );


    const onNodeClick = (e, node) => {
        setSelectNode(node)
        setIsOpen(({data,status}) => {
         return{
             status: true,
             data:node
         }
        })

    }


    const onEdgeUpdate = useCallback(
        (oldEdge, newConnection) => setEdges((els) => updateEdge(oldEdge, newConnection, els)),
        []
    );


    return (
        <div className="flex flex-grow-1 h-full">
            <div
                style={isOpen.status ? {opacity:1,visibility:'visible'} : {opacity:0, visibility:'hidden'}}
                className='fixed z-40 left-0 top-0 backdrop-blur-sm w-full
                 h-screen flex justify-center items-center'>

                    <MyModal isOpen={isOpen.status} data={isOpen.data} setIsOpen={setIsOpen} nodes={nodes} setNodes={setNodes}/>

            </div>
            <ReactFlowProvider>
                <div className={`reactflow-wrapper flex-grow-1 h-full w-full bg-[#f3f5f7]`}
                     ref={reactFlowWrapper}>
                    <div className='builder_header px-8'>
                        <Link href='/' className='underline text-white cursor-pointer z-40'>
                            <img
                                src="/images/playgorund/builder/arrow.svg"
                                alt=""
                            />
                        </Link>

                        <MobileSidebar selectedNode={selectNode} setSelectedNode={setSelectNode} isClose={isClose} setIsClose={setIsClose}/>
                    </div>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        nodeTypes={nodeTypes}
                        edgeTypes={edgeTypes}
                        fitView
                        multiSelectionKeyCode="Meta"
                        minZoom={0.1}
                        maxZoom={1}
                        onNodeClick={onNodeClick}
                        connectionLineComponent={ConnectionLine}
                        onEdgeUpdate={onEdgeUpdate}
                    >
                        <CustomControl/>

                    </ReactFlow>
                </div>
                <Sidebar selectedNode={selectNode} setSelectedNode={setSelectNode} isClose={isClose} setIsClose={setIsClose}/>

            </ReactFlowProvider>
        </div>
    );
};

export default Flow;
