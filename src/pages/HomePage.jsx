import React from 'react';
import NavBar from '../components/NavBar';
import Desc from '../components/Desc';

const HomePage = () => {
    return (
        <div className='container d-flex flex-column gap-5 justify-content-between'>
            <NavBar />
            <Desc />
        </div>
    )
}

export default HomePage;