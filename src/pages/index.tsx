import Head from 'next/head'
import { TodoApp } from '../components/TodoApp'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

export default function Home() {

  return (
    <div className=''>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="To Do List" />
      </Head>


      <div>

        <h1 className="text-5xl p-10 text-center font-bold text-white place-items-center flex flex-row justify-center"
        ><AdjustmentsHorizontalIcon className='h-10 w-10 mr-3' />To Do List</h1>
        <div className="md:mx-20 xl:mx-40 mx-12 p-20  bg-gray-50 rounded-md 
        flex justify-center place-items-center shadow-purple-300/50 bg-opacity-50">

          <TodoApp />

        </div>
      </div>
    </div>
  )
}
