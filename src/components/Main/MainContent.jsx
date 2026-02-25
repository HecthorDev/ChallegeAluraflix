import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import CategorySection from '../CategorySection/CategorySection';
import DataContext from '../../context/context';
import { showEdit } from '../../utils/alerts';
import { motion, AnimatePresence } from 'framer-motion';

const MainContent = () => {
    const { data, loading, error, removeVideo, editVideo } = useContext(DataContext);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return <div className="min-h-screen bg-brand-dark" />;
    if (loading) return (
        <div className="flex min-h-screen items-center justify-center bg-brand-dark">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-brand-blue border-t-transparent" />
        </div>
    );
    if (error) return (
        <div className="flex min-h-screen items-center justify-center bg-brand-dark">
            <p className="text-red-500">Error: {error.message}</p>
        </div>
    );

    const handleEdit = async (item) => {
        const result = await showEdit(item);
        if (result && result.value) {
            editVideo({ ...result.value, id: item.id });
        }
    };

    return (
        <main className="bg-brand-dark pb-20">
            <Banner data={data} />

            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <CategorySection
                        title="FRONT END"
                        color="var(--category-frontend)"
                        videos={data.filter(v => v.categoria.toUpperCase() === "FRONT END")}
                        onDelete={removeVideo}
                        onEdit={handleEdit}
                    />
                    <CategorySection
                        title="BACK END"
                        color="var(--category-backend)"
                        videos={data.filter(v => v.categoria.toUpperCase() === "BACK END")}
                        onDelete={removeVideo}
                        onEdit={handleEdit}
                    />
                    <CategorySection
                        title="INNOVACIÓN Y GESTIÓN"
                        color="var(--category-innovacion)"
                        videos={data.filter(v => v.categoria.toUpperCase() === "INNOVACIÓN Y GESTIÓN")}
                        onDelete={removeVideo}
                        onEdit={handleEdit}
                    />
                </motion.div>
            </AnimatePresence>
        </main>
    );
};

export default MainContent;
