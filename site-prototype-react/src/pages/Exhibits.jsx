import React, { useState } from 'react'; // Added useState
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/Carousel.css'; // Your custom styles for the carousel

// Import exhibit images
import exhibit1Img from '../assets/images/exhibit1 - Black Anchors Cover.png';
import exhibit2Img from '../assets/images/exhibit2 - The Case of Missing Remnants.png';
import exhibit3Img from '../assets/images/exhibit3 - The Black PRess.png';
import exhibit4Img from '../assets/images/exhibit4 - Red Pedagogy.png';
import exhibit5Img from '../assets/images/exhibit5 - We THe PEople.png';
import exhibit6Img from '../assets/images/exhibit6 - The Black Church.png';
import exhibit7Img from '../assets/images/exhibit7 - The Women.png';
import exhibit8Img from '../assets/images/exhibit8 - Virtual Store.png';
import exhibit9Img from '../assets/images/exhibit9 - The African Mask.png';
import exhibit10Img from '../assets/images/exhibit10 - The Negatives.png';
import exhibit11Img from '../assets/images/exhibit11 - black love.png';

const Exhibits = () => {
    const exhibitsData = [
        { id: 1, name: 'The Black Press', img: exhibit3Img, alt: 'The Black Press Cover', link: '/exhibit/black-press' },
        { id: 2, name: 'Black Anchors', img: exhibit1Img, alt: 'Black Anchors Cover', link: 'https://www.spatial.io/s/Black-Anchors-6810b6e63bcf136ced20bff4?share=2032722221641495344' },
        { id: 3, name: 'The Case of Missing Remnants', img: exhibit2Img, alt: 'The Case of Missing Remnants Cover', link: 'https://www.spatial.io/s/The-Case-of-The-Missing-Remnants-6815559e2a90bf213250769a?share=1404135838120971459' },
        { id: 4, name: 'Red Pedagogy', img: exhibit4Img, alt: 'Red Pedagogy Cover', link: 'https://www.spatial.io/s/Red-Pedagogy-68109bee4b8cdc66e2f285d5?share=4609569406616588627' },
        { id: 5, name: 'We The People', img: exhibit5Img, alt: 'We The People Cover', link: 'https://www.spatial.io/s/We-The-People-680fca15083deeaea904d34d?share=3724578877180075239' },
        { id: 6, name: 'The Black Church', img: exhibit6Img, alt: 'The Black Church Cover', link: 'https://www.spatial.io/s/The-Black-Church-681d0d991858a3f82535a48b?share=8900012902852703082' },
        { id: 7, name: 'The Women', img: exhibit7Img, alt: 'The Women Cover', link: 'https://www.spatial.io/s/The-Women-681463f595a63dcdb84804ce?share=1268131637701215359' },
        { id: 8, name: 'Virtual Store', img: exhibit8Img, alt: 'Virtual Store Cover', link: 'https://www.spatial.io/s/Legacy-Wear-68138c1f62eb6e57f4a9f1d2?share=3031545580383190941' },
        { id: 9, name: 'The African Mask', img: exhibit9Img, alt: 'The African Mask Cover', link: 'https://www.spatial.io/s/African-Masks-68137a31bce0f35aedc16b5f?share=2812935034911725714' },
        { id: 10, name: 'The Negatives', img: exhibit10Img, alt: 'The Negatives Cover', link: 'https://www.spatial.io/s/The-Negatives-68139bedec3dc223a0487a2c?share=658564579886837050' },
        { id: 11, name: 'Black Love', img: exhibit11Img, alt: 'Black Love Cover', link: 'https://www.spatial.io/s/Black-Love-681d139ecb99f25460e76dfd?share=48037187865668564' },
    ];

    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleExhibitClick = (event, clickedIndex) => {
        if (swiperInstance) {
            if (swiperInstance.activeIndex !== clickedIndex) {
                event.preventDefault(); // Prevent Link navigation
                swiperInstance.slideTo(clickedIndex); // Slide to the clicked exhibit
            }
            // If it's the active slide, the Link's default navigation will proceed
        }
    };

    return (
        <main className="container my-5" id="main-content">
            {/* Special Collections Section */}
            <section>
                <h1 className="mb-4">Special Exhibits and Collections</h1> {/* Updated Heading */}
                <p>Explore our comprehensive digital archives for in-depth research on key aspects of Black history. These resources provide valuable insights into the lives and contributions of Black communities, leaders, and organizations throughout history.</p>
                <p>Pages created on <a href="https://notion.ai" target="_blank" rel="noopener noreferrer">notion.ai</a></p>
                
                <div className="swiper-container-wrapper"> {/* Wrapper for centering and sizing */}
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'} // Adjust based on how many slides you want partially visible
                        coverflowEffect={{
                            rotate: 50, // Rotation of side slides
                            stretch: 0, // Stretch space between slides
                            depth: 100, // Depth of side slides (creates 3D effect)
                            modifier: 1, // Effect multiplier
                            slideShadows: true, // Whether to add shadows to slides
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper" // Custom class for styling
                        onSwiper={setSwiperInstance} // Get the swiper instance
                    >
                        {exhibitsData.map((exhibit, index) => (
                            <SwiperSlide key={exhibit.id} className="exhibit-swiper-slide">
                                <Link
                                    to={exhibit.link}
                                    style={{ textDecoration: 'none', display: 'block', width: '100%', height: '100%' }}
                                    onClick={(e) => handleExhibitClick(e, index)}
                                >
                                    <img
                                        src={exhibit.img}
                                        alt={exhibit.alt}
                                        className="exhibit-swiper-image"
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    );
};

export default Exhibits;