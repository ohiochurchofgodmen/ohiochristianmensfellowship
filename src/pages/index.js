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
				this retreat has become the annual Men's Ox Roast.
			</p>
			<p>
				The Church of God Men's Ox Roast is a two day event, in which Christian men gather in fellowship with one another. 
				The Ox Roast has many different activities that both younger and older men can enjoy, such as golfing and cornhole. 
				Meals are provided all weekend, including an entertaining pancake breakfast on day two, in addition to the ox roast itself. 
				You will get to hear a great speaker, different every year, speak about life as a Christian man in today's society. 
				After the speaker, take a break and listen to some wonderful music and gather around the fire to share in faith with others. 
				Before the weekend is through, don't forget to stop by the merchandise tent to get a shirt to remember the weekend,
				or find a book that will inspire you in the year to come. The Church of God Men's Ox Roast is a time to grow in your 
				faith and meet other Christian's like yourself.
			</p>
			<p>
				Through the Ox Roast and other ministry activities, the Ohio Church of God Men have raised money for outreach and challenged countless 
				numbers of men and boys to serve the Lord. An executive council meets four times a year under President Rick Dennis to plan the annual 
				retreat and help keep this ministry group as one of the most successful in the country.
			</p>
		</section>
  </Layout>
);

export default IndexPage;
