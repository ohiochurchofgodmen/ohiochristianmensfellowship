import React from 'react';
import Layout from '../layouts';
import grid from "../layouts/grid.module.css";

const IndexPage = () => (
	<Layout>
		<section className={grid.gc4}>
			<h4>Our Story</h4>
			<p>
				When the Ohio Church of God Men's ministry began in 1976, the members had a vision for all men in Ohio.
				They would seek to live out the message and ministry of reconciliation by engaging in corporate fellowship
				and mission by the grace of God. The Men's ministry hosted a spiritual retreat to do just that. Since then,
				this retreat continue as the Ohio Christian Men's Fellowship.
			</p>
			<p>
				The Ohio Christian Men's Fellowship is an event, in which Christian men gather in fellowship with one another. 
				This event has many different activities that both younger and older men can enjoy, such as golfing, fishing, horseshoes, and cornhole. 
				You will get to hear a great speaker, different every year, speaking about life as a Christian man in today's society. 
				After the speaker, take a break and listen to some wonderful music and gather around the fire to share in faith with others. 
				Before the event is through, don't forget to stop by the merchandise tent to get a shirt to remember your time,
				or find a book that will inspire you in the year to come. The Ohio Christian Men's Fellowship is a time to grow in your 
				faith and meet other Christian's like yourself.
			</p>
			<p>
				Through the Ohio Christian Men's Fellowship and other ministry activities, the Ohio Church of God Men have raised money for outreach and challenged countless 
				numbers of men and boys to serve the Lord. An executive council meets four times a year under President Lance Rose to plan the annual 
				retreat and help keep this ministry group as one of the most successful in the country.
			</p>
		</section>
  </Layout>
);

export default IndexPage;
