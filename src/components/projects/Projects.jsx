'use client'


import projectDetails from './projects.json'
import {useEffect, useState} from "react";
import Builder from "./builder/Builder.jsx";
import GeneralSkeleton from "../../shared/skeleton/OrderSkeleton";
import AdminPanel from "./admin-panel/AdminPanel.jsx";
import Vote from "./vote/Vote.jsx";
import Indm from "./indm/Indm.jsx";
import ArtTower from "./art-tower/ArtTower.jsx";
import MobileView from "./mobile/MobileView.jsx";
import {ParallaxProvider} from "react-scroll-parallax";

function Projects() {


    const [project, setProject] = useState(0)
    const [data, setData] = useState()
    const [loading,setLoading] = useState(true)




    const fakeData =  () => {
        setLoading(true)
        setData(projectDetails)
        setTimeout(() => setLoading(false), 1000)
    }

    useEffect(() => {
        fakeData()
    }, []);

    return <div className={`h-full text-gray-200 max-sm:px-4 bg-blueTheme-background`}>


        {
            loading ? <div className={`h-dvh flex justify-center items-center font-avenirMedium font-bold`}>
                    <span className="loader"></span>
                </div> :
              <ParallaxProvider>
                  <div className={`flex w-full  relative  bg-transparent max-sm:flex-col max-sm:pt-0 container-lg `}>
                      <div className='hidden max-sm:block'>
                          <MobileView data={data}/>
                      </div>
                      <section
                          className='w-[38%] max-sm:hidden fixed h-full top-0 max-md:pl-12 max-sm:pl-4
                         max-sm:relative max-sm:pt-0 max-sm:w-full max-sm:h-screen'>
                          {
                              data && <>


                                  <div className='mt-[120px] flex flex-col gap-12 max-md:mt-6 max-sm:mt-4  max-sm:gap-4'>

                                      <div
                                          className={`w-10 h-10 flex justify-center items-center font-avenirMedium text-2xl  `}>
                                          {data[project] && <GeneralSkeleton project={project} content={data[project]?.order}/>}
                                      </div>
                                      <div
                                          className={` flex justify-start font-avenirHeavy text-[42px] max-sm:text-4xl `}>
                                          {data[project] &&
                                              <GeneralSkeleton project={project} content={data[project]?.name} link={data[project]?.link}/> }
                                      </div>

                                      <div
                                          className={` flex justify-start max-w-[70%] text-2xl font-light font-avenirBook max-sm:max-w-full`}>
                                          {data[project] && <GeneralSkeleton project={project} content={data[project]?.description}/>}
                                      </div>


                                      <div
                                          className={`flex flex-wrap items-center gap-4 w-[80%] text-md font-medium font-avenirBook max-sm:w-full`}>
                                          {
                                              data&& data[project]?.technology.map((d, key) => (
                                                  <div  key={key}><GeneralSkeleton project={project} bg={true} content={d}/></div>
                                              ))
                                          }
                                      </div>
                                  </div>
                              </>
                          }
                      </section>
                      <div
                          className={`w-[65%]  ml-[45%]  max-sm:hidden  relative max-md:w-[80%] max-md:ml-[34%] h-[580vh]`}>
                          <Builder setProject={setProject}/>
                          <AdminPanel setProject={setProject}/>
                          <Vote setProject={setProject}/>
                          <Indm setProject={setProject}/>
                          <ArtTower setProject={setProject}/>
                      </div>

                  </div>
              </ParallaxProvider>
        }
    </div>
}

export default Projects