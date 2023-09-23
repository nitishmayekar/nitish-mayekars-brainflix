import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Upload from './components/Upload';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [videos, setVideos] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');
  const { videoId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=02e5b1dc-b49e-4905-bfb2-32635d7c4854`
      )
      .then((response) => {
        console.log(response.data);
        setVideos(response.data);
        setCurrentVideo(response.data[0]);
      });
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const id = videoId ? videoId : videos[0].id;
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=02e5b1dc-b49e-4905-bfb2-32635d7c4854`
        )
        .then((response) => {
          console.log(response.data);
          setCurrentVideo(response.data);
        });
    }
  }, [videoId, videos]);

  return (
    <>
    <Router>
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
      </Router>
    </>
  );
};

export default App;
