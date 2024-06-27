'use client'

import {useEffect, useState} from "react";
import {format} from "date-fns";
import {AnimatePresence, motion} from 'framer-motion'
import {getCookie, setCookie} from "@/utils";
import Arrow from '@/shared/Arrow'

export default function Card({vote}) {

    const [voteCount, setVoteCount] = useState();
    const [prevVoteCount, setPrevVoteCount] = useState();
    const [isVoted, setIsVoted] = useState(null);

    useEffect(() => {
        setPrevVoteCount(vote.count)
        setVoteCount(vote.count)
    }, [vote]);


    useEffect(() => {
        const votedVotes = getCookie("votedVotes");

        if (votedVotes) {
            const parseCookie = JSON.parse(votedVotes);
            if (parseCookie.includes(vote.id)) {
                setIsVoted(vote.id);
            }
        }
    }, [vote]);


    const voteIncrement = (e) => {
        if (isVoted !== vote.id) {
            setPrevVoteCount(voteCount);
            setVoteCount((prevCount) => prevCount + 1);
            setIsVoted(vote.id);

            const votedVotes = getCookie("votedVotes");

            if (votedVotes) {
                const parseCookie = JSON.parse(votedVotes);
                if (!parseCookie.includes(vote.id)) {
                    parseCookie.push(vote.id);
                    setCookie("votedVotes", JSON.stringify(parseCookie));
                }
            } else {
                const parseCookie = [vote.id];
                setCookie("votedVotes", JSON.stringify(parseCookie));
            }
        }
    };


    return <div className='bg-white p-4 flex flex-col rounded-[16px] gap-8 w-full'>

 <div className='flex gap-4'>
     <div className={
         `border flex gap-2 flex-col items-center  rounded-[12px] bg-[#f3f5f6]
             transition ${isVoted === vote.id ? 'border-blue-700' :'border-transparent'}`
     }>
         <AnimatePresence mode='wait'>

             <motion.button
                 key={voteCount}
                 className='bg-transparent border border-none'
                 onClick={voteIncrement}
                 initial={{ opacity: 0, y: voteCount > prevVoteCount ? 20 : -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: voteCount > prevVoteCount ? -20 : 20 }}
                 transition={{ duration: 0.3 }}
                 whileTap={{ scale: 0.9 }}
                 disabled={isVoted === vote.id}>
                 <Arrow disable={isVoted === vote.id}/>
             </motion.button>

         </AnimatePresence>

         <motion.span
             onClick={voteIncrement}
             className="count"
             key={voteCount}
             initial={{ opacity: 0, y: voteCount > prevVoteCount ? 20 : -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: voteCount > prevVoteCount ? -20 : 20 }}
             transition={{ duration: 0.3 }}
         >
             {voteCount}
         </motion.span>

         <span className='h-1 w-1 pt-5'/>

     </div>

     <div className='flex w-full flex-col gap-4'>

         <div className='flex justify-between items-start w-full  max-sm:flex-col-reverse'>
             <div className='flex justify-center gap-3 items-center max-sm:flex-col max-sm:items-start max-sm:mt-4'>
                 <div className='flex items-center gap-2'>
                        <span className='h-8 w-8 rounded-full bg-[#f3f5f6] flex justify-center items-center text-black'>
                        {vote.name.slice(0,1)}
                    </span>
                     <span className='font-medium text-black'>{vote.name}</span>
                 </div>

                 <span className='pl-4 text-[#90a5ba] max-sm:pl-0'>  {format(vote.createDate, "dd MMM yyyy")}</span>
             </div>

             <div className='flex items-center justify-center py-1 px-2 rounded-md text-white'
                  style={{background:vote.color}}>
                 {vote.topic}
             </div>
         </div>


         <div className='flex flex-col max-sm:hidden'>

             <div className='text-lg font-bold'>
                 {vote.subject}
             </div>

             <p className='text-[#4a565b] text-start break-all'>{vote.content}</p>
         </div>

     </div>
 </div>

<div className='hidden max-sm:flex flex-col'>

    <div className='text-lg font-bold'>
        {vote.subject}
    </div>

    <p className='text-[#4a565b] text-start break-all'>{vote.content}</p>
</div>
    </div>
}