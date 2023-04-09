'use client';

import { NextStudioLoading } from 'next-sanity/studio/loading';

import config from '@/sanity/sanity.config';

export default function Loading() {
  return <NextStudioLoading config={config} />;
}
