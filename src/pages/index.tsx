import Head from 'next/head'


export default function Home() {

  return (
    <div className='from-white via-purple-200 to-blue-200 h-screen bg-gradient-to-tr'>
      <Head>
        <title>Share To Do</title>
        <meta name="description" content="Share To Do" />
      </Head>


      <div>

        <h1 className="text-5xl p-4 text-center font-bold text-white mb-10"
        >Share To Do</h1>
        <div className="h-80 w-80 m-auto bg-gray-50 rounded-md shadow-inner flex justify-center place-items-center">

          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" value="text" onChange={(e) => e.preventDefault()} />
            <input
              type="submit"
              value="追加"
              onSubmit={(e) => e.preventDefault()}
            />
          </form>


        </div>
      </div>
    </div>
  )
}
