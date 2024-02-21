import React from 'react'
import { motion } from 'framer-motion'


export const AddFamilyMember = ({props}) => {

  const {register , delta, errors, fields, append, remove}  = props

  // console.log("Error", errors)



  return (
    <motion.div
    initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    <h2 className='text-base font-semibold leading-7 text-gray-900'>
      Add Members
    </h2>
    <p className='mt-1 text-sm leading-6 text-gray-600'>
      Add Family Members.
    </p>


        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-2'>
            <label
              htmlFor={`member_name`}
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Member Name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id={`member_name`}
                {...register(`member_name`)}
                autoComplete='address-level2'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
              />
              {errors.member_name?.message && (
                <p className='mt-2 text-sm text-red-400'>
                  {errors.member_name?.message}
                </p>
              )}
            </div>
          </div>

          <div className='sm:col-span-2'>
            <label
              htmlFor={`relation`}
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Relation
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id={`relation`}
                {...register(`relation`)}
                autoComplete='address-level2'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
              />
              {errors.relation?.message && (
                <p className='mt-2 text-sm text-red-400'>
                  {errors.relation?.message}
                </p>
              )}
            </div>
          </div>
        </div>

      {fields?.length > 0 && fields.map((field, index)=> {
        return (
          <div key={field.id} className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-2'>
            <label
              htmlFor={`members.${index}.member_name`}
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Member Name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id={`members.${index}.member_name`}
                {...register(`members.${index}.member_name`,
                {
                required: {
                value: true,
                message: "member name required"
                }
                }
                )}
                autoComplete='address-level2'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
              />
              {/* {errors.members[index]?.member_name?.message && (
                <p className='mt-2 text-sm text-red-400'>
                  {errors.members[index]?.member_name?.message}
                </p>
              )} */}
            </div>
          </div>

          <div className='sm:col-span-2'>
            <label
              htmlFor={`members.${index}.relation`}
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Relation
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id={`members.${index}.relation`}
                {...register(`members.${index}.relation`,{
                required: {
                value: true,
                message: "member relation required"
                }
                })}
                autoComplete='address-level2'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
              />
              {/* {errors.members[index]?.relation?.message && (
                <p className='mt-2 text-sm text-red-400'>
                  {errors.members[index]?.relation?.message}
                </p>
              )} */}
            </div>
          </div>

          <span
            type='button'
            onClick={()=>remove(field.id)}
            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>

          </span>
          </div>
        )
      })}

          <button
            type='button'
            onClick={()=>append({
              id: Date.now(),
              member_name: "",
              relation: "",
            })}
            className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>

  </motion.div>
  )
}
