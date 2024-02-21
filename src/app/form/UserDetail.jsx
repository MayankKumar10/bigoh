import React from 'react'
import { motion } from 'framer-motion'


export const UserDetail = ({props}) => {

  const {register , delta, errors}  = props

  return (
    <motion.div
    initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    <h2 className='text-base font-semibold leading-7 text-gray-900'>
      User Information
    </h2>
    <p className='mt-1 text-sm leading-6 text-gray-600'>
      Provide your personal details.
    </p>
    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>              
      <div className='sm:col-span-3'>
        <label
          htmlFor='name'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Full Name
        </label>
        <div className='mt-2'>
          <input
            type='text'
            id='name'
            {...register('name')}
            autoComplete='given-name'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          />
          {errors.name?.message && (
            <p className='mt-2 text-sm text-red-400'>
              {errors.name.message}
            </p>
          )}
        </div>
      </div>

      <div className='sm:col-span-3'>
        <label
          htmlFor='fatherName'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Father Name
        </label>
        <div className='mt-2'>
          <input
            type='text'
            id='fatherName'
            {...register('fatherName')}
            autoComplete='family-name'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          />
          {errors.fatherName?.message && (
            <p className='mt-2 text-sm text-red-400'>
              {errors.fatherName.message}
            </p>
          )}
        </div>
      </div>

      <div className='sm:col-span-3'>
        <label
          htmlFor='motherName'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Mother Name
        </label>
        <div className='mt-2'>
          <input
            type='text'
            id='motherName'
            {...register('motherName')}
            autoComplete='given-name'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          />
          {errors.motherName?.message && (
            <p className='mt-2 text-sm text-red-400'>
              {errors.motherName.message}
            </p>
          )}
        </div>
      </div>

      <div className='sm:col-span-3'>
        <label
          htmlFor='phone'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Phone Number
        </label>
        <div className='mt-2'>
          <input
            type='number'
            id='phone'
            {...register('phone',{
              valueAsNumber: true,
              required: {
                value: true,
                message: "Phone number required"
              }
            })}
            autoComplete='given-name'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          />
          {errors.phone?.message && (
            <p className='mt-2 text-sm text-red-400'>
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>


      <div className='sm:col-span-3'>
        <label
          htmlFor='email'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Email address
        </label>
        <div className='mt-2'>
          <input
            id='email'
            type='email'
            {...register('email')}
            autoComplete='email'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          />
          {errors.email?.message && (
            <p className='mt-2 text-sm text-red-400'>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className='sm:col-span-3'>
        <label
          htmlFor='address'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Address
        </label>
        <div className='mt-2'>
          <input
            type='text'
            id='address'
            {...register('address')}
            autoComplete='given-name'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          />
          {errors.address?.message && (
            <p className='mt-2 text-sm text-red-400'>
              {errors.address.message}
            </p>
          )}
        </div>
      </div>


    </div>
  </motion.div>
  )
}
