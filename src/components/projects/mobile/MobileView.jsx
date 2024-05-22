

import GeneralSkeleton from "../../../shared/skeleton/OrderSkeleton";




function MobileView({data}) {




    return<div
        className='px-4 flex flex-col gap-8 pb-8 mt-28'>
        {
            data && data.map((item,key) => (
                <div key={key} className='flex flex-col mt-4  gap-4'>

                   <div className='flex justify-between items-center flex-row-reverse'>
                       <div
                           className={`w-10 h-10 flex justify-center items-center font-avenirMedium font-bold text-2xl`}>
                           <GeneralSkeleton content={item?.order}/>
                       </div>
                       <div
                           className={` flex justify-start font-bold font-avenirHeavy text-[32px]`}>

                           <GeneralSkeleton link={item?.link} content={item.name}/>
                       </div>
                   </div>

                    <div
                        className={` flex justify-start text-xl font-light font-avenirBook`}>
                        <GeneralSkeleton content={item?.description}/>
                    </div>


                    <div
                        className={`flex flex-wrap items-center gap-4 text-sm font-bold font-avenirBook`}>
                        {
                            item?.technology.map((d, i) => (
                                <span key={i}><GeneralSkeleton bg={true} content={d}/></span>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
}
export default MobileView