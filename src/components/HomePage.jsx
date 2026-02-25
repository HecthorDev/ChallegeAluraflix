import React from 'react';
import Header from './Header/Header';
import MainContent from './Main/MainContent';
import Footer from './Footer/Footer';
import { DataProvider } from '../context/context';

const HomePage = () => {
    return (
        <DataProvider>
            <Header currentPath="/" />
            <MainContent />
            <Footer />
        </DataProvider>
    );
};

export default HomePage;
