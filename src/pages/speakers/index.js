import React from "react";
import Layout from '../../layouts';
import List from '../../components/list';
import ListItem from '../../components/listItem';
import grid from "../../layouts/grid.module.css";
import styles from "../speakers/speakes.module.css";
import speakerImage from "../../images/speakers/2019/Jim_Lyon.jpg";
import musicImage from "../../images/music/2019/Dale_G.jpg";
import placeholderImage from "../../images/placeholder-person.png"

const Speakers = () => (
    <Layout>
        <section className={grid.gc8}>
            <div className={grid.gc4}>
                <h4>2020 Speaker</h4>
                <h5>?</h5>
                <div className={`${styles.mediaImage}`}>
                    <img src={placeholderImage} alt="unknown speaker" className="current-speaker"/>
                </div>
                <div className={`${styles.mediaImageDescription}`}>
                </div>
            </div>
            <hr/>
            <div className={grid.gc4}>
                <h4>2020 Music/Worship</h4>
                <h5>Justin Moore</h5>
                <div className={`${styles.mediaImage}`}>
                    <img src={placeholderImage} alt="unknown music" className="current-special-music" />
                </div>
                <div className={`${styles.mediaImageDescription}`}>
                </div>
            </div>
        </section>
        <section className={grid.gc8}>
            <h4>Future Speakers/Music</h4>

            <h5>2021</h5>
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