import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import '../assets/css/backtotop.css'

const BackToTop = () => {
    return (
        <a href='#' className="back-to-top slideInLeft">
            <FaArrowUp />
        </a>
    );
}

export default BackToTop;