import React, { createContext, useState, useEffect } from 'react';
import db from '../db.json';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(db);

  useEffect(() => {
    setData(db);
  }, []);

  // Función para agregar un video al estado global
  const addVideo = (newVideo) => {
    setData((prevData) => [...prevData, newVideo]);
  };

  // Función para quitar un video del estado global
  const removeVideo = (videoId) => {
    setData((prevData) => prevData.filter((video) => video.id !== videoId));
  };

  // Función para editar un video en el estado global
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