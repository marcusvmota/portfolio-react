import React from "react";
import retangulo from "../../assets/Rectangle-6.png";
import instagram from "../../icones/insta.svg";
import github from "../../icones/github.svg";
import linkedin from "../../icones/linkedin.svg";
import elipse from "../../assets/elipse-contact.png";
import data from    "./main.json";

function Main() {
    return (
        <main>
        <div className="about" id="sobre">About <spam>me</spam></div><br/>

        <div className="description">{data.description}</div>

        <div className="projects" id="projetos">Projects</div>
        <div className="boxes">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
        <div className="contact"  id="contato">
            <img className="retangulo" src={retangulo} alt="retangulo usado para juntar texto com os icones das redes sociais"/>
            <img className="elipse" src={elipse} alt="elipse com destaque ao nome contact me now"/> 
            <div className="icones">
                <a href= "https://www.instagram.com/viniciusqmota/" target="_blank"> <img src={instagram} alt="icone do instagram"/> </a>
                <a href="https://github.com/marcusvmota" target="_blank"> <img src={github} alt="icone do github"/> </a>
                <a href="https://www.linkedin.com/in/marcus-vinicius-mota" target="_blank"> <img src={linkedin} alt="icone do linkedin"/> </a>          
            </div>
            <div className="contact_frase"> Contact <br/> <spam>me now!</spam> 
            </div>
            </div>   
            <div className="menu_down">
                <a href="#home">Home</a>
                <a href="#sobre">About</a>
                <a href="#projetos">Projects</a>
                <a href="#contato">Contact</a>
            </div>
    </main>

    )
}

export default Main