import React from 'react'
import { Paragraph, Heading, Box, Avatar, Tabs, Tab } from 'grommet'
import Layout from '../layouts'
import speakerImage from '../images/speakers/pete_winkler.jpeg'
import speakerImage2 from '../images/speakers/woody.jpg'
import musicImage from '../images/music/townesmen.jpg'
import placeholderImage from '../images/placeholder-person.png'

const Speakers = () => (
  <Layout showHeader={false} showRegisterButton>
    <Box pad="medium" align="start" fill="horizontal">
      <Heading level="3">{`Speakers/Music`}</Heading>
    </Box>
    <Tabs pad="medium" fill>
      <Tab title="Speakers">
        <Box elevation="medium" round pad="20px" margin="20px" align="center">
          <Heading level="4">
            {`Pete Winkler (History Channel Forged in Fire Champion)`}
          </Heading>
          <Avatar src={speakerImage} alt="Pete Winkler" size="5xl" />
          <Paragraph>
            {`I was raised on a small farm in southeastern Wisconsin, In 1977 I
            was born again as I watched the Billy Graham/ Johnny Cash Film
            'Gospel Road'. I was delivered and washed from my sin and
            addictions. I knew very soon after God had called me to proclaim His
            Word and over the last 40 plus years I have served in a number of
            church leadership/ pastoral roles. Most of those years I also ran a
            fulltime home improvement business. I have been active in foreign
            missions in Jamaica, Mexico, Guatamala, Kenya and South Sudan. In
            2010. My wife Linda and I left the Upper Peninsula of Michigan to
            care for her Mother in Sidney, OH. It was at that time I got started
            with knifemaking and by the end of 2012 I was working full time in
            it, making and selling our brand, "Cross Knives". It has been an
            incredible time of following Jesus in the Marketplace and watching
            His hand guide our steps. At 68 years old, I am excited as we walk
            into the year ahead and see the opportunities and open doors we are
            given to share His Love and His Word.`}
          </Paragraph>
        </Box>
        <Box elevation="medium" round pad="20px" margin="20px" align="center">
          <Heading level="4">{`Rev. Woodrow Wilson`}</Heading>
          <Avatar src={speakerImage2} alt="Rev. Woodrow Wilson" size="5xl" />
          <Paragraph>
            {`Rev. Woodrow Wilson has been pastoring for 44 years, the last 26 at
            God's Community Outreach in Chillicothe. Rev. Wilson is a writer,
            newspaper columnist (Words From Woody.), teacher, speaker and sports
            official (45 years). He authored a book, "Dare to Believe." He
            participated in the Veterans History Project which is part of the
            Library of Congress, and become part of their permanent collection.
            "Pastor Woody" and wife Trish were married four days short of 51
            years. They have three children: Rev. Matthew Wilson, Rev. Latisha
            (Lollie) Knight and Jeremiah (JP) Wilson.`}
          </Paragraph>
        </Box>
      </Tab>
      <Tab title="Musicans">
        <Box elevation="medium" round pad="20px" margin="20px" align="center">
          <Heading level="4">{`Townsman Quartet`}</Heading>
          <Avatar src={musicImage} alt="Townsman Quartet" size="5xl" />
          <Paragraph>
            {`The Townesmen is a group that has been in existence for many years.
            Started by four laymen in a local church to sing for its services.
            Now after 50 years the group is made up of four people who are long
            time servants of the church, three serving as worship leaders, and
            one serving as a senior pastor.`}
          </Paragraph>
        </Box>
        <Box elevation="medium" round pad="20px" margin="20px" align="center">
          <Heading level="4">{`Casey Liston`}</Heading>
          <Avatar src={placeholderImage} alt="Casey Liston" size="5xl" />
        </Box>
      </Tab>
    </Tabs>
  </Layout>
)

export default Speakers
