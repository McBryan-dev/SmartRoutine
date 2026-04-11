import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Desc from '../components/Desc';

const HomePage = () => {
    return (
        <div className='container d-flex flex-column gap-5 justify-content-between'>
            <NavBar />
            <Desc />

            <div className='createSection d-flex justify-content-center my-3 '>
                <Link 
                    to='/create' 
                    className='on_hover text-decoration-none p-3 border border-2 border-dark rounded-pill '
                >
                        <p className="text-secondary fs-3">Free Trial</p>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;