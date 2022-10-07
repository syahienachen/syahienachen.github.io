import React, { Fragment } from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";

import CardDashboard from "../layouts/CardDashboard";

const Lessons = () => {
    return (
        <Fragment>
            <div className="col-12 title-1 mb-3">
                <MdPlayLesson /> Lessons
            </div>
            <CardDashboard logo={FaHtml5} color="salmon" title="HTML" text="HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content." link="/lessons/html" />
            <CardDashboard logo={FaCss3Alt} color="blue" title="CSS" text="CSS stands for Cascading Style Sheets language and is used to stylize elements written in a markup language such as HTML." link="/lessons/css" />
            <CardDashboard logo={IoLogoJavascript} color="orange" title="Javascript" text="JavaScript is a dynamic programming language that's used for web development, in web applications, and lots more." link="/error" />
        </Fragment>
    )
}

export default Lessons
