import React from 'react';
import likes from '../assets/Icons/likes.svg';
import views from '../assets/Icons/views.svg';

const VideoInfo = () => {

    let time = new Date();
    let date = `${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()}`;


    return (


        <div className="video-info">
            <div className="video-info__info">
                <h1 className="video-info__info--title"></h1>
                <div className="video-info__info--channel">
                    <h4 className="video-info__info--channel--name"></h4>
                    <h5 className="video-info__info--channel--timestamp"></h5>
                </div>
                <div className="video-info__info--stats">
                    <h5 className="video-info__info--stats--views">
                        <img className="video-info__info--stats--icon" src={views} alt="eyeball" /></h5>
                    <h5 className="video-info__info--stats--likes">
                        <img className="video-info__info--stats--icon" src={likes} alt="heart" /></h5>
                </div>
            </div>
            <p className="video-info__description"></p>
        </div>

    );
};
export default VideoInfo;
