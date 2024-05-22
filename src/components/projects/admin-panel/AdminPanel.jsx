'use client'

import {Parallax} from "react-scroll-parallax";


const AdminPanel = ({setProject}) => {


    const enterProject = () => {
        // setProject(1)

    }
    const exitProject = () => {
        // setProject(2)

    }

    const handleScroll = (progress) => {
        const scroll = Math.round(progress * 10)

        if (scroll === 6) {
            setProject(1)
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
                 src="/images/admin/admin-votes.webp" alt=""/>
        </Parallax>
        <Parallax className='max-w-[40%] z-0 shadow-sm absolute  rounded-md' speed={-12}>
            <img className='rounded-md'
                 src="/images/admin/admin-new-vote.webp" alt=""/>
        </Parallax>

    </Parallax>
}
export default AdminPanel;
