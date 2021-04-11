import React from 'react';
import { Paragraph, Heading, Box, Button} from 'grommet';
import { navigate } from 'gatsby';
import Layout from '../layouts/index';

const NotFoundPage = () => (
  <Layout showHeader={false}>
    <Box>
      <Heading level="h1">NOT FOUND</Heading>
      <Paragraph>You just hit a route that doesn&#39;t exist.</Paragraph>
      <Button onClick={(e) => {
        e.preventDefault();
        navigate("/");
      }}>Go to home page!</Button>
    </Box>
  </Layout>
);

export default NotFoundPage;
