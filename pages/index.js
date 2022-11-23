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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2286%22>🌍️</text></svg>" />

        <meta property="og:title" content="Globally distributed companies" />
        <meta property="og:description" content="A list of awesome distributed teams to work gloablly."/>
        <meta property="og:url" content="realworkfromanywhere.com" />
        <meta property="og:image" content="./og.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@realwfa"> */}
        <meta name="twitter:title" content="Globally distributed companies" />
        <meta name="twitter:description" content="A list of awesome distributed teams to work gloablly." />
        <meta name="twitter:image" content="./og.png" />
      </Head>

      <Home data={data} />
    </div>
  )
}

export async function getStaticProps() {
  const jsonData = await getData()
  return { props: { data: jsonData } }
}