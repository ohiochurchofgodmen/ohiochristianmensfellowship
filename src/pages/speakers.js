import React from "react";
import { Paragraph, Heading, Box, Avatar } from 'grommet';
import Layout from '../layouts';
import speakerImage from "../images/speakers/2020/dr-mark-jackson.png";
import musicImage from "../images/music/2020/SOQT.jpeg";
// import placeholderImage from "../../images/placeholder-person.png"

const Speakers = () => (
    <Layout showHeader={false}>
        <Box as="section">
            <Box>
                <Heading level="4">2020 Speaker</Heading>
                <Heading level="5">Dr. Mark R. Jackson</Heading>
                <Box>
                    <Avatar src={speakerImage} alt="Dr. Mark R. Jackson" size="5xl"/>
                </Box>
                <Box>
                    <Paragraph>
                        Dr. Mark Jackson is the Lead Pastor of Towne Church in Middletown, Ohio. 
                        He has served in this role since 2016. Altogether, he has served in pastoral ministry for 
                        over twenty years. He received his divine call to ministry at the age of eighteen and began 
                        preaching immediately. He was ordained in the Church of God in 1997.
                    </Paragraph>
                    <Paragraph>
                        Pastor Mark graduated magna cum laude from Asbury University in 1995. 
                        He has two master’s degrees, an M.A. in Biblical Studies from Cincinnati Christian University 
                        and an M.Div. from the Southern Baptist Theological Seminary. 
                        He received his Ph.D. from the Southern Baptist Theological Seminary in 2011 in the area of 
                        New Testament Studies.
                    </Paragraph>
                    <Paragraph>
                        Pastor Mark has been a speaker at various revivals, campmeetings, and 
                        conventions. He is a faithful and clear communicator of God’s word. 
                        He has authored two books, A Closer Look at God’s Church (2016) and Salvation (2018).
                    </Paragraph>
                        Pastor Mark is passionate about studying and proclaiming the gospel. 
                        He is committed to mentoring young men who feel called into the ministry. 
                        For recreation, he enjoys reading, watching sports, and spending time with his family. 
                        He and his wife Jenny have three children, Graham, Savannah, and Ally.  
                </Box>
            </Box>
            <hr/>
            <Box>
                <Heading level="4">2020 Music/Worship</Heading>
                <Heading level="5">Sould Out Quartet</Heading>
                <Box>
                    <Avatar src={musicImage} alt="Sould Out Quartet" size="5xl"/>
                </Box>
                <Box>
                    <Paragraph>
                        In May of 2004, in answer to God's call on his life, Matt Rankin of Georgetown, Ohio 
                        started a journey to find men of kindred spirits and equal yoking to partner with him 
                        in a mission to fulfill that calling by evangelizing God's word through song. 
                        Now, in 2013, Matt's calling and dream have been realized in Soul'd Out Quartet. 
                    </Paragraph>
                    <Paragraph>
                        Soul'd Out Quartet, which is comprised of Dusty Barrett (tenor), Jason McAtee (lead), 
                        Matt Rankin (baritone), Ian Owens (bass), is not only a vocal group continuing the heritage 
                        of Southern Gospel music, but is also and foremost a ministry team answering God's call 
                        as stated in Ephesians: He gave some apostles, and some prophets, and some evangelists, 
                        and some pastors, and teachers; for the perfecting of the saints, for the work of the ministry, 
                        for the edifying of the body of Christ. (Ephesians 4:11-13 KJV)
                    </Paragraph>
                    <Paragraph>
                        In this spirit, Soul'd Out Quartet travels the country with a mission of evangelism and 
                        discipleship to not only win souls for Christ by telling the world "what the world 
                        doesn't know", but also to further strengthen and encourage God's people to be the salt and 
                        light to the world and ambassadors for Christ, that we are each called to be and to exhort 
                        God's people to be servants with hearts on fire! 
                    </Paragraph>
                </Box>
            </Box>
        </Box>
    </Layout>
);

export default Speakers;