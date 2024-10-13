'use client'
import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitcher";
import {useTheme} from "next-themes";
import Loader from "@/shared/loader/Loader";
import {useEffect, useState} from "react";





function HomePage() {

    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)



    useEffect(() =>  setMounted(true), [])

    if (!mounted){
        return <div>
            <Loader/>
        </div>
    }

    return (
        <div
            style={{
                backgroundImage:'url(./images/yi.png)',
                backgroundRepeat:'no-repeat',
                backgroundPosition:"center",
                backgroundSize:"cover"
            }}
            className={`h-screen z-10 relative max-sm:flex max-sm:h-dvh max-sm:w-full max-sm:pt-0 max-sm:p-0`}>

            <div className='absolute top-0 w-full p-8 flex justify-end'>
                <ThemeSwitch/>
            </div>

            <div className={`w-full h-full overflow-hidden max-sm:px-4 max-sm:bg-blueTheme-background
             ${resolvedTheme === 'light' ? 'bg-blueTheme-background' : 'bg-transparent'}`}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>

                    <div className='flex justify-center items-center text-white w-full'
                         style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>

                        <div className='absolute left-[10%] bottom-4 z-0 flex justify-center w-[18%] items-center
                                 max-sm:items-start  max-sm:left-0 max-sm:w-full max-sm:bottom-8'>
                            <div className={`group flex flex-col w-[90%] max-sm:w-full h-full justify-center text-start`}>
                                <p className='text-start font-tusker text-2xl tracking-wide group-hover:text-white
                capitalize opacity-80 hover:opacity-100'>
                                    Allahyar Aliyev
                                </p>
                                <h3 className={`font-tusker_semi font-bold text-[32px] transition group-hover:text-white capitalize opacity-80
               hover:opacity-100`}>
                                    Web Developer
                                </h3>
                            </div>

                        </div>


                        <div className='absolute flex gap-6 border border-dashed p-4 border-white rounded-md mt-32
                                max-sm:left-0 max-sm:flex-col max-sm:mb-12'
                        >
                            <Link className={`group-hover:text-white font-bold font-tusker_semi text-3xl tracking-wide hover:opacity-100 `} href='projects'>
                                Projects
                            </Link>


                            <Link className={`group-hover:text-white font-bold font-tusker_semi text-3xl tracking-wide
                             hover:opacity-100 ${resolvedTheme === 'light' ? 'text-white' : 'text-black'} max-sm:text-white`}
                                  href='packages'>
                                Packages
                            </Link>
                        </div>
                    </div>

                    


                </div>

            </div>
        </div>
    );
}

export default HomePage;


