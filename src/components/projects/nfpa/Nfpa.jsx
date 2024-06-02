'use client'

import {Parallax} from "react-scroll-parallax";


const Nfpa = ({setProject}) => {


    const enterProject = () => {
        setProject(5)

    }
    const exitProject = () => {
        setProject(4)

    }

    const handleScroll = (progress) => {
        const scroll = Math.round(progress * 10)

        if (scroll === 5) {
            setProject(5)
        }
    }

    return <Parallax
        rootMargin={{top: 0, right: 0, bottom: 0, left: 0}}
        className='max-w-[100%] h-[100vh] flex flex-col justify-center items-center pt-32'
        onProgressChange={(progress) => handleScroll(progress)}
        onEnter={enterProject}
        onExit={exitProject}
        speed={5}>
      <div className='flex gap-6'>
          <Parallax className='max-h-[130px] max-w-[100%] z-40 shadow-3xl rounded-2xl' speed={-10}>
              <img className=' rounded-md'
                   src="/images/nfpa/nfp2.png" alt=""/>
          </Parallax>

          <Parallax className='max-h-[130px] max-w-[100%] z-40 shadow-3xl rounded-2xl' speed={-1}>
              <img className=' rounded-md'
                   src="/images/nfpa/nfp1.png" alt=""/>
          </Parallax>
      </div>
    </Parallax>
}
export default Nfpa;
