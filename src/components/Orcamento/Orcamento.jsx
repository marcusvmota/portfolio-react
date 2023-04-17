import React from "react";
import "./Orcamento.css";
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer";

function Orcamento () {
    return (
        <>
        <div id="Form">
        <Nav/>       
            <section className="text" id="trending">
            <h2>Faça seu <span> orçamento!</span></h2>
                </section>
            <div className="box">
                <form onsubmit="event.preventDefault()">
                    <label for="inputNome">Nome</label>
                    <input type="text" id="inputNome" required minlength="2"/>

                    <label for="inputEmail">Email</label>
                    <input type="email" id="inputEmail" required/>

                    <label for="textAreaMensagem">Mensagem</label>
                 <textarea name="textAreaMensagem" id="textAreaMensagem" rows="5" required></textarea>
                    <div className="enviar">
                 <button onclick="enviarFormulario()">Enviar Mensagem</button>
                </div>
            </form>
            </div>
        <Footer/>
        </div> 
        
        </>
    )
}

export default Orcamento