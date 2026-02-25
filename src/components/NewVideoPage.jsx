import React from 'react';
import Header from './Header/Header';
import NewVideoForm from './Form/NewVideoForm';
import Footer from './Footer/Footer';
import { DataProvider } from '../context/context';

const NewVideoPage = () => {
    return (
        <DataProvider>
            <Header currentPath="/newvideo" />
            <main className="bg-brand-dark min-h-screen">
                <NewVideoForm />
            </main>
            <Footer />
        </DataProvider>
    );
};

export default NewVideoPage;
