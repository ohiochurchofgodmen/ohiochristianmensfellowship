import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import Icon from '../components/icon';
import Button from '../components/button';
import 'typeface-roboto';
import "./base.css";
import grid from "./grid.module.css";
import styles from "./index.module.css";

const Layout = ({ children, showHeader }) => (
  <StaticQuery
    query={graphql`
      query siteTitleQuery {
        site {
          siteMetadata {
            title,
            description,
            keywords,
            language,
            web_author,
            robots,
            donations,
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          htmlAttributes={{
            lang: data.site.siteMetadata.language,
          }}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'web_author', content: data.site.siteMetadata.web_author },
            { name: 'robots', content: data.site.siteMetadata.robots },
          ]}
        >
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Helmet>
        <Header show={showHeader} siteTitle={data.site.siteMetadata.title} giveUrl={data.site.siteMetadata.donations}/>
        <main className={styles.main}>
          <div className={`${grid.g} ${styles.pageWrapper}`}>
            {children}
          </div>
          <div className={styles.registerContainer}>
            <Button to="/registration" className={styles.register} variant="contained"><Icon name="event" variant="dense"/>Register</Button>
          </div>
        </main>
        <Footer className={`${grid.gc4} ${styles.footer}`}>
          <p className={styles.scripture}>
            {`“Iron Sharpens Iron, so one man sharpens another.” ~ Proverbs 27:17`}
          </p>
        </Footer>
      </div>
    )}
  />
)

export default Layout;