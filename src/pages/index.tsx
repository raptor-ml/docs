import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import GithubIcon from '@site/static/img/github.svg';

function HomepageHeader(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">From notebook to production</h1>
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
        <p>
          Raptor compiles your python research code and takes care of the engineering concerns like scalability and
          reliability on Kubernetes.
        </p>
        <div className={styles.buttons}>
          <Link className={clsx("button gh-star button--primary button--lg", styles.button)}
                to="/docs/guides/getting-started-with-labsdk-ipynb">
            Quickstart Tutorial &lt; 5min ⏱️
          </Link>
          <Link className={clsx("button gh-star button--secondary button--lg", styles.button)}
                to={`https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`}>
            <GithubIcon className={clsx(styles.gh_icon)}/>
            Star on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader/>

      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
