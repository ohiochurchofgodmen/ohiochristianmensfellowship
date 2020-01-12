import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import 'typeface-roboto';
import "./base.css";
import grid from "./grid.module.css";
import styles from "./index.module.css";


const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description,
            keywords,
            language,
            web_author,
            robots
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'language', content: data.site.siteMetadata.language },
            { name: 'web_author', content: data.site.siteMetadata.web_author },
            { name: 'robots', content: data.site.siteMetadata.robots },
          ]}
        >
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={styles.main}>
          <div className={`${grid.g} ${styles.pageWrapper}`}>
            {children}
          </div>
        </main>
        <Footer className={grid.gc4}>
          <p>
            {'Jesus replied, “What is impossible with man is possible with God.” ~ Luke 18:27'}
          </p>
        </Footer>
      </div>
    )}
  />
)

export default Layout;