import React from 'react';
import Layout from '../layouts';
import List from '../components/list';
import ListItem from '../components/listItem';
import CardList from '../components/cardList';
import Card from '../components/card';
import Title from '../components/title';
import Media from '../components/media';
import SupportText from '../components/supportText';
import golfImage from '../images/activities/golf/default.jpg';
import fishingImage from '../images/activities/fishing/default.jpg';
import cornholeImage from '../images/activities/cornhole/default.jpg';
import horseshoesImage from '../images/activities/horseshoes/default.jpg';
import grid from "../layouts/grid.module.css";

const Activities = () => (
    <Layout>
        <section className={grid.gc8}>
            <h4>Activities</h4>
            <p>
                The Church of God Men's Ox Roast is a two day event, offering 
                a variety of outdoor activities. There is something for everyone, from individual tournaments
                to group competitions to activities just for fun. These events provide an opportunity to meet 
                and socialize with other church members while enjoying the great outdoors.
            </p>
            <List>
                <ListItem to="#golf" toText="More Info">
                    Golf Tournament
                </ListItem>
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
                    {"Open swiming"}
                    {"From 2pm to 6pm Friday and Saturday"}
                </ListItem>
                <ListItem>
                    {"Climbing wall"}
                    {"Available Friday and Saturday afternoon"}
                </ListItem>
                <ListItem>
                    {"Hiking"}
                    <></>
                </ListItem>
            </List>
        </section>
        <CardList>
            <Card id="golf">
                <Media src={golfImage}/>
                <Title>
                    {"Golf"} 
                    <span className="subTitle-1">{"Tournament"}</span>
                </Title>
                <SupportText>
                    <p>
                        The golf tournament at the Ox Roast can be a great chance to get away from your work week and relax. 
                        Join in with others to play 18-holes of golf. Swap golf tips and stories, as you play your way through 
                        a golf course that has something to offer every skill level.
                    </p>
                    <p>
                        Golf is played at Pine Lakes in Mt. Gilead, OH and tees off at 8:30am Friday morning. We welcome all golfers, singles, twosome, threesomes, and of course 4-somes. Play is a 4-man scramble. For more information about this event you can call Les Bowers at <a href="tel:+15133200057">513-320-0057</a>.
                    </p>
                </SupportText>
            </Card>

            <Card id="fishing">
                <Media src={fishingImage}/>
                <Title>
                    {"Fishing"} 
                    <span className="subTitle-1">{"Tournament"}</span>
                </Title>
                <SupportText>
                    <p>
                        The fishing tournament at the Ox Roast is fun for all ages. Lasting most of the first day, the tournament gives you plenty
                        of time to make memories with others who love fishing just as much as you. The tournament is for
                        catfish, but there are other fish in the ponds as well. So if you enjoy fishing for bass or blue gill, you can do that too. Take
                        advantage of this opportunity to reel in that big fish before the summer ends.
                    </p>
                    <p>
                        Fishing is from 8am to 3pm Friday. For more information about this event you can call Carl Levine at <a href="tel:+19372320064">937-232-0064</a>.
                    </p>
                </SupportText>
            </Card>

            <Card id="archerytag">
                <Title>
                    {"Archery Tag"} 
                </Title>
                <SupportText>
                    <p>
                        Archery tag is similar to dodgeball expect with bows and foam tipped arrows. This game is a lot of fun and we encourge you
                        to try it out while you are at the Ox Roast.
                    </p>
                    <p>
                        For more information about this event you can call John Trussell at <a href="tel:+19376814158">937-681-4158</a>.
                    </p>
                </SupportText>
            </Card>

            <Card id="cornhole">
                <Media src={cornholeImage}/>
                <Title>
                    {"Cornhole"} 
                </Title>
                <SupportText>
                    <p>
                        The cornhole boards at the Ox Roast are always setup and are a great way to meet others. Come enjoy this Midwest pastime, as you
                        try to outscore your opponents. Young or old, this game is easy to learn and fun to play.
                    </p>
                    <p>
                        Cornhole tournament registration will begin Friday at 2pm with the tournament starting at 3pm. 
                        For more information about this event you can call Dan Beckman at <a href="tel:+19376053811">937-605-3811</a>.
                    </p>
                </SupportText>
            </Card>
            <Card id="horseshoes">
                <Media src={horseshoesImage}/>
        
                <Title>
                    {"Horseshoes"} 
                </Title>
                <SupportText>
                    <p>
                        Horseshoes may seem similar to cornhole, but has its own skillset. At the Ox Roast, there are several horshoe pits for you to
                        show off your skills or to learn how to play. There is also a viewing area where you can watch other horseshoers battle it out.
                    </p>
                    <p>
                        Horseshoes tournament reigistration will begin Friday at 11am with the tournament starting at noon on Friday.
                    </p>
                </SupportText>
            </Card>
        </CardList>
  </Layout>
);

export default Activities;
