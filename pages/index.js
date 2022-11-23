import Head from 'next/head'
import Image from 'next/image'
import Home from '../Components/Home';

import { getData } from './api/companies';

export default function Index({ data }) {
  return (
    <div>
      <Head>
        <title>Globally distributed companies</title>
        <meta name="description" content="A list of awesome distributed teams to work gloablly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home data={data} />
    </div>
  )
}

export async function getStaticProps() {
  const jsonData = await getData()
  return { props: { data: jsonData } }
}