'use client'
import * as yup from 'yup'
import {Field, Form, Formik} from "formik";
import list from '@/data/votesTopic.json'





export default function AddVoteForm({addVote}) {

    let topics = [...list.topics]
    topics.shift()

    const topicSchema = yup.object({
        name: yup.string().required().max(20),
        subject: yup.string().required().max(20),
        content:yup.string().required().max(120),
        topic: yup.string().required()

    });

const handleSubmit = values => {

        addVote(values)
    }

    return <div className='mt-12 h-[80vh]'>
        <Formik initialValues={{
            name:"",
            content:"",
            topic:"",
            subject:"",
            color:""

        }} onSubmit={handleSubmit} validationSchema={topicSchema}>
            {({errors,
                  isValid,
                  isSubmitting,
                  dirty,
                  values,
                  setFieldValue
            }) => (
                <Form autoComplete='none'  className='flex flex-col justify-between h-full'>
                   <div  className='flex flex-col gap-6'>
                       <div className='relative'>
                           <Field name='name' maxLength={20} className='form_input w-full' placeholder='Name'
                           />
                           <span role="alert" className='text-red-500 text-sm absolute -bottom-5 left-0'>
                            {errors?.name}
                        </span>
                       </div>
                       <div className='relative'>
                           <Field name='subject' maxLength={20} className='form_input w-full' placeholder='Idea topic'
                           />
                           <span role="alert" className='text-red-500 text-sm absolute -bottom-5 left-0'>
                            {errors?.subject}
                        </span>
                       </div>

                       <div className='relative'>
                           <Field
                               name='content'
                               component='textarea'
                               className='form_input h-[180px] resize-none w-full'
                           />
                           <span role="alert" className='text-red-500 text-sm absolute -bottom-4 left-0'>
                            {errors?.content}
                        </span>
                       </div>

                       <div className='flex flex-col gap-4 relative'>
                           <p className='text-start'>Choose Topic for this Idea</p>

                           <div className='flex gap-4'>
                               {
                                   topics.map(({name,id,color}) => (
                                       <div key={id}>
                                           <Field type="radio" id={id}  name='topic' value={name}
                                                  onChange={() => {
                                                      setFieldValue('color',color)
                                                      setFieldValue('topic',name)
                                                  }}
                                                  className='hidden'/>
                                           <label htmlFor={id}
                                                  className={`border rounded-md p-2 transition cursor-pointer
                                                  ${values.topic === name ? 'border-[#7b61ff]':'border-[#eeeeee]'}`
                                           }>
                                               {name}
                                           </label>
                                       </div>
                                   ))
                               }
                           </div>
                           <span role="alert" className='text-red-500 text-sm absolute -bottom-7 left-0'>
                            {errors?.topic}
                        </span>
                       </div>
                   </div>

                    <button disabled={!isValid && !isSubmitting || !dirty}
                            type='submit'
                            className='form_btn bg-[#7b61ff] disabled:bg-[#babfca]'>
                        Add
                    </button>

                </Form>
            )}
        </Formik>
    </div>
}