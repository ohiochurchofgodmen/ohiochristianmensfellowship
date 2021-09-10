import React from 'react'
import Layout from '../layouts'
import { Box, Image } from 'grommet'
import scheduleImage from '../images/OCMF schedule of events 2021.png'

const Schedule = () => (
  <Layout showHeader={false} showRegisterButton={false}>
      <Box width="small" pad="none" margin="none">
        <Image src={scheduleImage} fit="cover"/>
      </Box>
  </Layout>
)

export default Schedule