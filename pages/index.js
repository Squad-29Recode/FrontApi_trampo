import React from "react";
import Footer from '../components/Footer.js';


const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

const Carousel = () => {
  return (
    <div className="container">
      <div className="container">
        <div id="carouselMain" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/estudo2.jpeg" className="d-block w-100" alt="Estudo2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Cursos profissionalizantes na área técnologica</h5>
                <p>Explore o mundo das tecnologias e abra portas para oportunidades ilimitadas com nossos cursos especializados. Capacite-se para uma carreira brilhante no universo da inovação!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/estudo3.jpeg" className="d-block w-100" alt="Estudo3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Curso de segurança da informação</h5>
                <p>Domine as artes da Segurança da Informação e proteja o futuro digital. Aprenda com os melhores especialistas e esteja um passo à frente na defesa cibernética.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/estudo5.jpeg" className="d-block w-100" alt="Estudo5" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Eventos online para os estudantes</h5>
                <p>Conecte-se com o conhecimento de líderes reais da indústria!</p>
                <p>Participe dos nossos eventos online com profissionais experientes da área da tecnologia.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};


const Body = () => {
  return (
    <><div className="text">
      <h1>Bem vindos a Trampo360° </h1>
    </div><div>
        <img src="/img/linhas.png" style={{ width: "30%", marginLeft: "5%" }} />
        <img src="/img/nov2logremovebg.png" style={{ width: "25%" }} />
        <img src="/img/linhas.png" style={{ width: "30%" }} />
      </div></>
  );
};

const MainContent = () => {
  return (
    <div className="container">
      <div className="purple-card">
        <div className="card-body">
          <h5 className="card-title1 fw-bold">Missão Trampo360°</h5>
          <p className="card-text1">Na Trampo360°, nossa missão é abrir as portas do mundo tecnológico para todos. Acreditamos que a formação profissionalizante é a chave para um futuro de oportunidades ilimitadas. Ajudamos nossos alunos a trilharem um caminho de sucesso na indústria da tecnologia. Através de cursos inovadores, eventos interativos e recursos educativos, estamos comprometidos em empoderar nossos alunos a conquistarem um futuro promissor e de sucesso na indústria tecnológica</p>
        </div>
      </div>
      <div className="yellow-card">
        <div className="card-body">
          <h5 className="card-title2 fw-bold">Por que Escolher os Cursos Trampo360°?</h5>
          <p className="card-text2">🚀 Conhecimento de Especialistas Reais: Nossos cursos são ministrados por profissionais experientes da indústria tecnológica. Você aprenderá com quem está na linha de frente, adquirindo insights práticos e atualizados.</p>
          <p>🌐 Conteúdo Relevante e Atualizado: A tecnologia está em constante evolução, e nossos cursos acompanham as tendências e práticas da indústria. Aprenda habilidades que são imediatamente alcançadas no mundo real.</p>
          <p>💼 Preparação para o Mercado de Trabalho: Não apenas oferecemos teoria; nossos cursos estão projetados para prepará-lo para o mercado de trabalho. Desde a construção de projetos práticos até simulações de cenários reais, você estará pronto para enfrentar os desafios do setor.</p>
          <p>🏆 Certificados Reconhecidos: Ao concluir nossos cursos, você recebe certificados que comprovam suas habilidades. Esses certificados são reconhecidos e valorizados por empresas e empregadores da indústria.</p>
          <p>🌟 Comunidade de Aprendizado: Além do conhecimento técnico, você fará parte de uma comunidade de aprendizado. Conecte-se com outros alunos, compartilhe ideias e construa uma rede de contatos.</p>
        </div>
      </div>
      <div className="card-group">
        <div className="card">
          <img src="/img/estudo1.png" className="card-img-top img-fluid" alt="Estudos1" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Inscrições abertas</h5>
            <p className="card-text">🚀 Inscrições Abertas: Curso de Desenvolvimento Front-End</p>
            <p>Você é apaixonado por criar interfaces incríveis e relaxantes cativantes? Quer se tornar um especialista em construção de sites modernos e responsivos?</p>
            <button type="button" className="btn btn-warning" href="cursos.html">Faça Sua Inscrição</button>
            <p className="card-text"><small className="text-body-secondary">Última atualização 3 mins atrás</small></p>
          </div>
        </div>
        <div className="card">
          <img src="/img/estudo2 -1.jpeg" className="card-img-top img-fluid" alt="Estudo2" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Segurança da Informação</h5>
            <p className="card-text">🔒 Explore o Universo da Segurança da Informação.🔒</p>
            <p>Você é apaixonado por proteger dados, desenvolver vulnerabilidades e fortalecer a cibersegurança? As inscrições estão abertas. Seja um guardião da segurança da informação!</p>
            <button type="button" className="btn btn-warning">Faça Sua Inscrição</button>
            <p className="card-text"><small className="text-body-secondary">Última atualização 5 mins atrás</small></p>
          </div>
        </div>
        <div className="card">
          <img src="/img/estudo6.png" className="card-img-top img-fluid" alt="Estudo6" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Evento gratuito online</h5>
            <p className="card-text">Preparamos um dia de eventos Gratuitos para nossos alunos com profissionais que atuam na área de técnologia de nossas empresas parceiras! Confira na parte de Eventos!</p>
            <p>Anotem na agenda o dia 22/02/24!
            Não deixe essa oportunidade passar!</p>
            <button type="button" className="btn btn-warning" href="eventos.html">Faça Sua Inscrição</button>
            <p className="card-text"><small className="text-body-secondary">Última atualização 10 mins atrás</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <Layout>
      <Carousel />
      <Body/>
      <MainContent />
    </Layout>
  );
};

export default Home;
