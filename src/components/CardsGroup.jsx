import React, { useContext } from 'react';
import DataContext from '../context/context';
import Card from './Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import '../css/CardsGroup.css'; 

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CardsGroup = (props) => {
  const { data, removeVideo, editVideo } = useContext(DataContext);
  const filteredData = data.filter(
    (item) => item.categoria.toLowerCase() === props.title.toLowerCase()
  );

  const handleDelete = (videoId) => {
    removeVideo(videoId);
  };

  const handleEdit = async (item) => {
    const updatedVideo = await showEdit(item);
    if (updatedVideo && updatedVideo.value) {
      editVideo(updatedVideo.value);
    }
  };

  return (
    <motion.section
      className="CardsGroup"
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ amount: 0.6, once: true }}
    >
      <h2
        className="CardsGroup_title"
        style={{
          backgroundColor: props.color,
          borderColor: props.color,
        }}
      >
        {props.title}
      </h2>
      <Carousel responsive={responsive} infinite={true} itemClass="card-item">
        {filteredData.map((item) => (
          <Card
            item={item}
            color={props.color}
            key={item.id}
            id={item.id}
            imagen={item.imagen}
            video={item.video}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </Carousel>
    </motion.section>
  );
};

export default CardsGroup;