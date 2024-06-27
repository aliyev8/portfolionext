'use client'
import Header from '@/components/playground/vote/Header';
import Sidebar from "@/components/playground/vote/Sidebar";
import Card from "@/components/playground/vote/Card";
import votesdata from "@/data/votes.json"
import {useEffect, useState} from "react";
import MobileSelect from "@/components/playground/vote/MobileSelect";
import AddVote from "@/shared/modals/AddVote";
import nanoId from "nano-id";





let data = votesdata.votes
export default function VotePage(){


    const [votes,setVotes] = useState([])
    const [open,setOpen] = useState(false)

    useEffect(() => {
        setTimeout(()=> setVotes([...data]),500)
    },[])
    const filterVotes = (name) => {
        if (name == "All topics"){
            return  setVotes([...data])
        }
        setVotes(data.filter((v) => v.topic === name ))
    }

    const toggleModal = () => {
        setOpen(!open)
    }

    const addVote = (values) => {
        const date = Date.now()
        const newVote = {
            name:values.name,
            subject:values.subject,
            content:values.content,
            topic:values.topic,
            color:values.color,
            createDate:date,
            count:0,
            id:nanoId()
        }
        setVotes((votes) => [
           newVote ,...votes
        ])
        data.unshift(newVote)

    }


    return <div className='overflow-hidden h-screen lg:container-lg w-full relative'>
        <AddVote open={open} toggleModal={toggleModal} addVote={addVote}/>
        <Header/>
        <div className='flex'>
            <Sidebar  data={data} filterVotes={filterVotes}/>
           <div className='w-full bg-[#f9f9fb] flex justify-start p-12 flex-col gap-4 h-[90vh] overflow-auto scroll_element'>
              <div className='flex justify-between items-center'>
                  <h1 className='mb-2 max-sm:hidden'>Feature Ideas</h1>
                  <button className='bg-[#7b61ff] flex items-center gap-[10px] px-5 py-[10px] rounded-lg text-white
                  hover:bg-[#694bff] transition disabled:bg-[#babfca] max-sm:w-full'
                          disabled={data.length  >= 2}
                  onClick={toggleModal}
                  >
                      <span>Submit idea</span>
                      <img src="/images/playground/vote/plus.svg" alt="+"/>
                  </button>
              </div>

                   <MobileSelect  filterVotes={filterVotes}/>


               {
                   votes.map((vote,key) => (
                       <div key={key}>
                           <Card vote={vote}/>
                       </div>
                   ))
               }
           </div>
        </div>
    </div>
}