'use client';

import Giscus from '@giscus/react';

import config from '@/lib/giscus/config';

const GiscusComment = () => {
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
        theme="light_protanopia"
        loading="lazy"
      />
    </>
  );
};
export default GiscusComment;
