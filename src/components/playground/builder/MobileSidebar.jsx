import AddNode from "@/components/playground/builder/AddNode";

export default function MobileSidebar ({selectedNode,setSelectedNode,isClose,setIsClose}) {


    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const handleClose= () => {
        setIsClose(!isClose)
    }

    return (

      <div className='relative'>
          <button onClick={handleClose} className={`relative top-[45%] -left-2 flex flex-col transition z-40
          ${isClose ? 'gap-0' : 'gap-1'}`}
          >
              <div className={`w-[14px] h-[1px] bg-black transition ${isClose ? '-rotate-[48deg] absolute' : 'rotate-0'}`}/>
              {
                  isClose ? <></> : <div className='w-[14px] h-[1px] bg-black'/>
              }
              <div className={`w-[14px] h-[1px] bg-black transition ${isClose ? 'rotate-[48deg] absolute' : 'rotate-0'}`}/>
          </button>

          <aside className={`mt-11 flex-col gap-16 transition fixed right-0 h-full hidden max-sm:flex bg-white px-2 
      ${!isClose ? 'translate-x-[100px] ' : '-translate-x-0'}`}>

              <div className="dndnode input h-[100px] text-sm flex flex-col items-center mt-8"
                   onDragStart={(event) => onDragStart(event, 'message')} draggable>

                  <img src="/images/playground/builder/message.svg" alt="message" width={60}/>
                  <span>Message</span>
              </div>
          </aside>
      </div>

    );
};