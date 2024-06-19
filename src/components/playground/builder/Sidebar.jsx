import AddNode from "@/components/playground/builder/AddNode";

export default function Sidebar ({selectedNode,setSelectedNode,isClose,setIsClose}) {



    const handleClose= () => {
        setIsClose(!isClose)
    }

    return (

      <aside className={`bg-white min-w-[400px] mt-20 flex flex-col gap-16 transition fixed right-0 h-full
      ${isClose ? 'translate-x-[400px] ' : 'translate-x-0'}`}>
          <button onClick={handleClose} className='absolute top-[45%] -left-14'>
              <img src="/images/playgorund/builder/barArrow.svg" className={`transition ${isClose ?'rotate-180' : 'rotate-0'}`} alt=""/>
          </button>
             <AddNode/>
      </aside>

    );
};