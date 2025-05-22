import React, { useState, useEffect, useRef } from 'react';

const AccessibilityPanel = ({ changeFontSize, changeFont, changeColorScheme }) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const toggleRef = useRef(null);

    const [currentThemeName, setCurrentThemeName] = useState('gilded'); // Default theme
    const [themeLabelKey, setThemeLabelKey] = useState(Date.now()); // For animation

    const themesData = {
        gilded: {
            name: 'Gilded',
            colors: { primary: '#fcc646', accent: '#d8c2ef', background: '#fffcf2', text: '#4A3B2A' },
        },
        legacy: {
            name: 'Legacy',
            colors: { primary: '#926001', accent: '#5A4CBB', background: '#1A0E07', text: '#dddddd' },
        },
        afrofuturism: {
            name: 'Afrofuturism',
            colors: { primary: '#28093a', accent: '#5A4CBB', background: '#1A0E07', text: '#dddddd' },
        },
        archive: {
            name: 'Archive',
            colors: { primary: '#7c3f58', accent: '#d4a373', background: '#f8f1ee', text: '#4a2c2a' },
        },
        contrast: {
            name: 'Contrast',
            colors: { primary: '#8b0000', accent: '#ffd700', background: '#f0f0f0', text: '#000000' },
        },
        colorless: {
            name: 'Colorless',
            colors: { primary: '#333333', accent: '#999999', background: '#ffffff', text: '#000000' },
        },
    };

    const themeOrder = ['gilded', 'legacy', 'afrofuturism', 'archive', 'contrast', 'colorless'];

    const handleSchemeChange = (scheme) => {
        changeColorScheme(scheme);
        setCurrentThemeName(scheme);
        setThemeLabelKey(Date.now()); // Trigger animation by changing key
    };

    const toggleAccessibilityPanel = () => {
        setIsPanelOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // If panel is open and click is outside panel and outside toggle button
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                setIsPanelOpen(false);
            }
        };

        if (isPanelOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPanelOpen]);

    return (
        <>
            <div className="accessibility-toggle" onClick={toggleAccessibilityPanel} ref={toggleRef}>
                Change Site Appearance
            </div>

            <div className={`accessibility-panel ${isPanelOpen ? 'open' : ''}`} id="accessibilityPanel" ref={panelRef}>
                <div className="accessibility-section">
                    <label>Text Size:</label>
                    <div className="buttons-row">
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-size btn-font-size-smallest"
                            onClick={() => changeFontSize('smallest')}
                            data-size="smallest"
                        >
                            A
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-size btn-font-size-smaller"
                            onClick={() => changeFontSize('smaller')}
                            data-size="smaller"
                        >
                            A
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-size btn-font-size-medium"
                            onClick={() => changeFontSize('medium')}
                            data-size="medium"
                        >
                            A
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-size btn-font-size-larger"
                            onClick={() => changeFontSize('larger')}
                            data-size="larger"
                        >
                            A
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-size btn-font-size-largest"
                            onClick={() => changeFontSize('largest')}
                            data-size="largest"
                        >
                            A
                        </button>
                    </div>
                </div>

                <div className="accessibility-section">
                    <label>Font Style:</label>
                    <div className="buttons-row">
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-style btn-font-style-cozy"
                            onClick={() => changeFont('cozy')}
                            data-font="cozy"
                        >
                            Cozy
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-style btn-font-style-clear"
                            onClick={() => changeFont('clear')}
                            data-font="clear"
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-sm btn-outline-secondary btn-font-style btn-font-style-mono"
                            onClick={() => changeFont('mono')}
                            data-font="mono"
                        >
                            Mono
                        </button>
                    </div>
                </div>

                <div className="accessibility-section">
                    <label className="theme-label" key={themeLabelKey}>
                        Theme: {themesData[currentThemeName]?.name || currentThemeName.charAt(0).toUpperCase() + currentThemeName.slice(1)}
                    </label>
                    <div className="buttons-row theme-circles-row">
                        {themeOrder.map((schemeKey) => {
                            const theme = themesData[schemeKey];
                            if (!theme) return null;
                            const isActive = currentThemeName === schemeKey;
                            const stripeStyle = {
                                background: `linear-gradient(
                                    135deg,
                                    ${theme.colors.text} 0%, ${theme.colors.text} 35%,
                                    ${theme.colors.background} 35%, ${theme.colors.background} 50%,
                                    ${theme.colors.primary} 50%, ${theme.colors.primary} 65%,
                                    ${theme.colors.accent} 65%, ${theme.colors.accent} 100%
                                )`,
                            };

                            return (
                                <button
                                    key={schemeKey}
                                    className={`theme-circle-button ${isActive ? 'active' : ''}`}
                                    onClick={() => handleSchemeChange(schemeKey)}
                                    data-scheme={schemeKey}
                                    aria-label={`Select ${theme.name} theme`}
                                    style={stripeStyle}
                                    title={theme.name}
                                >
                                    {/* No text inside the button */}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccessibilityPanel;