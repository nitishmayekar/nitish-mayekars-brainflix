import React from 'react';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MainContent from './components/MainContent';
import Upload from './components/Upload';
import { Route, Routes } from 'react-router-dom';



function App() {
  
  const [videos, setVideos] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');
  const { videoId } = useParams();

  useEffect(() => {
    const url = 'https://project-2-api.herokuapp.com/videos?api_key=4e15e296-a8f6-4d61-bffb-cad423b094d8';

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setVideos(response.data);
        setCurrentVideo(response.data[0]);
      });
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      let id = undefined;
      if(videoId) {
        id = videoId;
      } else {
        id = videos[0].id;
      }
      const url = `https://project-2-api.herokuapp.com/videos/${id}?api_key=4e15e296-a8f6-4d61-bffb-cad423b094d8`;
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setCurrentVideo(response.data);
        });
    }
  }, [videoId, videos]);


  return (
    <>
     <Header />
     <Routes>
        <Route
          path="/"
          element={<MainContent videos={videos} current={currentVideo} />}
        />
        <Route
          path="/video/:videoID"
          element={<MainContent videos={videos} current={currentVideo} />}
        />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
