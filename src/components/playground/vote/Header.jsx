import Link from "next/link";
import '@/globals.css'

export default function Header(){
    return <div className='flex justify-between items-center py-[27px] px-8 border border-[#ececec] w-full border-t-0'>

        <Link href='/playground' className='hover:scale-105 transition'>
            <img  src='/images/playground/builder/arrow.svg'/>
        </Link>

        <p className='text-[#90a5ba] text-lg font-medium'>
            # Turn your ideas into reality
        </p>
    </div>
}