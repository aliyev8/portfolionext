'use client'
import { ReactPainter } from "react-painter";
import Link from "next/link";





function HomePage() {

    return (
        <div className={`h-screen z-10 relative max-sm:flex max-sm:h-dvh max-sm:w-full max-sm:pt-0 max-sm:p-0`}>


            <div className='w-full h-full overflow-hidden max-sm:px-4'>
                <ReactPainter
                    image={"/images/childrensgames.webp"}
                    width={2800}
                    render={({  canvas }) => (
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>

                            <div className='flex justify-center items-center text-white cursor-crosshair w-full'
                                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                                <div className="awesomeContainer">{canvas}</div>
                                <div className='absolute left-[20%] flex justify-center w-full items-center
                                 max-sm:items-start  max-sm:left-0'>
                                    <div className={`group flex flex-col gap-4 w-[90%] max-sm:w-[50%]  h-full justify-center text-start`}>
                                        <p className='text-start font-tusker text-4xl tracking-wide group-hover:text-white
                capitalize opacity-80 hover:opacity-100'>
                                            Allahyar Aliyev
                                        </p>
                                        <h3 className={`font-tusker_semi font-bold text-[52px] transition group-hover:text-white capitalize opacity-80
               hover:opacity-100`}>
                                            Web Developer
                                        </h3>
                                    </div>

                                    <div className='group flex justify-start h-full items-center w-full max-sm:items-start max-sm:justify-start'>
                                        <div className='transition relative flex justify-center items-center'>

                                            <div className='link-container'>
                                                <Link className={`group-hover:text-white font-bold font-tusker_semi text-3xl tracking-wide opacity-80
               hover:opacity-100`} href='projects'>
                                                    Projects
                                                </Link>

                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                    )}
                />

            </div>
        </div>
    );
}

export default HomePage;


