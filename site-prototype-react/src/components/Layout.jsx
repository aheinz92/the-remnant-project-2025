import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityPanel from './AccessibilityPanel'; // Uncommented import

const Layout = ({ changeFontSize, changeFont, changeColorScheme }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Pass accessibility functions to AccessibilityPanel */}
      <AccessibilityPanel changeFontSize={changeFontSize} changeFont={changeFont} changeColorScheme={changeColorScheme} />
      <Navbar /> {/* Navbar likely doesn't need these props directly */}
      <main className="py-4" style={{ flexGrow: 1 }}> {/* Add moderate vertical padding and allow main to grow */}
        <div className="container"> {/* Add container for horizontal centering and padding */}
          {/* Outlet renders the matched child route component */}
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;