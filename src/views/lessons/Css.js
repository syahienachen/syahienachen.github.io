import React, { Fragment } from 'react';
import { Navbar } from "react-bootstrap";
import CardLessons from '../layouts/CardLessons'
import { FaCss3Alt } from "react-icons/fa";

const Css = () => {
    return (
        <Fragment>
            <div className='row lessons lessons-container'>
                <div className='col-3'>
                    <Navbar className='sticky-top sidebar-lessons'>
                        <div className='title-1'><strong>Learning CSS :</strong></div>
                        <div className='mt-3'>CSS I</div>
                        <div className='mt-3'>CSS II</div>
                        <div className='mt-3'>CSS III</div>
                        <div className='mt-3'>CSS IV</div>
                        <div className='mt-3'>CSS V</div>
                    </Navbar>
                </div>
                <div className='col-9 pb-3'>
                    <CardLessons logo={FaCss3Alt} color="blue" title="CSS I" text="Didalam CSS I kita akan mempelajari berbagai tag CSS" link="/lessons/css" />
                    <CardLessons logo={FaCss3Alt} color="blue" title="CSS II" text="Didalam CSS I kita akan mempelajari berbagai tag CSS" link="/lessons/css" />
                    <CardLessons logo={FaCss3Alt} color="blue" title="CSS III" text="Didalam CSS I kita akan mempelajari berbagai tag CSS" link="/lessons/css" />
                    <CardLessons logo={FaCss3Alt} color="blue" title="CSS IV" text="Didalam CSS I kita akan mempelajari berbagai tag CSS" link="/lessons/css" />
                    <CardLessons logo={FaCss3Alt} color="blue" title="CSS V" text="Didalam CSS I kita akan mempelajari berbagai tag CSS" link="/lessons/css" />
                </div>
            </div>
        </Fragment>
    )
}

export default Css
