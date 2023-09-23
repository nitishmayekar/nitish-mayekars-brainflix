import React from 'react';
import HeroVideo from './mainContent/HeroVideo';
import VideoInfo from './mainContent/VideoInfo';
import Comments from './mainContent/Comments';
import NextVideos from './mainContent/NextVideos';



const MainContent = ({ videos, current }) => {
    return (
        <main>
            <HeroVideo current={current} />
            <div className="main-content">
                <div className="main-content__video-specific">
                    <VideoInfo current={current} />
                    <Comments current={current} />
                </div>
                <NextVideos videos={videos} current={current} />
            </div>
        </main>
    );
};

export default MainContent;