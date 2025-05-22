import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'; // Import Outlet

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Contribute from './pages/Contribute';
import Explore from './pages/Explore';
import Interviews from './pages/Interviews';
import Item from './pages/Item';
import People from './pages/People';
import Places from './pages/Places';
import SearchResults from './pages/SearchResults';
import Timelines from './pages/Timelines';
import LegacyWear from './pages/LegacyWear';
import Exhibits from './pages/Exhibits';
import NotionEmbedPage from './pages/NotionEmbedPage';
import Campaign from './pages/Campaign';
import LessonPlans from './pages/LessonPlans';
import BlackPressExhibit from './pages/BlackPressExhibit';
import BlackAnchorsExhibit from './pages/BlackAnchorsExhibit';
import MissingRemnantsExhibit from './pages/MissingRemnantsExhibit';
import RedPedagogyExhibit from './pages/RedPedagogyExhibit';
import WeThePeopleExhibit from './pages/WeThePeopleExhibit';
import TheBlackChurchExhibit from './pages/TheBlackChurchExhibit';
import TheWomenExhibit from './pages/TheWomenExhibit';
import VirtualStoreExhibit from './pages/VirtualStoreExhibit';
import TheAfricanMaskExhibit from './pages/TheAfricanMaskExhibit';
import TheNegativesExhibit from './pages/TheNegativesExhibit';
import Layout from './components/Layout';

function App() {
    // Font Size Control
    const changeFontSize = (size) => {
        document.body.classList.remove('font-size-smallest', 'font-size-smaller', 'font-size-medium', 'font-size-larger', 'font-size-largest');
        document.body.classList.add(`font-size-${size}`);
        localStorage.setItem('preferredFontSize', size);
    };

    // Font Style Control
    const changeFont = (style) => {
        document.body.classList.remove('font-cozy', 'font-clear', 'font-mono');
        document.body.classList.add(`font-${style}`);
        localStorage.setItem('preferredFontStyle', style);
    };

    // Color Scheme Control
    const changeColorScheme = (scheme) => {
        // Remove all existing theme classes
        document.body.classList.remove('legacy-theme', 'afrofuturism-theme', 'archive-theme', 'contrast-theme', 'colorless-theme');
        // Add the new theme class
        document.body.classList.add(`${scheme}-theme`);
        localStorage.setItem('preferredColorScheme', scheme);
    };

    // Load saved preferences on app mount
    useEffect(() => {
        const savedFontSize = localStorage.getItem('preferredFontSize') || 'medium';
        const savedFontStyle = localStorage.getItem('preferredFontStyle') || 'clear';
        const savedColorScheme = localStorage.getItem('preferredColorScheme') || 'gilded';

        changeFontSize(savedFontSize);
        changeFont(savedFontStyle);
        changeColorScheme(savedColorScheme);
    }, []);

    return (
        <Routes>
            {/* Parent route using the Layout component */}
            <Route path="/" element={<Layout changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />}>
                {/* Child routes rendered within the Layout's Outlet */}
                <Route index element={<Home />} /> {/* Use index for the default route */}
                <Route path="about" element={<About />} />
                <Route path="collection" element={<Collection />} />
                <Route path="contribute" element={<Contribute />} />
                <Route path="explore" element={<Explore />} />
                <Route path="interviews" element={<Interviews />} />
                <Route path="item" element={<Item />} /> {/* Consider if item needs an ID param: path="item/:itemId" */}
                <Route path="people" element={<People />} />
                <Route path="places" element={<Places />} />
                <Route path="searchresults" element={<SearchResults />} />
                <Route path="timelines" element={<Timelines />} />
                <Route path="legacy-wear" element={<LegacyWear />} />
                <Route path="exhibits" element={<Exhibits />} />
                <Route path="notion-embed" element={<NotionEmbedPage />} />
                <Route path="campaign" element={<Campaign />} />
                <Route path="lesson-plans" element={<LessonPlans />} />
                <Route path="exhibit/black-press" element={<BlackPressExhibit />} />
                <Route path="exhibit/black-anchors" element={<BlackAnchorsExhibit />} />
                <Route path="exhibit/missing-remnants" element={<MissingRemnantsExhibit />} />
                <Route path="exhibit/red-pedagogy" element={<RedPedagogyExhibit />} />
                <Route path="exhibit/we-the-people" element={<WeThePeopleExhibit />} />
                <Route path="exhibit/the-black-church" element={<TheBlackChurchExhibit />} />
                <Route path="exhibit/the-women" element={<TheWomenExhibit />} />
                <Route path="exhibit/virtual-store" element={<VirtualStoreExhibit />} />
                <Route path="exhibit/the-african-mask" element={<TheAfricanMaskExhibit />} />
                <Route path="exhibit/the-negatives" element={<TheNegativesExhibit />} />
                {/* Redirect unmatched child routes relative to the layout */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}

export default App;