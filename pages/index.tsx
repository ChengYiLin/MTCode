import Link from 'next/link'
import Layout from '@components/Layout'

export default function Home() {
  return (
    <Layout>
      <p>Test 123</p>

      <Link href="/posts/firstPost">Go TO</Link>
    </Layout>
  )
}
