import React, { Fragment } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

// import { connect } from "react-redux";
// import PropTypes from "prop-types";

import Navbar from "../views/layouts/Navbar";
// import Sidebar from "../views/layouts/Sidebar";

// Default Home
// import Home from "../file/Home";

import PrivateRoute from "./PrivateRoute";

// User
import User from "../views/user/Dashboard";
import About from "../views/user/About";

import Footer from "../views/layouts/Footer";
import Error from "../views/layouts/Error";

import Html from "../views/lessons/Html";
import Css from "../views/lessons/Css";

const Router = () => {

    return (
        <Fragment>
            <Navbar />
                <main role="main" className="p-0 main-content">
                    <Routes>
                        <Route path="/" element={<PrivateRoute />}>
                            <Route path="/" element={<User />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/error" element={<Error />} />
                            <Route path="/lessons/html" element={<Html />} />
                            <Route path="/lessons/css" element={<Css />} />
                        </Route>
                    </Routes>
                </main>
            <Footer/ >
        </Fragment>
    )
}

export default Router;