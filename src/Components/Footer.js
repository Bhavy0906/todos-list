import React from 'react'
import './Footer.css'
export default function Footer() {
    const myStyle = {
        textAlign: "center",
        backgroundColor: "#20232A",
        color: "white",
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "10vh"
    }
    return (
        <div style={myStyle} className='cont'>
            <div>
                Copyright &copy;2022 Todos List
            </div>
            <div className='iconContainer'>
            <a href="https://www.facebook.com/bhavy.goel.3/" target= "_blank" className="fa fa-facebook"></a>
            <a href="https://twitter.com/BHAVYGOEL3" target= "_blank" className="fa fa-twitter"></a>
            <a href="https://www.linkedin.com/in/bhavy-goel-5815201b4/" target= "_blank" className="fa fa-linkedin"></a>
            </div>
        </div>
    )
}
