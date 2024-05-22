'use client'

import {Parallax} from "react-scroll-parallax";


const Indm = ({setProject}) => {


    const enterProject = () => {
        // setProject(1)

    }
    const exitProject = () => {
        // setProject(2)

    }

    const handleScroll = (progress) => {
        const scroll = Math.round(progress * 10)

        if (scroll === 4) {
            setProject(3)
        }
    }

    return <Parallax
        rootMargin={{top: 0, right: 0, bottom: 0, left: 0}}
        className='max-w-[90%] h-[100vh] flex flex-col justify-center items-center pb-32'
        onProgressChange={(progress) => handleScroll(progress)}
        onEnter={enterProject}
        onExit={exitProject}
        speed={-5}>
        <Parallax className='max-h-[130px] z-40 shadow-3xl rounded-2xl' speed={12}>
            <img className='max-w-[100%] rounded-md'
                 src="/images/indm/top_bar.webp" alt=""/>
        </Parallax>
        <Parallax className='max-w-[50%] z-0 shadow-3xl left-0 rounded-md' speed={6}>
            <img className='rounded-md'
                 src="/images/indm/connectalert.webp" alt=""/>
        </Parallax>

        <Parallax className='max-w-[50%]  z-0 shadow-3xl rounded-md' speed={19}>
            <img className='rounded-md'
                 src="/images/indm/links.webp" alt=""/>
        </Parallax>

        <Parallax className='max-w-[20%] z-0 shadow-3xl absolute left-0 rounded-2xl bg-white' speed={12}>
            <img className='rounded-md'
                 src="/images/indm/fb.webp" alt=""/>
        </Parallax>

        <Parallax className='max-w-[20%] z-0 shadow-3xl absolute top-16 right-0 rounded-2xl' speed={2}>
            <img className='rounded-md'
                 src="/images/indm/profile.webp" alt=""/>
        </Parallax>

    </Parallax>
}
export default Indm;
