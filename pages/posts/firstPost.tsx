import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import Layout from '@components/Layout'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Title>First Post</Title>
      <Image
        src="/images/view.jpeg"
        width={400}
        height={400}
        alt="Hello world"
      />
      <Link href="/">Go Back</Link>
    </Layout>
  )
}
