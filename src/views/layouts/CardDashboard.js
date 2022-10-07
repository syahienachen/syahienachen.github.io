import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardDasboard = (props) => {
    return (
        <div className="col-12 col-sm-4 col-md-4">
            <Link to={props.link} style={{ textDecoration: 'none' }}>
                <Card className="cards mt-mobile mmh-300">
                    <div className="mt-3">
                        <Card.Title><strong>{props.title}</strong></Card.Title>
                    </div>
                    <props.logo style={{ color: props.color }} className="icons"></props.logo>
                    <Card.Body>
                        <Card.Text>
                            {props.text}
                        </Card.Text>

                        {/* <Button className="btn mb-2 btn-success">Let's GO!</Button> */}

                    </Card.Body>
                </Card>
            </Link >
        </div>
    )
};

export default CardDasboard;