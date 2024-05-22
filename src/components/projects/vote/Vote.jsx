'use client'

import {Parallax} from "react-scroll-parallax";


const Vote = ({setProject}) => {


    const enterProject = () => {
        // setProject(1)

    }
    const exitProject = () => {
        // setProject(2)

    }

    const handleScroll = (progress) => {
        const scroll = Math.round(progress * 10)

        if (scroll === 5) {
            setProject(2)
        }
    }

    return <Parallax
        rootMargin={{top: 0, right: 0, bottom: 0, left: 0}}
        className='max-w-[90%] h-[100vh] flex justify-center items-center'
        onProgressChange={(progress) => handleScroll(progress)}
        onEnter={enterProject}
        onExit={exitProject}
        speed={-5}>
        <Parallax className='max-h-[130px] z-40 shadow-3xl rounded-md' speed={10}>
            <img className='max-w-[100%] rounded-md'
                 src="/images/vote/main.webp" alt=""/>
        </Parallax>
        <Parallax className='max-w-[20%] z-0 left-0 rounded-md blur-[0.4px]' speed={-2}>
            <img className='rounded-md'
                 src="/images/vote/mobile.webp" alt=""/>
        </Parallax>

    </Parallax>
}
export default Vote;
