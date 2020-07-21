import React from 'react';

import burgerImg from '../../assets/images/burger-logo.png';

import './logo.css';

const burgerLogo = (props) => {
    return (
    <div className='logo' style={{height:props.height}}>
        <img src={burgerImg} alt='burger images' />
    </div>
    );
};
export default burgerLogo;