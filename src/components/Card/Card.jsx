import React from 'react';
import { RiDeleteBin2Line, RiEditLine } from 'react-icons/ri';
import { handlePlay } from '../../utils/videoUtils';

const Card = ({ item, color, onDelete, onEdit, startPos, onMouseDown }) => {
    return (
        <div
            className="group relative flex flex-col overflow-hidden rounded-xl border-4 bg-brand-grey transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{ borderColor: color, boxShadow: `0 0 15px ${color}33` }}
        >
            <div
                className="relative aspect-video w-full cursor-pointer overflow-hidden"
                onClick={(e) => handlePlay(e, item, startPos)}
                onMouseDown={onMouseDown}
            >
                <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[15px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col border-t-4" style={{ borderColor: color }}>
                {/* Info Section - Dark & Centered */}
                <div className="flex flex-col items-center justify-center p-6 text-center bg-brand-dark/50">
                    <h3 className="text-xl font-bold text-white line-clamp-1 mb-1 uppercase tracking-tight">
                        {item.titulo}
                    </h3>
                    <p className="text-sm font-light text-white/60 line-clamp-2 max-w-[250px]">
                        {item.descripcion}
                    </p>
                </div>

                {/* Actions Section */}
                <div className="flex items-center justify-center gap-8 border-t border-white/10 p-4">
                    <button
                        onClick={() => onDelete(item.id)}
                        className="flex items-center gap-2 text-sm font-bold text-white transition-all hover:text-red-500 hover:scale-110 active:scale-95"
                    >
                        <RiDeleteBin2Line className="text-xl" />
                        <span>BORRAR</span>
                    </button>
                    <button
                        onClick={() => onEdit(item)}
                        className="flex items-center gap-2 text-sm font-bold text-white transition-all hover:text-brand-blue hover:scale-110 active:scale-95"
                    >
                        <RiEditLine className="text-xl" />
                        <span>EDITAR</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
