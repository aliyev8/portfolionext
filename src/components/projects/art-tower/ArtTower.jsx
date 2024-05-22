'use client'

import {Parallax} from "react-scroll-parallax";


const ArtTower = ({setProject}) => {


    const enterProject = () => {
        // setProject(1)

    }
    const exitProject = () => {
        // setProject(2)

    }

    const handleScroll = (progress) => {
        const scroll = Math.round(progress * 10)

        if (scroll === 3) {
            setProject(4)
        }
    }

    return <Parallax
        rootMargin={{top: 0, right: 0, bottom: 0, left: 0}}
        className='max-w-[90%] h-[100vh] flex flex-col justify-center items-center pt-32'
        onProgressChange={(progress) => handleScroll(progress)}
        onEnter={enterProject}
        onExit={exitProject}
        speed={-5}>
        <Parallax className='max-h-[130px] max-w-[30%] z-40 shadow-3xl rounded-2xl' speed={-1}>
            <img className=' rounded-md'
                 src="/images/art-tower/locale.webp" alt=""/>
        </Parallax>
        <Parallax className='max-w-[30%] z-50 shadow-3xl left-0 rounded-md' speed={5}>
            <img className='rounded-md'
                 src="/images/art-tower/hero.webp" alt=""/>
        </Parallax>


        <Parallax className='max-w-[25%] z-0  absolute left-8 rounded-2xl' speed={2}>
            <img className='rounded-md'
                 src="/images/art-tower/flat.webp" alt=""/>
        </Parallax>

        <Parallax className='max-w-[30%] z-0 shadow-3xl absolute top-24 right-0 rounded-2xl' speed={-12}>
            <img className='rounded-md'
                 src="/images/art-tower/flats.webp" alt=""/>
        </Parallax>

    </Parallax>
}
export default ArtTower;
