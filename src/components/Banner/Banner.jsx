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
                        className="relative flex min-h-[450px] w-full flex-col items-center justify-center gap-6 px-6 pt-12 pb-24 md:min-h-[600px] md:flex-row md:gap-12 md:px-12 md:py-20 lg:px-20"
                    >
                        {/* Background with blur and overlay */}
                        <div
                            className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat blur-[4px]"
                            style={{ backgroundImage: `url(${item.imagen})` }}
                        />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-dark/20 via-brand-dark/60 to-brand-dark md:bg-gradient-to-r" />

                        {/* Info Content */}
                        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
                            <span
                                className="mb-4 inline-block rounded-lg px-6 py-2 text-lg font-extrabold text-white uppercase shadow-lg md:mb-6 md:px-8 md:py-3 md:text-2xl"
                                style={{
                                    backgroundColor:
                                        item.categoria.toUpperCase() === "FRONT END" ? "var(--category-frontend, #68D1FF)" :
                                            item.categoria.toUpperCase() === "BACK END" ? "var(--category-backend, #00C86F)" :
                                                "#FFBA05"
                                }}
                            >
                                {item.categoria}
                            </span>
                            <h2 className="mb-3 text-2xl font-black text-white md:mb-4 md:text-5xl lg:text-6xl text-balance tracking-tight">
                                {item.titulo}
                            </h2>
                            <p className="max-w-xl text-sm font-light leading-relaxed text-white/80 md:text-lg text-balance">
                                {item.descripcion}
                            </p>
                        </div>

                        {/* Video Preview */}
                        <div
                            onClick={(e) => handlePlay(e, item, startPos)}
                            onMouseDown={handleMouseDown}
                            className="group relative w-full cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 md:w-1/2 md:rounded-2xl md:border-4 lg:max-w-lg shadow-2xl"
                            style={{
                                borderColor:
                                    item.categoria.toUpperCase() === "FRONT END" ? "#68D1FF" :
                                        item.categoria.toUpperCase() === "BACK END" ? "#00C86F" :
                                            "#FFBA05"
                            }}
                        >
                            <img src={item.imagen} alt={item.titulo} className="aspect-video w-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white md:h-16 md:w-16 md:border-2">
                                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-white border-b-[6px] border-b-transparent ml-1 md:border-t-[10px] md:border-l-[20px] md:border-b-[10px] md:ml-2" />
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </Carousel>

            <style>{`
                .custom-dot-list-style {
                  bottom: 10px !important;
                }
                @media (min-width: 768px) {
                    .custom-dot-list-style {
                        bottom: 30px !important;
                    }
                }
                .react-multi-carousel-dot button {
                  border: none !important;
                  background: rgba(255, 255, 255, 0.3) !important;
                  width: 10px !important;
                  height: 10px !important;
                  margin: 0 4px !important;
                  transition: all 0.3s ease;
                }
                .react-multi-carousel-dot--active button {
                  background: #2271D1 !important;
                  transform: scale(1.4);
                  box-shadow: 0 0 10px #2271D1;
                }
            `}</style>
        </div>
    );
};

export default Banner;
