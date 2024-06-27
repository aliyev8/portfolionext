import data from '@/data/votesTopic.json'

let topics = data.topics
export default function MobileSelect({filterVotes}){


    const handleChange = (e) => {
        const name = e.target.value
        filterVotes(name)
    }
    return <div className='hidden max-sm:flex w-full'>
        <select onChange={handleChange} name="topics" id="1"
                className='w-full px-2 py-2 rounded-lg bg-white'>
            {
                topics?.map((t,key) => (
                    <option  key={key} value={t.name}>{t.name}</option>
                ))
            }
        </select>
    </div>
}