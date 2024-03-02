import React from "react";
import Head from "next/head";
import Footer from '../components/Footer.js';

export default function Eventos() {
  return (
    <>
      <Head>
        <title>Calendário de Eventos 2023</title>
      </Head>
      <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="video-container">
              <video autoPlay loop muted>
                <source src="./img/video01.mp4" type="video/mp4" />
              </video>
              <div className="overlay-text">
                <h1>Calendário de EVENTOS 2024</h1>
                <p>
                  Conheça os eventos exclusivos da{' '}
                  <strong>TRAMPO 360°</strong> para conectar jovens talentos
                  com grandes empresas e acelerar a sua carreira profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="todo">
        <div className="img">
          <img src="./img/texto03.png" className="img-fluid" alt="..." />
        </div>
        <br />
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="./img/evento01.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <strong>Evento Nubank Tecnologia</strong>
                </h5>
                <p className="card-text">🚀 Participe do evento online do ano! 🚀</p>
                <p>
                  Não perca a chance única de aprender com o melhor. Junte-se a
                  nós no evento com o renomado CTO do Nubank, onde ele irá
                  compartilhar insights valiosos sobre as inúmeras oportunidades
                  de emprego nesse campo dinâmico.
                </p>
                <p>🗓️ Data: 25/02/2024</p>
                <p>🕒 Horário: 15:00 ás 17:00</p>
                <button type="button" className="btn btn-warning">
                  Faça Sua Inscrição
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="./img/evento02.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  <strong>Google Futuro Tecnológico</strong>
                </h5>
                <p className="card-text">
                  <p>🌟 Explore o Futuro na Google! 🌟</p>
                  Inscreva-se agora para o imperdível evento com o Diretor de
                  Tecnologia da Google, onde você descobrirá todas as razões
                  pelas quais a Google é a melhor empresa para se trabalhar na
                  área de programação.
                </p>
                <p>🗓️ Data: 15/02/2024</p>
                <p>🕒 Horário: 09:00 ás 11:00</p>
                <button type="button" className="btn btn-warning">
                  Faça Sua Inscrição
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="img">
          <img src="./img/texto01.png" className="img-fluid" alt="..." />
        </div>
        <br />

        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="./img/evento03.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"><strong>Desenvolvedor Front-end!</strong></h5>
                <center><h7><strong>Online / Gratuito / Pré-Inscrição</strong></h7></center><br />
                <p className="card-text">🚀 Junte-se a nós e aprenda com o Prof. Queiroz da Trampo360° as melhores dicas e estratégias para se destacar nessa carreira empolgante.</p>
                <p>Prepare-se para trilhar o caminho do sucesso no desenvolvimento front-end!</p>
                <p>🗓️ Data: 10/03/2024</p>
                <p>🕒 Horário: 09:00 ás 11:00</p>
                <p>🔥#DesenvolvedorFrontEnd #Trampo360°</p>
                <button type="button" className="btn btn-warning">Faça Sua Inscrição</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="./img/evento04.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"><strong>Se desenvolva, desenvolvedor!</strong></h5>
                <center><h7><strong>Online/ Gratuito / Pré-Inscrição</strong></h7></center><br />
                <p className="card-text">🚀 Quer Avançar de Desenvolvedor Júnior para Pleno Back-end de Sucesso? Não perca! Junte-se à Profa. Flora Morais da Trampo360°.</p>
                <p>Sua jornada para o próximo nível começa aqui!</p>
                <p>🗓️ Data: 10/05/2024</p>
                <p>🕒 Horário: 09:00 ás 11:00</p>
                <p>🔥 #DesenvolvedorPleno #Trampo360°</p>
                <button type="button" className="btn btn-warning">Faça Sua Inscrição</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="./img/evento05.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"><strong>Segurança da informação!</strong></h5>
                <center><h7><strong>Online / Gratuito / Pré-Inscrição</strong></h7></center><br />
                <p>Participe da palestra com o Prof. Taiguara da Trampo360°. Descubra habilidades essenciais e dicas para proteger dados no mundo digital.</p>
                <p>Fortaleça seu conhecimento em segurança!</p>
                <p>🗓️ Data: 07/03/2024</p>
                <p>🕒 Horário: 09:00 ás 11:00</p>
                <p>💻🛡️ #SegurançaDaInformação #Trampo360°</p>
                <button type="button" className="btn btn-warning">Faça Sua Inscrição</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <img src="./img/modelo01.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <center><button type="button" className="btn btn-warning">Fique Por Dentro</button></center>
        </div>
      </div>
      </div>
      </div>
      <Footer />
    </>
    );
}

