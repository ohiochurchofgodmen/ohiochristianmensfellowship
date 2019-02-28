import React from 'react';
import Link from 'gatsby-link';
import Layout from '../layouts/index';

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
      <Link to="/">Go to home page!</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
