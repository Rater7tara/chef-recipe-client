import { CiFaceFrown } from "react-icons/ci";
import React from 'react'
import { Link, useRouteError,  } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex'>
      <div className='container mx-auto '>
        <div className="text-center">
        <CiFaceFrown className='w-25 h-25 m-auto' />
        </div>
        <div className=' text-center'>
          <h2 className='mb-4 fw-bold '>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-danger mb-4'>
            {error?.message}
          </p>
          <Link to='/' className='btn btn-success'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;