

export default function AddNode() {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return  <div className='flex flex-col'>
        <div className='bg-gray-900 text-xl font-semibold p-8 tracking-wide'>
            Triggers
        </div>

        <div className='grid grid-cols-3 gap-8 px-8 mt-8'>
            <div className="dndnode input h-[100px] text-sm flex flex-col items-center"
                 onDragStart={(event) => onDragStart(event, 'message')} draggable>

                <img src="/images/playground/builder/message.svg" alt="message" width={60}/>
                <span>Message</span>
            </div>


            {/*<div className="dndnode input h-[100px] text-sm flex flex-col items-center"*/}
            {/*     onDragStart={(event) => onDragStart(event, 'input')} draggable>*/}

            {/*    <img src="/images/playground/builder/messages.svg" alt="message" width={60}/>*/}
            {/*    <span>Request data</span>*/}
            {/*</div>*/}
        </div>
    </div>
}