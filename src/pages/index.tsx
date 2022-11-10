import Head from 'next/head'
import { TodoApp } from '../components/TodoApp'
import { ShareIcon } from '@heroicons/react/24/outline'

export default function Home() {

  return (
    <div className='from-white via-purple-200 to-blue-200 h-screen bg-gradient-to-tr'>
      <Head>
        <title>To Do Share</title>
        <meta name="description" content="Share To Do" />
      </Head>


      <div>

        <h1 className="text-5xl p-10 text-center font-bold text-white place-items-center flex flex-row justify-center"
        ><ShareIcon className='h-10 w-10 mr-3' />To Do Share</h1>
        <div className="md:mx-20 xl:mx-40 mx-12 p-20  bg-gray-50 rounded-md 
        flex justify-center place-items-center shadow-purple-300/50">

          <TodoApp />

        </div>
      </div>
    </div>
  )
}
