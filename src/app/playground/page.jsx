import Link from "next/link";
import Image from "next/image";
import '../../globals.css'
import Header from "@/components/header/Header";
export const metadata = {

    title: 'Playground',
    openGraph: {
        title: 'Playground',
        description:'Life is a playground or nothing. -MR.Nobody',
        images: [
            {
                url: 'https://res.cloudinary.com/dawsyfhbt/image/upload/v1716474439/seo_sfjtb1.webp',
                width: 800,
                height: 600,
                alt: 'img',
            }
        ]
    }
}
export default function PlaygroundPage(){
    return <div className='flex flex-col  h-screen pt-32 bg-blueTheme-background  text-white max-sm:pt-4'>
        <Header/>
        <div className='container-lg w-full flex justify-start items-center gap-16 max-sm:gap-4 max-sm:px-8'>

            <h1 className='text-center m-auto max-sm:mt-24'>Playground</h1>
        </div>


        <div className='grid grid-cols-3 p-16  rounded-md h-full opacity-80 mt-8 container-lg max-sm:grid-cols-1'>

            <Link href='/playground/bot-builder'
                  className='transition group hover:shadow-sm overflow-hidden max-h-[280px] max-sm:max-h-40
                  border border-gray-100 rounded-sm bg-white'
            >
                <Image src='/images/builder/createFlow.webp'
                       width={300} height={200}
                       alt='cover'
                       className='group-hover:scale-105 transition w-full'
                 />
                <p className='flex p-4 text-gray-800 font-medium text-xl max-sm:w-full max-sm:flex max-sm:justify-center'>
                    Bot Builder
                </p>
            </Link>
        </div>
    </div>
}