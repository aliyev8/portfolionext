import AddVoteForm from "@/shared/forms/AddVoteForm";

export default function AddVote ({toggleModal,open,addVote}) {
    return (
        <div className={`w-full h-screen fixed left-0 top-0 z-10 bg-[#0003] transition ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className={`h-full p-8 right-0 absolute bg-white transition ${open ? 'translate-x-1' : 'translate-x-[350px]'}`}>
                <div className='flex justify-between items-center gap-8'>
                        <span className='text-[32px] font-medium'>
                            Tell us your Idea!
                        </span>
                    <button onClick={toggleModal}>
                        <img src="/images/playground/builder/closeIcon.svg" alt="X"/>
                    </button>
                </div>

                <AddVoteForm addVote={addVote}/>
            </div>
        </div>
    )
}