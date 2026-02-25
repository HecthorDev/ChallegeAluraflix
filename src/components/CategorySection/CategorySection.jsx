import React, { useState } from 'react';
import Card from '../Card/Card';

const CategorySection = ({ title, color, videos, onDelete, onEdit }) => {
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setStartPos({ x: e.clientX, y: e.clientY });
    };

    if (videos.length === 0) return null;

    return (
        <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12">
            <div className="mb-10 text-center md:text-left">
                <h2
                    className="inline-block rounded-xl px-12 py-4 text-2xl font-black text-white uppercase shadow-2xl transition-transform hover:scale-105 md:text-4xl"
                    style={{
                        backgroundColor: color,
                        boxShadow: `0 0 30px ${color}44`
                    }}
                >
                    {title}
                </h2>
            </div>

            <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
                {videos.map((item) => (
                    <div key={item.id} className="min-w-[300px] flex-shrink-0 snap-center md:min-w-[400px] lg:min-w-0">
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
