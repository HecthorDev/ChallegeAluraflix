import React, { createContext, useState, useEffect } from 'react';
import db from '../db.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem('aluraflixData');
      if (savedData) {
        setData(JSON.parse(savedData));
      } else {
        setData(db);
      }
    } catch (err) {
      setError(err);
      setData(db);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem('aluraflixData', JSON.stringify(data));
    }
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
        video.id === updatedVideo.id ? { ...video, ...updatedVideo } : video
      )
    );
  };

  return (
    <DataContext.Provider value={{ data, loading, error, addVideo, removeVideo, editVideo }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;