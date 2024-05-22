'use client'


import {Parallax} from "react-scroll-parallax";


const Builder = ({setProject}) => {


    const enterProject = () => {
        // setProject(0)
        // console.log('builder')
    }
    const exitProject = () => {
        // setProject(1)
    }

    const handleScroll=(progress)=>{
        const scroll =Math.round(progress * 10)

        if ( scroll === 5){

           setProject(0)
        }
    }

    return <Parallax
        rootMargin={{top:0, right: 0, bottom: 0, left: 0}}
        className='max-w-[90%] h-[100vh] flex justify-center items-center'
        onProgressChange={(progress) => handleScroll(progress)}
        onEnter={enterProject}
        onExit={exitProject}
        speed={-5}>
        <div className='flex flex-col relative'>
            <div className='flex justify-end gap-4'>
                <Parallax className='max-h-[130px] z-40 shadow-3xl rounded-md' speed={11}>
                    <img className='max-w-[100%] rounded-md'
                         src="/images/builder/decision.webp" alt=""/>
                </Parallax>
                <div className='flex z-30 '>
                    <Parallax className='absolute max-w-[16%] max-md:max-w-[28%] bottom-[84px] left-[19%] shadow-sm' speed={-6}>
                        <img className='  '
                             src="/images/builder/groups.webp" alt=""/>
                    </Parallax>


                    <Parallax className='rounded-md flex justify-end z-50 shadow-3xl' speed={5}>
                        <img className='max-w-[100%] rounded-md'
                             src="/images/builder/widgets.webp" alt=""/>
                    </Parallax>
                </div>

            </div>
        </div>
    </Parallax>
}
export default Builder;
