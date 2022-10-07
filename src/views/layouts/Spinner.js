import React from 'react';
import imgSpinner from "../../assets/images/logo512.png";

const Spinner = () => (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh'}}>
        <img src={imgSpinner} style={{ width:'200px', margin:'auto', display:'block' }} alt="Loading..." />
    </div>
)
export default Spinner;