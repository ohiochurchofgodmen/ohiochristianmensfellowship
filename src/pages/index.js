import React from 'react';
import { Paragraph, Heading, Box } from 'grommet';
import Layout from '../layouts';

const IndexPage = () => {
	return (
		<Layout showHeader>
			<Box forwardedAs="section">
				<Heading level="4">Our Story</Heading>
				<Paragraph>
					When the Ohio Church of God Men&#39;s ministry began in 1976, the members had
					a vision for all men in Ohio. They would seek to live out the message and ministry of
					reconciliation through corporate fellowship and mission by the grace of God. For many
					years, the men&#39;s ministry hosted a spiritual retreat known as the Ohio Men’s Ox Roast.
					Today, the fellowship, mission, and retreat continue as the Ohio Christian Men&#39;s
					Fellowship.
				</Paragraph>
				<Paragraph>
					The Ohio Christian Men&#39;s Fellowship is an event, in which Christian men gather
					to engage in fellowship with one another. This event has many different activities that
					younger and older men can enjoy. The event is broken into two days of activities with
					cabin accommodations included. Friday is the lighter of the two days and offers a more
					relaxed schedule. The highlights of Friday include the annual fishing tournament and
					the evening bonfire and hotdog roast. Saturday has a packed schedule that includes:
					three meals, devotional sessions, a sermon from an accomplished Christian speaker,
					worship with professional musicians, athletic tournaments, and loads of recreational
					activities such as hiking, fishing, horseshoes, and cornhole. The Ohio Christian Men&#39;s
					Fellowship is a time for men to grow in their faith, meet and fellowship with brothers in
					Christ, and invite others in your life to experience the love of Jesus Christ.
				</Paragraph>
				<Paragraph>
					Through the Ohio Christian Men&#39;s Fellowship, Christian men across the state of
					Ohio have raised money for ministry outreach and challenged countless numbers of
					men and boys to serve the Lord. The OCGM council meets multiple times per year,
					under President Lance Rose, to plan the annual retreat and to continue the fellowship.
				</Paragraph>
			</Box>
		</Layout>
	);
}

export default IndexPage;
