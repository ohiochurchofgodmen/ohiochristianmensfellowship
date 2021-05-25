import React from 'react'
import {
  Paragraph,
  Heading,
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  Image,
  Accordion,
  AccordionPanel,
  Stack,
  Grid,
} from 'grommet'
import Layout from '../layouts'
import fishingImage from '../images/activities/fishing/fishing_at_camp_2020.jpg'
import cornholeImage from '../images/activities/cornhole/cornhole_at_camp_2020.jpg'
import horseshoesImage from '../images/activities/horseshoes/horseshoes_at_camp_2020.jpg'
import golfImage from '../images/activities/golf/MARK BALL AND PUTTER DSC_9238.jpg'
import archeryImage from '../images/activities/archery/archery_at_camp_2020.jpg'
import frisbeeGolfImage from '../images/activities/frisebeeGolf/frisebee_golf_at_camp_2020.jpg'
import hikingImage from '../images/activities/hiking/camp_pic_2020.jpg'
import boatingImage from '../images/activities/boating/lake_crosses2_at_camp_2020.jpg'
import styled from 'styled-components'

const StyledOtherActivitiesHeader = styled(Box)`
  grid-column: 1/-1;
`

const StyledAct1 = styled(Box)`
  grid-column: span 2;
  grid-row: span 2;
`

const StyledAct2 = styled(Box)`
  grid-column: 3 / span 2;
  grid-row: span 2;
`

const StyledAct3 = styled(Box)`
  grid-column: span 2;
  grid-row: span 2;
`

const StyledAct4 = styled(Box)`
  grid-column: 3 / span 2;
  grid-row: span 2;
`

const Activities = () => (
  <Layout showHeader={false} showRegisterButton>
    <Box pad="medium" fill>
      <Heading level="3">Activities</Heading>
      <Paragraph fill>
        The Ohio Christian Men&#39;s Fellowship is an event, offering a variety of
        outdoor activities. There is something for everyone, from individual
        tournaments to group competitions to activities just for fun. These
        events provide an opportunity to meet and socialize with other church
        members while enjoying the great outdoors.
      </Paragraph>
    </Box>
    <Grid
      columns={{ count: 'fit', size: ['medium', '1fr'] }}
      gap="small"
      pad="medium"
    >
      <Box>
        <Card background="light-1">
          <CardHeader>
            <Stack anchor="center">
              <Image src={golfImage} fill />
              <Box align="center" pad="none" width="100vw">
                <Text color="light-1" size="2xl">
                  Golf Tournament
                </Text>
              </Box>
            </Stack>
          </CardHeader>
          <CardBody>
            <Accordion>
              <AccordionPanel label="Details">
                <Box pad="medium" background="light-2">
                  <Paragraph>
                    The golf tournament at the Ohio Christian Men&#39;s Fellowship
                    can be a great chance to get away from your work week and
                    relax. Join in with others to play an 18-holes of scramble
                    tournament. Swap golf tips and stories, as you play your way
                    through a golf course that has something to offer every
                    skill level.
                  </Paragraph>
                  <Paragraph>
                    Golf will be held at 1223 N. State Rt. 741 Lebanon Ohio
                    45036. All golfers should be at the course by 10:30AM for an
                    11AM start time on September 10th. For more information
                    about this event you can call Rusty Alward at <a href="mailto:rfalward@gmail.com">rfalward@gmail.com</a>.
                  </Paragraph>
                </Box>
              </AccordionPanel>
            </Accordion>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Card background="light-1">
          <CardHeader>
            <Stack anchor="center">
              <Image src={fishingImage} fill />
              <Box align="center" pad="none" width="100vw">
                <Text color="light-1" size="2xl">
                  Fishing Tournament
                </Text>
              </Box>
            </Stack>
          </CardHeader>
          <CardBody>
            <Accordion>
              <AccordionPanel label="Details">
                <Box pad="medium" background="light-2">
                  <Paragraph>
                    The fishing tournament at the Ohio Christian Men&#39;s
                    Fellowship is fun for all ages. The tournament gives you
                    time to make memories with others who love fishing just as
                    much as you. We will be fishing for catfish, bluegill, bass,
                    etc. Prizes will be given out at the tournament. There will
                    also be open fishing for anyone on during recreational time.
                    So if you enjoy fishing, take advantage of this opportunity
                    to reel in that big fish before the summer ends.
                  </Paragraph>
                  <Paragraph>
                    Fishing will take place at Camp Lebanon from 4 PM to 8 PM
                    Friday. Open fishing will be on Saturday during recreational
                    time. For more information about this event you can call
                    Carl Levine at <a href="tel:+19372320064">937-232-0064</a>.
                  </Paragraph>
                </Box>
              </AccordionPanel>
            </Accordion>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Card background="light-1">
          <CardHeader>
            <Stack anchor="center">
              <Image src={cornholeImage} fill />
              <Box align="center" pad="none" width="100vw">
                <Text color="light-1" size="2xl">
                  Cornhole Tournament
                </Text>
              </Box>
            </Stack>
          </CardHeader>
          <CardBody>
            <Accordion>
              <AccordionPanel label="Details">
                <Box pad="medium" background="light-2">
                  <Paragraph>
                    The cornhole boards at the Ohio Christian Men&#39;s Fellowship
                    are always setup and are a great way to meet others. Come
                    enjoy this Midwest pastime, as you try to outscore your
                    opponents. Young or old, this game is easy to learn and fun
                    to play.
                  </Paragraph>
                  <Paragraph>
                    Cornhole tournament registration will take place at
                    registration tent when you arrive and the tournament on
                    Saturday from 11:15 PM - 12:45 PM. For more information
                    about this event you can call Chad Knight at <a href="tel:+17402531231">
                      (740) 253-1231
                    </a>.
                  </Paragraph>
                </Box>
              </AccordionPanel>
            </Accordion>
          </CardBody>
        </Card>
      </Box>
      <Box>
        <Card background="light-1">
          <CardHeader>
            <Stack anchor="center">
              <Image src={horseshoesImage} fill />
              <Box align="center" pad="none" width="100vw">
                <Text color="light-1" size="2xl">
                  Horseshoe Tournament
                </Text>
              </Box>
            </Stack>
          </CardHeader>
          <CardBody>
            <Accordion>
              <AccordionPanel label="Details">
                <Box pad="medium" background="light-2">
                  <Paragraph>
                    Horseshoes may seem similar to cornhole, but has its own
                    skillset. At the Ohio Christian Men&#39;s Fellowship, there are
                    several horshoe pits for you to show off your skills or to
                    learn how to play. There is also a viewing area where you
                    can watch other horseshoers battle it out.
                  </Paragraph>
                  <Paragraph>
                    Horseshoes tournament reigistration will take place at
                    registration tent when you arrive and the tournament on
                    Saturday from 11:15 PM - 12:45 PM. For more information
                    about this event you can call Fred O Davis at <a href="tel:+13305757485">(330) 575-7485</a>
                  </Paragraph>
                </Box>
              </AccordionPanel>
            </Accordion>
          </CardBody>
        </Card>
      </Box>
    </Grid>
    <Grid
      rows="xsmall"
      columns={{ count: 'fit', size: ['xsmall', '1fr'] }}
      gap="xsmall"
      pad="xsmall"
      fill
    >
      <StyledOtherActivitiesHeader background="dark-2">
        <Stack anchor="center">
          {/* <Image src={hikingImage} fill="horizontal"/> */}
          <Box align="center" pad="none" width="100vw">
            <Heading level="4" color="light-1" size="xl">
              Other Activities
            </Heading>
          </Box>
        </Stack>
      </StyledOtherActivitiesHeader>
      <StyledAct1 background="light-5">
        <Stack anchor="center">
            <Image src={boatingImage} fill />
            <Box align="center" pad="none" width="100vw">
                <Text color="light-1" size="xl">
                    Paddle Boating/Kayaking
                </Text>
            </Box>
        </Stack>
      </StyledAct1>
      <StyledAct2>
        <Stack anchor="center">
          <Image src={frisbeeGolfImage} fill />
          <Box align="center" pad="none" width="100vw">
            <Text color="light-1" size="xl">
              Frisbee Golf
            </Text>
          </Box>
        </Stack>
      </StyledAct2>
      <StyledAct3>
        <Stack anchor="center">
          <Image src={hikingImage} fill />
          <Box align="center" pad="none" width="100vw">
            <Text color="light-1" size="xl">
              Hiking
            </Text>
          </Box>
        </Stack>
      </StyledAct3>
      <StyledAct4>
        <Stack anchor="center">
          <Image src={archeryImage} fill />
          <Box align="center" pad="none" width="100vw">
            <Text color="light-1" size="xl">
              Archery
            </Text>
          </Box>
        </Stack>
      </StyledAct4>
    </Grid>
    <hr/>
  </Layout>
)

export default Activities
