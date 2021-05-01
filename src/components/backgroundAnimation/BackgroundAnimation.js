import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../config/particle-config';

const BackgroundAnimation = () => {
    return (
        <div>
            <Particles params={particlesConfig}/>
        </div>
    );
};

export default BackgroundAnimation;