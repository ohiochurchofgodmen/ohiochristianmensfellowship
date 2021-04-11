import React from 'react';
import { Paragraph, Heading, Box, List, Text, Card, CardHeader, CardBody, Image, Accordion, AccordionPanel, Stack } from 'grommet';
import Layout from '../layouts';
import fishingImage from '../images/activities/fishing/default.jpg';
import cornholeImage from '../images/activities/cornhole/default.jpg';
import horseshoesImage from '../images/activities/horseshoes/default.jpg';

const Activities = () => (
    <Layout showHeader={false}>
        <Box align="center" pad="small">
            <Heading level="4">Activities</Heading>
            <Paragraph>
                The Ohio Christian Men's Fellowship is an event, offering 
                a variety of outdoor activities. There is something for everyone, from individual tournaments
                to group competitions to activities just for fun. These events provide an opportunity to meet 
                and socialize with other church members while enjoying the great outdoors.
            </Paragraph>
        </Box>
        {/* <Box align="center" pad="small">
            <Box width="100%">
                <Heading level="4">Other Activities</Heading>
                <List 
                    primaryKey="name"
                    data={[
                        { name: <Text>Paddle Boating</Text> },
                        { name: <Text>Kayaking</Text>},
                        { name: <Text>Frisbee Golf</Text> },
                        { name: <Text>Hiking</Text> },
                        { name: <Text>Archery</Text> },
                    ]}
                />
            </Box>
        </Box> */}
        <Card background="light-1">
            <CardHeader>
                <Stack anchor="center">
                    <Image src={fishingImage} fill/>
                    <Box align="center" pad="none" width="100vw">
                        <Text>Fishing Tournament</Text>
                    </Box>
                </Stack>
            </CardHeader>
            <CardBody>
            <Accordion>
                <AccordionPanel label="Details">
                    <Box pad="medium" background="light-2">
                        <Paragraph>
                            The fishing tournament at the Ohio Christian Men's Fellowship is fun for all ages. 
                            The tournament gives you time to make memories with others who love 
                            fishing just as much as you. We will be fishing for catfish, bluegill, bass, etc. 
                            Prizes will be given out at the tournament. There will also be open fishing for anyone on 
                            during recreational time. So if you enjoy fishing, take advantage of this 
                            opportunity to reel in that big fish before the summer ends.
                        </Paragraph>
                        <Paragraph>
                            Fishing will take place at Camp Lebanon from 4 PM to 8 PM Friday. Open fishing will be on Saturday during recreational time.
                            For more information about this event you can call Carl Levine at <a href="tel:+19372320064">937-232-0064</a>.
                        </Paragraph>
                    </Box>
                </AccordionPanel>
            </Accordion>
            </CardBody>
        </Card>

        <Card background="light-1">
            <CardHeader pad="medium"><Image src={cornholeImage} width="200px"/></CardHeader>
            <CardBody pad="medium">
                <Text>Cornhole Tournament</Text>
                <Paragraph>
                    The cornhole boards at the Ohio Christian Men's Fellowship are always setup and are a great way to meet others. 
                    Come enjoy this Midwest pastime, as you try to outscore your opponents. 
                    Young or old, this game is easy to learn and fun to play.
                </Paragraph>
                <Paragraph>
                    Cornhole tournament registration will take place at registration tent when you arrive and the tournament on Saturday from 11:15 PM - 12:45 PM.
                    For more information about this event you can call Chad Knight at <a href="mailto:chadlindleyknight@yahoo.com">chadlindleyknight@yahoo.com</a>.
                </Paragraph>
            </CardBody>
        </Card>


        <Card background="light-1">
            <CardHeader pad="medium"><Image src={horseshoesImage} width="200px"/></CardHeader>
            <CardBody pad="medium">
                <Text>Horseshoes Tournament</Text>
                <Paragraph>
                    Horseshoes may seem similar to cornhole, but has its own skillset. At the Ohio Christian Men's Fellowship, there are several horshoe pits for you to
                    show off your skills or to learn how to play. There is also a viewing area where you can watch other horseshoers battle it out.
                </Paragraph>
                <Paragraph>
                    Horseshoes tournament reigistration will take place at registration tent when you arrive and the tournament on Saturday from 11:15 PM - 12:45 PM.
                    For more information about this event you can call Fred O Davis at <a href="mailto:fredo5865@gmail.com">fredo5865@gmail.com</a>.
                </Paragraph>
            </CardBody>
        </Card>
  </Layout>
);

export default Activities;
