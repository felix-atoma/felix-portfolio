import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#333333' }}>
            {/* Main content */}
            <div style={{ flex: '1', padding: '0 1rem', paddingTop: '10rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {/* Text and buttons section */}
                    <div style={{ width: '100%', maxWidth: '48%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1rem', '@media (min-width: 768px)': { fontSize: '2.5rem' } }}>
                            Introduction
                        </h1>

                        <div style={{ color: '#333333', fontSize: '2.5rem', paddingTop: '2rem', textAlign: 'left', '@media (min-width: 768px)': { fontSize: '4rem' } }}>
                            <h4>
                                My Name is Felix Atoma, an <br />
                                Accra Based
                                <TypeAnimation
                                    sequence={[
                                        'Frontend Developer',
                                        1000,
                                        'Programmer',
                                        1000,
                                        'Tech Enthusiast',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                            </h4>
                        </div>
                    </div>

                    {/* Photo section */}
                    <div style={{ width: '100%', maxWidth: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: '#d1d1d1', borderRadius: '50%', overflow: 'hidden' }}>
                            {/* Replace the src with the path to your photo */}
                            <img
                                src='src/assets/1W7A3821.jpg'
                                alt='Felix Atoma'
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
