'use client';
import Giscus from '@giscus/react';
import useTheme from 'next-theme';

import config from '@/lib/giscus/config';
import { ETheme } from '@/types/enum';

const GiscusComment = () => {
  const { theme } = useTheme();

  return (
    <>
      <Giscus
        id="comments"
        repo={config.repo}
        repoId={config.repoId}
        category={config.category}
        categoryId={config.categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === ETheme.DARK ? 'dark' : 'light_protanopia'}
        loading="lazy"
      />
    </>
  );
};
export default GiscusComment;
