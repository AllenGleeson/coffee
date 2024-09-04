import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import '../assets/css/backtotop.css'

const BackToTop = () => {
    return (
        <button 
            className="back-to-top slideInLeft"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
        >
            <FaArrowUp />
        </button>
    );
}

export default BackToTop;