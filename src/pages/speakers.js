import React from 'react'
import { Paragraph, Heading, Box, Avatar, Tabs, Tab } from 'grommet'
import Layout from '../layouts'
import speakerImage from '../images/speakers/pete_winkler.jpeg'
import speakerImage2 from '../images/speakers/woody.jpg'
import musicImage from '../images/music/townesmen.jpg'
import musicImage2 from '../images/music/Casey_Liston.png'
// import placeholderImage from '../images/placeholder-person.png'

const Speakers = () => (
  <Layout showHeader={false} showRegisterButton>
    <Box pad="medium" align="start" fill="horizontal">
      <Heading level="3">{`Speakers/Music`}</Heading>
    </Box>
    <Tabs pad="medium" fill>
      <Tab title="Speakers">
        <Box elevation="medium" round pad="medium" margin="medium" align="center">
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
        <Box elevation="medium" round pad="medium" margin="medium" align="center">
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
        <Box elevation="medium" round pad="medium" margin="medium" align="center">
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
        <Box elevation="medium" round pad="medium" margin="medium" align="center">
          <Heading level="4">{`Casey Liston`}</Heading>
          <Avatar src={musicImage2} alt="Casey Liston" size="5xl" />
          <Paragraph>
            {`I am honored and so excited to be bringing music and leading worship this year at the Ohio Christian Men’s Fellowship!`}
          </Paragraph>
          <Paragraph>
            {`I was raised in a preacher's home, and I have always been a part of worship in some way. As a kid, my family would gather around and we would sing hymns 
            of faith for hours! I grew up learning how to sing from my mother. She would spend hours forcing us kids to sing and would critique us when we messed up.
            At the age of 11, I came to know Christ as my savior. I began learning how to play various instruments and began getting involved in our church worship band. 
            As my talent grew so did my heart for worship and for Christ. I have spent time leading at multiple churches over the years, as well as travelling 
            with a contemporary worship band. For the past 10 years I have attended Dayspring Church of God in Cincinnati, Ohio where I continue to 
            lead and be a part of our worship ministry. I met the love of my life Sarah at Dayspring and we have been married for 5 years. 
            God blessed me with two beautiful children Levi (3), and Lorelai (2). I absolutely love all styles and types of worship music. 
            My heart and goal is to give all the honor and praise that is due to our Lord and Savior Jesus Christ. Again I am so excited to be a 
            part of this great fellowship and I look forward to what God has in store for us.`}
          </Paragraph>
        </Box>
      </Tab>
    </Tabs>
  </Layout>
)

export default Speakers
