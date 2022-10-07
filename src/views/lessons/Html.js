import React, { Fragment } from 'react'
import CardLessons from '../layouts/CardLessons'
import { FaHtml5 } from "react-icons/fa";
import { Navbar } from 'react-bootstrap';

const Html = () => {
    return (
        <Fragment>
            <div className='row lessons lessons-container'>
                <div className='col-3'>
                    <Navbar className='sticky-top sidebar-lessons'>
                        <div className='title-1'><strong>Learning HTML :</strong></div>
                        <div className='mt-3'>HTML I</div>
                        <div className='mt-3'>HTML II</div>
                        <div className='mt-3'>HTML III</div>
                        <div className='mt-3'>HTML IV</div>
                        <div className='mt-3'>HTML V</div>
                    </Navbar>
                </div>
                <div className='col-9 pb-3'>
                    <CardLessons logo={FaHtml5} color="salmon" title="HTML I" text="Didalam HTML I kita akan mempelajari berbagai tag HTML" link="/lessons/html" />
                    <CardLessons logo={FaHtml5} color="salmon" title="HTML II" text="Didalam HTML I kita akan mempelajari berbagai tag HTML" link="/lessons/html" />
                    <CardLessons logo={FaHtml5} color="salmon" title="HTML III" text="Didalam HTML I kita akan mempelajari berbagai tag HTML" link="/lessons/html" />
                    <CardLessons logo={FaHtml5} color="salmon" title="HTML IV" text="Didalam HTML I kita akan mempelajari berbagai tag HTML" link="/lessons/html" />
                    <CardLessons logo={FaHtml5} color="salmon" title="HTML V" text="Didalam HTML I kita akan mempelajari berbagai tag HTML" link="/lessons/html" />
                </div>
            </div>
        </Fragment>
    )
}

export default Html
