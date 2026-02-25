import React, { useState } from 'react';
import Card from '../Card/Card';

const CategorySection = ({ title, color, videos, onDelete, onEdit }) => {
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setStartPos({ x: e.clientX, y: e.clientY });
    };

    if (videos.length === 0) return null;

    return (
        <section className="mx-auto max-w-[1440px] px-0 py-8 md:px-12 md:py-12">
            <div className="mb-6 px-6 text-center md:mb-10 md:px-0 md:text-left">
                <h2
                    className="inline-block rounded-xl px-8 py-3 text-xl font-black text-white uppercase shadow-2xl transition-transform hover:scale-105 md:px-12 md:py-4 md:text-4xl"
                    style={{
                        backgroundColor: color,
                        boxShadow: `0 0 30px ${color}44`
                    }}
                >
                    {title}
                </h2>
            </div>

            <div className="flex gap-8 overflow-x-auto pb-8 px-6 scrollbar-hide snap-x snap-mandatory md:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
                {videos.map((item) => (
                    <div key={item.id} className="min-w-[280px] flex-shrink-0 snap-center md:min-w-[400px] lg:min-w-0">
                        <Card
                            item={item}
                            color={color}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            startPos={startPos}
                            onMouseDown={handleMouseDown}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
