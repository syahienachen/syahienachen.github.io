import React, { Fragment } from "react";
import LearningPath from "./LearningPath";
import Lessons from "./Lessons";

const User = () => {

    return (
        <Fragment>
            <div className="dashboard-container row">
                <Lessons />
                <LearningPath />
            </div>
        </Fragment>
    );
}

export default User;
