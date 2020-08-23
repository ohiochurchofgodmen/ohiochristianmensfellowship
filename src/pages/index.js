import React, {useState} from 'react';
import Layout from '../layouts';
import grid from "../layouts/grid.module.css";
import flyer from "../docs/2020 flyer.pdf"
import styles from "./index.module.css";

const IndexPage = () => {
	const [showSchedule, setShowSchedule] = useState(false);

	return (
		<Layout>
			<section className={grid.gc4}>
				<button className={styles.scheduleButton} type="button" onClick={() => setShowSchedule(!showSchedule)}>{showSchedule ? "Hide 2020 Event Information/Schedule" : "Click to see 2020 Event Information/Schedule"}</button>
				{
					showSchedule ? <iframe src={flyer} width="100%" height="1125px" allowtransparency="true" style={{background: "#FFFFFF"}} /> : ""
				}
				<h4>Our Story</h4>
				<p>
					When the Ohio Church of God Men&#39;s ministry began in 1976, the members had
					a vision for all men in Ohio. They would seek to live out the message and ministry of
					reconciliation through corporate fellowship and mission by the grace of God. For many
					years, the men&#39;s ministry hosted a spiritual retreat known as the Ohio Men’s Ox Roast.
					Today, the fellowship, mission, and retreat continue as the Ohio Christian Men&#39;s
					Fellowship.
				</p>
				<p>
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
				</p>
				<p>
					Through the Ohio Christian Men&#39;s Fellowship, Christian men across the state of
					Ohio have raised money for ministry outreach and challenged countless numbers of
					men and boys to serve the Lord. The OCGM council meets multiple times per year,
					under President Lance Rose, to plan the annual retreat and to continue the fellowship.
				</p>
			</section>
		</Layout>
	);
}


export default IndexPage;
