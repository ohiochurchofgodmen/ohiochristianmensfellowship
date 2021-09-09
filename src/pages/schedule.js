import React from 'react'
import Layout from '../layouts'
import { Box, Image } from 'grommet'
import scheduleImage from '../images/OCMF schedule of events 2021.png'

const Schedule = () => (
  <Layout showHeader={false} showRegisterButton={false}>
      <Box width="medium">
        <Image src={scheduleImage} fit="contain"/>
      </Box>
  </Layout>
)

export default Schedule