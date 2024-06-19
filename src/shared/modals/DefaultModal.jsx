'use client'


import {  Dialog, DialogPanel , Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import TextArea from "@/shared/textarea/TextArea";

export default function MyModal({isOpen,setIsOpen, setNodes,data,nodes}) {

    const [value,setValue] = useState('')


    function close() {
        setIsOpen(({data,status}) => {
            return{
                status: false,
                data:null
            }
        })
    }

    return (
        <>

            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative focus:outline-none z-40 " onClose={close} __demoMode>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                        <div className="flex h-full items-center justify-center p-4 ">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel style={{
                                    width:'70%',
                                    height:'80%'
                                }} className="max-w-md rounded-xl bg-white rounded-md py-8 px-6 shadow-sm flex flex-col gap-12">
                                    <div className='mt-8'>{data?.data.name}</div>
                                   <div className='p-6 relative'>
                                       <TextArea data={data} setNodes={setNodes} nodes={nodes}/>
                                   </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
