import React from 'react'
import { Paragraph, Heading, Box, Carousel, Text, Image, Button, Anchor } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../layouts'
import raffleImage from '../images/knife_for_raffle.jpeg'
import golfDocument from '../docs/mens_golf_info.pdf'
import councilImage from '../images/council_img.jpg'

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query allTestimonialsQuery {
          allTestimonialsJson {
            nodes {
              id
              author
              quote
            }
          }
        }
      `}
      render={(data) => (
        <Layout showHeader showRegisterButton>
          <Box
            forwadedAs="section"
            height="medium"
            overflow="hidden"
            background="dark-1"
            pad="medium"
            fill="horizontal"
          >
            <Carousel fill controls="arrows" play={8000}>
              {data.allTestimonialsJson.nodes.map((testimony) => (
                <Box key={testimony.id} width="medium" alignSelf="center">
                  <Paragraph
                    margin={{
                      left: '28px',
                      right: '28px',
                    }}
                  >
                    {`"${testimony.quote}"`}
                  </Paragraph>
                  <Text
                    textAlign="end"
                    margin={{
                      left: '28px',
                      right: '28px',
                    }}
                  >{`~ ${testimony.author}`}</Text>
                </Box>
              ))}
            </Carousel>
          </Box>
          <Box pad="medium" align="center" margin={{top: "medium"}}>
            <Anchor href="/schedule">
              Click Here For Event Schedule!
            </Anchor>
          </Box>
          <Box pad="medium" align="center">
            <Paragraph fill>
              If you plan to participate in the golf scramble, please open the attached document. <a href={`${golfDocument}`} target="_blank" rel="noreferrer">Golf Attachment</a>
            </Paragraph>
          </Box>
          <Box pad="medium" align="center">
            <Heading level="3">
              Cross Knife Raffle: Made By Forged In Fire Champion Pete Winkler
            </Heading>
            <Image src={raffleImage} margin={{bottom: "small"}}/>
            <Button
              as="a"
              label="Buy raffle tickets"
              href="https://go.rallyup.com/ocmf"
            />
          </Box>
          <Box forwardedAs="section" pad="medium">
            <Heading level="3">Our Story</Heading>
            <Box width="small" pad="none" margin="none">
              <Image src={councilImage} fit="cover"/>
            </Box>
            <Paragraph fill>
              {`When the Ohio Church of God Men's ministry began in 1976, the
              members had a vision for all men in Ohio. They would seek to live
              out the message and ministry of reconciliation through corporate
              fellowship and mission by the grace of God. For many years, the
              men's ministry hosted a spiritual retreat known as the Ohio
              Men’s Ox Roast. Today, the fellowship, mission, and retreat
              continue as the Ohio Christian Men's Fellowship.`}
            </Paragraph>
            <Paragraph fill>
              {`The Ohio Christian Men's Fellowship is an event, in which
              Christian men gather to engage in fellowship with one another.
              This event has many different activities that younger and older
              men can enjoy. The event is broken into two days of activities
              with cabin accommodations included. Friday is the lighter of the
              two days and offers a more relaxed schedule. The highlights of
              Friday include the annual fishing tournament and the evening
              bonfire and hotdog roast. Saturday has a packed schedule that
              includes: three meals, devotional sessions, a sermon from an
              accomplished Christian speaker, worship with professional
              musicians, athletic tournaments, and loads of recreational
              activities such as hiking, fishing, horseshoes, and cornhole. The
              Ohio Christian Men's Fellowship is a time for men to grow in
              their faith, meet and fellowship with brothers in Christ, and
              invite others in your life to experience the love of Jesus Christ.`}
            </Paragraph>
            <Paragraph fill>
              {`Through the Ohio Christian Men's Fellowship, Christian men
              across the state of Ohio have raised money for ministry outreach
              and challenged countless numbers of men and boys to serve the
              Lord. The OCGM council meets multiple times per year, under
              President Lance Rose, to plan the annual retreat and to continue
              the fellowship.`}
            </Paragraph>
          </Box>
        </Layout>
      )}
    />
  )
}

export default IndexPage
