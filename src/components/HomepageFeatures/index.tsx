import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '',
    icon: '',
    description: (
      <>
        过劳的中国在校生，辅修计算机科学与软件工程专业；
      </>
    ),
  },
  {
    title: '',
    icon: '',
    description: (
      <>
        从 3 岁起就参加各类培训班，唯一在各类学校外的时间是去学钢琴；
      </>
    ),
  },
  {
    title: '',
    icon: '',
    description: (
      <>
        肉眼只能看见题目中有用的部分，如果没有离散数学博士学位，他的答案你看了也看不懂；
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        {icon && <div className={styles.featureIcon}>{icon}</div>}
        {title && <Heading as="h3" className={styles.featureTitle}>{title}</Heading>}
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
