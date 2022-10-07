import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardLessons = (props) => {
    return (
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <div className="col-12 mt-3">
                <Card className="cards mt-mobile p-4">
                    <div className='row'>
                        <div className='col-3'>
                            <props.logo style={{ color: props.color }} className="icons-lessons"></props.logo>
                        </div>
                        <div className='col-9'>
                            <Card.Body className='card-body-lessons'>
                                <Card.Title><strong>{props.title}</strong></Card.Title>
                                <Card.Text>
                                    {props.text}
                                </Card.Text>

                                {/* <Button className="btn mb-2 btn-success">Let's GO!</Button> */}

                            </Card.Body>
                        </div>
                    </div>
                </Card>
            </div>
        </Link>

    )
}

export default CardLessons
