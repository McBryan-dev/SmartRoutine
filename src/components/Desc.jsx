import React from 'react';
import QuestionImg from '../assets/question-mark.png';
import { paragraph } from '../texts/description.js';

const Desc = () => {
    return (
        <section className='desc d-flex flex-column gap-5 justify-content-center h-100 align-items-center'>

            <div>
                <div className="desc-heading d-flex justify-content-evenly gap-5 text-center h-100 fw-bold text-color">
                    <div>
                        <h1 className='curve '>HOW DOES IT</h1>
                        <h1>WORK?</h1>
                    </div>
                    <img
                        src={QuestionImg}
                        alt="question-img"
                        className="d-none d-md-block"
                    />
                </div>

                <div className="container h-75 mt-3">
                    <p className='fs-3'>{paragraph}</p>
                </div>
            </div>

            <div>
                <div className="benefits">
                    <div className="text-color"></div>
                </div>
            </div>

        </section>
    )
}

export default Desc;