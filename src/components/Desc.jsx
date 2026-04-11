import React, { useEffect, useState } from 'react';
import QuestionImg from '../assets/question-mark.png';
import BenefitImg from '../assets/benefits.png'
import { descParagraph } from '../texts/description.js';
import { WHY_SLIDES } from '../texts/description.js';

const Desc = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSlideIndex((i) => (i + 1) % WHY_SLIDES.length);
        }, 10000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className='desc d-flex flex-column gap-5 justify-content-center align-items-center'>

            <div className="d-flex flex-column gap-5">
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

                <div className="container h-75 mt-3 p-3">
                    <p className='fs-3'>{descParagraph}</p>
                </div>
            </div>


            <div className="d-flex flex-column gap-5">

                <div className="benefits desc-heading d-flex justify-content-evenly gap-5 text-center h-100 fw-bold text-color">
                    <div>
                        <h1 className='curve '>WHY CHOOSE</h1>
                        <h1>US?</h1>
                    </div>
                    <img
                        src={BenefitImg}
                        alt="confused-png"
                        className="d-none d-md-block h-25 w-25"
                    />
                </div>

                <div className="container carousel h-75 mt-3 p-5" style={{ overflow: 'hidden' }}>
                    <div
                        className="d-flex"
                        style={{
                            transform: `translateX(-${slideIndex * 100}%)`,
                            transition: 'transform 0.5s ease-in-out',
                        }}
                    >
                        {WHY_SLIDES.map((text, i) => (
                            <div
                                key={i}
                                className="fs-3"
                                style={{ flex: '0 0 100%' }}
                                aria-hidden={i !== slideIndex}
                            >
                                <p className="min-w-75 d-flex gap-3">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Desc;