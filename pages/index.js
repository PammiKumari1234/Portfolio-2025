import Head from 'next/head';
import Navbar from './navbar';

const index = () => {
  return (
    <div className='min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white'>
      <Head>
        <title>Pammi Kumari - Portfolio</title>
        <meta name="description" content="pammi-portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </div>
  )
}

export default index
