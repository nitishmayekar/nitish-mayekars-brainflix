import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Upload from './components/Upload';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [videos, setVideos] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');
  const [currentId, setCurrentId ] = useState('');



  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/`
      )
      .then((response) => {
        setVideos(response.data);
        setCurrentVideo(response.data[0]);
      });
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const id = currentId ? currentId : videos[0].id;
      axios
        .get(
          'http://localhost:8888/videos/' + id
        )
        .then((response) => {
          setCurrentVideo(response.data);
        });
    }
  }, [videos, currentId]);

  const getVideoId = (id) => {
    setCurrentId(id);
  }

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
            element={<MainContent videos={videos} current={currentVideo} setVideoId={getVideoId}/>}
          />

          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
