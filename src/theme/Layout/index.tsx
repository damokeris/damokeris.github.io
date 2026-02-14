import React from 'react';
import Layout from '@theme-original/Layout';
import type { Props } from '@theme/Layout';
import ReadingProgress from '@site/src/components/ReadingProgress';

export default function LayoutWrapper(props: Props): React.JSX.Element {
  return (
    <>
      <ReadingProgress />
      <Layout {...props} />
    </>
  );
}