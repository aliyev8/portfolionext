import Header from "@/components/header/Header";
import Link from "next/link";
import Image from "next/image";

export default function PackagesPage(){



    return <div className='bg-blueTheme-background h-screen'>
        <Header/>
        <div className='container-lg pt-32 max-sm:px-4'>

            <h1 className='text-center m-auto max-sm:mt-24 text-white'>Packages</h1>

            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 p-12 mt-8">
                <Link href='packages/csv-list' className='bg-white flex flex-col gap-4 group rounded-md shadow-sm' >
                   <div className='flex justify-center overflow-hidden'>
                       <Image src='/images/social/npm.svg' width={300} height={300}
                              className='w-[60%] pt-8 group-hover:scale-105 transition'
                       />
                   </div>
                    <span className='font-medium text-xl py-1 pl-2 flex bg-red-800 text-white'>csv-list</span>
                </Link>
            </div>
        </div>
    </div>
}