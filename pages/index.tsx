import Link from 'next/link'
import Layout, { MainContaier, Main, Aside } from '@Layout'

export default function Home() {
  return (
    <Layout>
      <MainContaier>
        <Main>
          <p className="font-bold">Test 123</p>
          <Link href="/posts/firstPost">Go TO</Link>
        </Main>
        <Aside>This is ASIDE</Aside>
      </MainContaier>
    </Layout>
  )
}
