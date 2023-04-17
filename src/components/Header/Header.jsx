import React from "react";
import viniAvatar from "../../assets/foto elipse.png";
import {Link } from "react-router-dom";


function Header () {
    return (
    <header>        
        <div className="card" id="home">
            <div className="mobile_menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="nav">
                <div className="name">Marcus <strong>Vinicius</strong></div>
                <div className="menu">
                    <a href="#home">Home</a>
                    <a href="#sobre">About</a>
                    <a href="#projetos">Projects</a>
                    <a href="#contato">Contact</a>
                    <Link to="/Orcamento">Orçamento</Link>
                </div>
            </div>
            <div className="content">
                <div className="image"> <img src={viniAvatar} alt="foto de marcus vinicius "/></div>
                <div className="frase">I am <spam>a creative</spam> <br/> Front-end developer</div>
            </div>
        </div>
    </header>
    )
}

export default Header;