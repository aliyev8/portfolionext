'use client'
import data from '@/data/votesTopic.json'

let topics = data.topics
export default function Sidebar({filterVotes}) {




    return <div className='py-0 h-screen border border-r border-[#ececec] min-w-[200px] border-t-0 max-sm:hidden'>

        <ul className='flex flex-col gap-3 pt-8 m-0'>
            {
                topics?.map(({name,color,id}) => (
                <li onClick={()=>filterVotes(name)} key={id} className='flex items-center gap-4 py-[10px] px-8 cursor-pointer text-lg
                 hover:bg-[#f9f9fb] transition'>
                <span className={`w-3 h-3 rounded-full`} style={{background:color}}/>
                <span>{name}</span>
                </li>
                ))
            }
        </ul>

    </div>
}