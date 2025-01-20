import React, { createContext, useState, useEffect } from 'react';
import db from '../db.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('aluraflixData');
    return savedData ? JSON.parse(savedData) : db;
  });

  useEffect(() => {
    localStorage.setItem('aluraflixData', JSON.stringify(data));
  }, [data]);

  const addVideo = (newVideo) => {
    const videoWithId = { ...newVideo, id: Date.now().toString() };
    setData((prevData) => [...prevData, videoWithId]);
  };

  const removeVideo = (videoId) => {
    setData((prevData) => prevData.filter((video) => video.id !== videoId));
  };

  const editVideo = (updatedVideo) => {
    setData((prevData) =>
      prevData.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
  };

  return (
    <DataContext.Provider value={{ data, addVideo, removeVideo, editVideo }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;