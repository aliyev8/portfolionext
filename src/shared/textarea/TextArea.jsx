import {useEffect, useState} from "react";


export default function TextArea({data,setNodes,nodes}){


    const msg = data?.data?.message
    const [message,setMessage] = useState(msg)
    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    useEffect(() => {

        setNodes((nds) =>
        nds.map((node) => {
            if (node.id === data.id){
                node.data = {
                    ...node.data,
                    message:message
                }
            }
            return node;
        })
        )
    },[message])


    return <textarea value={message} name="message" id="1" cols="30" rows="10"
                     style={{
                         resize:'none',
                         outline:0
                     }}
                     className='resize-none border border-gray-200 rounded-md p-4 h-[120px] w-full'
                     onChange={handleChange}
    >
    </textarea>
}