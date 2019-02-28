import React from "react";
import Link from "../../components/link";
import Layout from '../../layouts';
import List from '../../components/list';
import ListItem from '../../components/listItem';
import grid from "../../layouts/grid.module.css";
import styles from "../speakers/speakes.module.css";
import speakerImage from "../../images/speakers/2019/Jim_Lyon.jpg";
import musicImage from "../../images/music/2019/Dale_G.jpg";

const Speakers = () => (
    <Layout>
        <section className={grid.gc8}>
            <div className={grid.gc4}>
                <h4>2019 Speaker</h4>
                <h5>Jim Lyon</h5>
                <div className={`${styles.mediaImage}`}>
                    <img src={speakerImage} alt="Jim Lyon" className="current-speaker"/>
                </div>
                <div className={`${styles.mediaImageDescription}`}>
                    <p>
                        Jim Lyon grew up in Seattle, where he served as an Associate and then Senior Pastor of the Fairview Church (1977-1991).
                        In 1991, he moved to Anderson, Indiana (near Indianapolis) to become Senior Pastor of the Madison Park Church of God.
                        After 22 years at Madison Park, he accepted the invitation to become General Director of Church of God Ministries, 
                        providing leadership for the Church of God in the United States and Canada (and networking with the church in 84 other countries).
                    </p> 
                    <p>
                        Lyon studied at Seattle Pacific University and the University of Washington Law School, 
                        before taking a post in Seattle with Northwest Airlines. 
                        Always fascinated by politics and the public interest, he has worked in many civic and church-related fields, 
                        including representing northwest Seattle as a member of the Washington State House of Representatives.
                    </p>
                    <p>
                        But, it is the Christian ministry that ultimately owned his heart.  It is the conviction that Jesus is at work in the world, 
                        redeeming and transforming us, that has molded his life and vocation more than any other.  
                        Articulate pastor, teacher, and motivational speaker, he became the host of CBH ViewPoint, 
                        the English language broadcast of Christians Broadcasting Hope, in 1996; the program is heard worldwide on air and online each week.
                    </p>
                    <p>
                        In 2011, Lyon released his first book, Go Ahead. Ask Anything, published by Stylos and distributed by Word.  
                        Based on a sermon series delivered at the Madison Park Church, 
                        the book addresses the top ten questions posed in a community survey asking, 
                        “If you could ask anything at church, what would it be?”  A second book, Jesus B was released by Warner Press in 2015.
                    </p>
                    <p>
                        Lyon and his wife, Maureen, married in 1978 and have four sons and six grandchildren.  
                        He enjoys spending time with his family, jogging, traveling, and Haagen Dazs.  
                        He loves politics, current events, and biographies.  When asked about his Achilles’ heel, he is certain to reply, 
                        “chocolate ice cream.”
                    </p>
                </div>
            </div>
            <hr/>
            <div className={grid.gc4}>
                <h4>2019 Music/Worship</h4>
                <h5>Dale Gruver</h5>
                <div className={`${styles.mediaImage}`}>
                    <img src={musicImage} alt="Dale Gruver" className="current-special-music" />
                </div>
                <div className={`${styles.mediaImageDescription}`}>
                    <p>
                        Dale Gruver's mission is to make disciples using the vehicle of music and the arts.
                        An alumnus of Taylor University, Dale has served on staff in Ohio and Florida.
                        Currently he is worship pastor at First Church of God, Greeneville, TN
                        where he enjoy's sonwritting arranging and directing ensembles.
                    </p>
                    <p>
                        Dales's wife Jill, and he have two children. Their son, Declan, is nine, and
                        daughter, Nelly is seven. Dale and Jill are from New Bethleham, PA and still call Oakland COG home.
                    </p>
                </div>
            </div>
        </section>
        <section className={grid.gc8}>
            <h4>Future Speakers/Music</h4>

            <h5>2020</h5>
            <List>
                <ListItem>
                    {"Dates: TBD"}
                    <></>
                </ListItem>
                <ListItem>
                    {"Speaker: TBD"}
                    <></>
                </ListItem>
                <ListItem>
                    {"Music/Worship: TBD"}
                    <></>
                </ListItem>
            </List>
        </section>
    </Layout>
);

export default Speakers;