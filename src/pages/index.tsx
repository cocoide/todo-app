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
        <h1 className="text-5xl p-10 text-center font-bold text-white place-items-center 
        flex flex-row justify-center shadow-purple-300/200"
        ><AdjustmentsHorizontalIcon className='h-10 w-10 mr-3'
          />To Do List</h1>
        <div className='mx-20 shadow-purple-300/50'>
          <TodoApp />
        </div>
      </div>
    </div>
  )
}
