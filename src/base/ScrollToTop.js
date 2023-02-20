import React from 'react'
import './ScrollToTop.css'
function ScrollToTop() {
    function goToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    window.addEventListener("scroll", function () {
        if(this.window.innerWidth < 960) {
            if (window.scrollY == 0)
                document.getElementById("to-top-btn").style.display = "none"
            else
                document.getElementById("to-top-btn").style.display = "block"
        }

    })
    return (
        <div className="to-top-btn" id="to-top-btn" onClick={goToTop}>
            <div>&uarr;</div>
        </div>
    )
}

export default ScrollToTop
