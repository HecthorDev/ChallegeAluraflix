import React, { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { handlePlay } from '../../utils/videoUtils';

const responsive = {
    all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
    },
};

const Banner = ({ data = [] }) => {
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [Carousel, setCarousel] = useState(null);

    useEffect(() => {
        import('react-multi-carousel').then((mod) => {
            setCarousel(() => mod.default);
        });
    }, []);

    const handleMouseDown = (e) => {
        setStartPos({ x: e.clientX, y: e.clientY });
    };

    const lastData = [...data].sort((a, b) => Number(b.id) - Number(a.id)).slice(0, 10);

    if (lastData.length === 0 || !Carousel) return <div className="min-h-[500px] w-full bg-brand-dark md:min-h-[600px]" />;

    return (
        <div className="relative w-full">
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                arrows={false}
                showDots={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item"
            >
                {lastData.map((item) => (
                    <section
                        key={item.id}
                        className="relative flex min-h-[500px] w-full flex-col-reverse items-center justify-center gap-8 px-6 py-20 md:min-h-[600px] md:flex-row md:px-12 lg:px-20"
                    >
                        {/* Background with blur and overlay */}
                        <div
                            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat blur-sm"
                            style={{ backgroundImage: `url(${item.imagen})` }}
                        />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-dark/0 via-brand-dark/60 to-brand-dark" />

                        {/* Info Content */}
                        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                            <span
                                className="mb-6 inline-block rounded-xl px-8 py-3 text-2xl font-extrabold text-white uppercase shadow-lg"
                                style={{
                                    backgroundColor:
                                        item.categoria === "Front End" ? "var(--category-frontend, #68D1FF)" :
                                            item.categoria === "Back End" ? "var(--category-backend, #00C86F)" :
                                                "#FFBA05"
                                }}
                            >
                                {item.categoria}
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl text-balance">
                                {item.titulo}
                            </h2>
                            <p className="max-w-xl text-base font-light leading-relaxed text-white/90 md:text-lg text-balance">
                                {item.descripcion}
                            </p>
                        </div>

                        {/* Video Preview */}
                        <div
                            onClick={(e) => handlePlay(e, item, startPos)}
                            onMouseDown={handleMouseDown}
                            className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border-4 transition-transform duration-300 hover:scale-105 active:scale-95 md:w-1/2 lg:max-w-lg shadow-2xl"
                            style={{
                                borderColor:
                                    item.categoria === "Front End" ? "#68D1FF" :
                                        item.categoria === "Back End" ? "#00C86F" :
                                            "#FFBA05"
                            }}
                        >
                            <img src={item.imagen} alt={item.titulo} className="aspect-video w-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="h-16 w-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border-2 border-white">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </Carousel>

            <style>{`
                .custom-dot-list-style {
                  bottom: 20px !important;
                }
                .react-multi-carousel-dot button {
                  border: none !important;
                  background: rgba(255, 255, 255, 0.5) !important;
                  width: 12px !important;
                  height: 12px !important;
                  margin: 0 6px !important;
                  transition: all 0.3s ease;
                }
                .react-multi-carousel-dot--active button {
                  background: #2271D1 !important;
                  transform: scale(1.3);
                }
            `}</style>
        </div>
    );
};

export default Banner;
