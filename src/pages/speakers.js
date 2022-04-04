import React from 'react'
import { Paragraph, Heading, Box, Avatar, Tabs, Tab } from 'grommet'
import Layout from '../layouts'
import speakerImage from '../images/speakers/pete_winkler.jpeg'
import speakerImage2 from '../images/speakers/woody.jpg'
import musicImage from '../images/music/GloryWay.jpeg'
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
          <Heading level="4">{`GloryWay Quartet`}</Heading>
          <Avatar src={musicImage} alt="GloryWay Quartet" size="5xl" />
          <Paragraph>
            {`GloryWay was founded in Mansfield, Ohio by lead singer, Justin Crank. Raised on good old-fashion gospel music, Justin developed a love for four-part harmony.  
            What began as four friends singing around town was blessed by God and has blossomed into a powerful full-time ministry. 
            GloryWay has the privilege of working with several prestigious agencies in the world of Gospel Music entertainment. 
            GloryWay is signed with Capitol Artists as one of their booking agents and is also on the Gateway Management label, a highly-respected management agency. 
            GloryWay travels over 60,000 miles annually, all across the United States, sometimes booking engagements over a year in advance. 
            Every weekend of the year, plus some, is packed full of exciting ministry opportunities for GloryWay. 
            GloryWay songs can be heard on nationwide radio, including ‘Nobody’,  ‘God, You’re Amazing,’ and ‘End of the Story’. Many GloryWay fans have found comfort in ‘Just a Little While’, a ballad written by GloryWay’s own John Cole. 
            All of these songs can be found on the most recent, groundbreaking project titled ‘God, You’re Amazing’. GloryWay has participated in numerous showcases at the National Quartet Convention.  
            In 2016, they were a part of the American Gospel Celebration hosted by Pastor John Hagee.  
            In 2017 and 2018, they were nominated for ‘Sunrise Quartet of the Year’ for SGN Scoops Diamond Awards, taking home the honor in 2018. 
            GloryWay has also been named Southern Gospel Artist of the Year by Southern Gospel New York.  
            They were honored guests on the nationally syndicated radio program “Paul Heil and the Gospel Greats” and they’ve presented their ministry at the Thomas Road Baptist Church in Lynchburg, Virginia. GloryWay has been honored to perform at Dollywood in Pigeon Forge, Tennessee many times over the years. 
            They've been blessed to record in several studios with some elite producers and talented musicians who can be heard on the many projects that they have recorded, including a Christmas CD. 
            GloryWay is made up of owner/ lead singer Justin Crank, tenor Bryan Langley, and baritone John Cole. 
            GloryWay puts on a unique and versatile performance that blends classic four-part harmony with exciting and inspiring new sounds and styles. 
            They look forward to each and every opportunity to share their ministry.  Each performance is sure to delight and encourage all who listen.`}
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
