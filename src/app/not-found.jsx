import Image from "next/image";
import '@/globals.css'
import Link from "next/link";

export default function notFound(){
    return <div className='flex justify-center items-center w-full h-screen relative'
    style={{
        backgroundImage:"url('https://res.cloudinary.com/dawsyfhbt/image/upload/v1687250643/Screenshot_2023-06-20_at_12.39.11_npgopf.png')",
        backgroundSize:'cover',
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
    }}
    >
        <Link href='/' className='text-3xl rotate-3 text-white opacity-70 underline absolute top-16'>
           <code> Go Home</code>
        </Link>
    </div>


}