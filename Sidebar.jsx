import React from 'react';
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game.png'
import automobile from '../../assets/automobile.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blog.png'
import news from '../../assets/news.png'
import channel from '../../assets/channel_sample.png'

const Sidebar = ({sidebar}) => {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className='sortcut-links'>
                <div className='side-link'>
                    <img src={home} alt="" />
                    <p>Home</p>
                </div>
                <div className="side-link">
                    < img src={game_icon} alt="" />
                    <p>Games</p>
                </div>
                <div className="side-link">
                    <img src={automobile} alt="" />
                    <p>Automobile</p>
                </div>
                <div className="side-link">
                    <img src={sports} alt="" />
                    <p>Sports</p>
                </div>
                <div className="side-link">
                    <img src={entertainment} alt="" />
                    <p>Entertainment</p>
                </div>
                <div className="side-link">
                    <img src={tech} alt="" />
                    <p>Tech</p>
                </div>
                <div className="side-link">
                    <img src={music} alt="" />
                    <p>Music</p>
                </div>
                <div className="side-link">
                    <img src={blogs} alt="" />
                    <p>Blogs</p>
                </div>
                <div className="side-link">
                    <img src={news} alt="" />
                    <p>News</p>
                </div>
                <hr />
            </div>
            <div className='subscribed-list'>
                <h3>Subscrived</h3>
                <div className='side-link'>
                    <img src={channel} alt="" /><p>Channel 1</p>
                </div>
                <div className='side-link'>
                    <img src={channel} alt="" /><p>Channel 2</p>
                </div>
                <div className='side-link'>
                    <img src={channel} alt="" /><p>Channel 3</p>
                </div>
                <div className='side-link'>
                    <img src={channel} alt="" /><p>Channel 4</p>
                </div>
                <div className='side-link'>
                    <img src={channel} alt="" /><p>Channel 5</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;