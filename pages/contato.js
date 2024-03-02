import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer.js';

const Atendimento = () => {
  return (
    <>
      <Head>
        <title>Atendimento</title>
      </Head>
      <div className="text">
        <h1>Atendimento</h1>
        <h2>Acesse nossos canais de atendimento e tire todas as suas dúvidas!</h2>
      </div>
      <div className="form-area">
        <div className="container">
          <div className="form-container">
            <div className="row single-form g-0">
              <div className="col-sm-12 col-lg-6">
                <div className="left">
                  <h2>Fale conosco</h2><br />
                  <video autoPlay loop muted className="bg-video">
                    <source src="./img/video3.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="right">
                  <i className="fa fa-caret-left"></i>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Nome</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label fw-bold">E-mail</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Mensagem</label>
                      <textarea className="form-control" id="exampleInputPassword1"></textarea>
                    </div>
                    <button type="button" className="btn btn-warning">Entrar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
        </>
    );
}
export default Atendimento;
