import Head from 'next/head'
import Layout, { MainContaier, Main, Aside } from '@Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <MainContaier>
        <Main>
          <p>First Post</p>
          <Image
            src="/images/view.jpeg"
            width={400}
            height={400}
            alt="Hello world"
          />
          <Link href="/">Go Back</Link>
        </Main>
        <Aside>This is ASIDE</Aside>
      </MainContaier>
    </Layout>
  )
}
