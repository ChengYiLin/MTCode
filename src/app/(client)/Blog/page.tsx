import { Metadata } from 'next';

import PageTitle from '@/components/utils/PageTitle';

export const metadata: Metadata = {
  title: '部落格',
};

export default async function Blog() {
  return (
    <>
      <PageTitle>Blog</PageTitle>

      <p>Coming Soon~</p>
    </>
  );
}
