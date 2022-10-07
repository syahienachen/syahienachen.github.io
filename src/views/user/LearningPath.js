import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import { GiDeerTrack } from 'react-icons/gi'
import learningPath from "../../assets/images/learning-path.png"

const LearningPath = () => {
    return (
        <Fragment>
            <div className="col-12 title-1 mt-5 mb-3">
                <GiDeerTrack /> Learning Path
            </div>
            <div className="col-12 mb-3">
                <Card className="cards mt-mobile">
                    <img src={learningPath} className="icons"></img>
                </Card>
            </div>
        </Fragment>
    )
}

export default LearningPath
