import React from 'react';
import Layout from '../layouts';
import List from '../components/list';
import ListItem from '../components/listItem';
import CardList from '../components/cardList';
import Card from '../components/card';
import CardTitle from '../components/cardTitle';
import Media from '../components/media';
import CardBody from '../components/cardBody';
import fishingImage from '../images/activities/fishing/default.jpg';
import cornholeImage from '../images/activities/cornhole/default.jpg';
import horseshoesImage from '../images/activities/horseshoes/default.jpg';
import grid from "../layouts/grid.module.css";

const Activities = () => (
    <Layout>
        <section className={grid.gc8}>
            <h4>Activities</h4>
            <p>
                The Ohio Christian Men's Fellowship is an event, offering 
                a variety of outdoor activities. There is something for everyone, from individual tournaments
                to group competitions to activities just for fun. These events provide an opportunity to meet 
                and socialize with other church members while enjoying the great outdoors.
            </p>
            <List>
                <ListItem to="#fishing" toText="More Info">
                    Fishing Tournament
                </ListItem>
                <ListItem to="#archerytag" toText="More Info">
                    Archery Tag
                </ListItem>
                <ListItem to="#cornhole" toText="More Info<">
                    Cornhole
                </ListItem>
                <ListItem to="#horseshoes" toText="More Info">
                    Horseshoes
                </ListItem>
            </List>
        </section>
        <section className={grid.gc8}>
            <h4>Other Activities</h4>
            <List>
                <ListItem>
                    {"Paddle Boating"}
                    <></>
                </ListItem>
                <ListItem>
                    {"Kayaking"}
                    <></>
                </ListItem>
                <ListItem>
                    {"Frisbee Golf"}
                    <></>
                </ListItem>
                <ListItem>
                    {"Hiking"}
                    <></>
                </ListItem>
            </List>
        </section>
        <CardList>
            <Card id="fishing">
                <Media src={fishingImage}/>
                <CardBody>
                    <CardTitle>
                        {"Fishing"} 
                        <span className="subTitle-1">{"Tournament"}</span>
                    </CardTitle>
                    <p>
                        The fishing tournament at the Ohio Christian Men's Fellowship is fun for all ages. 
                        The tournament gives you time to make memories with others who love 
                        fishing just as much as you. We will be fishing for catfish, bluegill, bass, etc. 
                        Prizes will be given out at the tournament. There will also be open fishing for anyone on 
                        during recreational time. So if you enjoy fishing, take advantage of this 
                        opportunity to reel in that big fish before the summer ends.
                    </p>
                    <p>
                        Fishing will take place at Camp Lebanon from 4 PM to 8 PM Friday. Open fishing will be on Saturday during recreational time.
                        For more information about this event you can call Carl Levine at <a href="tel:+19372320064">937-232-0064</a>.
                    </p>
                </CardBody>
            </Card>

            <Card id="cornhole">
                <Media src={cornholeImage}/>
                <CardBody>
                    <CardTitle>
                        {"Cornhole"} 
                    </CardTitle>
                    <p>
                        The cornhole boards at the Ohio Christian Men's Fellowship are always setup and are a great way to meet others. 
                        Come enjoy this Midwest pastime, as you try to outscore your opponents. 
                        Young or old, this game is easy to learn and fun to play.
                    </p>
                    <p>
                        Cornhole tournament registration will take place at registration tent when you arrive and the tournament on Saturday from 11:15 PM - 12:45 PM.
                        For more information about this event you can call Chad Knight at <a href="mailto:chadlindleyknight@yahoo.com">chadlindleyknight@yahoo.com</a>.
                    </p>
                </CardBody>
            </Card>
            <Card id="horseshoes">
                <Media src={horseshoesImage}/>
                <CardBody>
                    <CardTitle>
                        {"Horseshoes"} 
                    </CardTitle>
                    <p>
                        Horseshoes may seem similar to cornhole, but has its own skillset. At the Ohio Christian Men's Fellowship, there are several horshoe pits for you to
                        show off your skills or to learn how to play. There is also a viewing area where you can watch other horseshoers battle it out.
                    </p>
                    <p>
                        Horseshoes tournament reigistration will take place at registration tent when you arrive and the tournament on Saturday from 11:15 PM - 12:45 PM.
                        For more information about this event you can call Fred O Davis at <a href="mailto:fredo5865@gmail.com">fredo5865@gmail.com</a>.
                    </p>
                </CardBody>
            </Card>
        </CardList>
  </Layout>
);

export default Activities;
