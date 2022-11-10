import Head from 'next/head'
import { TodoApp } from '../components/TodoApp'


export default function Home() {

  return (
    <div className='from-white via-purple-200 to-blue-200 h-screen bg-gradient-to-tr'>
      <Head>
        <title>Share To Do</title>
        <meta name="description" content="Share To Do" />
      </Head>


      <div>

        <h1 className="text-5xl p-10 text-center font-bold text-white"
        >Share To Do</h1>
        <div className="h-80 w-80 m-auto bg-gray-50 rounded-md 
        flex justify-center place-items-center shadow-purple-300/50">

          <TodoApp />

        </div>
      </div>
    </div>
  )
}
