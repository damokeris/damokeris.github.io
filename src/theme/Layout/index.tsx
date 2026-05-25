import React from 'react';
import Layout from '@theme-original/Layout';
import type { Props } from '@theme/Layout';
import ReadingProgress from '@site/src/components/ReadingProgress';
import TagsReposition from '@site/src/components/TagsReposition';
import BackToTop from '@site/src/components/BackToTop';

export default function LayoutWrapper(props: Props): React.JSX.Element {
  return (
    <>
      <ReadingProgress />
      <TagsReposition />
      <BackToTop />
      <Layout {...props} />
    </>
  );
}