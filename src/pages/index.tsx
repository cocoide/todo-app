import Head from 'next/head'
import { TodoApp } from '../components/TodoApp'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { Header } from '../components/@common/Header'
import Image from 'next/image'

export default function Home() {

  return (
    <div className=''>
      <Head>
        <title>To Do List</title>
        <meta name="description" content="To Do List" />
      </Head>

      <div>
        <Header />

        <div className='flex justify-center place-items-center p-10'>
          <Image src="/flower.png" height={200} width={400} alt={""} />
        </div>



        <div className='mx-20 shadow-purple-300/50'>
          <TodoApp />
        </div>
      </div>
    </div>
  )
}
