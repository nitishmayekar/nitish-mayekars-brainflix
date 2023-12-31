import React, { useEffect } from 'react';
import HeroVideo from './HeroVideo';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import NextVideos from './NextVideos';
import { useParams } from 'react-router-dom';


const MainContent = ({ videos, current, setVideoId }) => {
    const { videoID } = useParams();

    useEffect(() => {
        if(videoID) {
            setVideoId(videoID);
        }
    }, [videoID])

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