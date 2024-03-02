import React from "react";
import Head from "next/head";
import Footer from '../components/Footer.js';

export default function Courses() {
    const CourseCard = ({ imgSrc, title, description, href }) => (
        <div className="col-md-4">
            <div className="card custom-margin custom-padding">
                <img src={imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-justify">{description}</p>
                    <a href={href} className="btn btn-warning">Inscreva-se</a>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Head>
                <title>Cursos da Trampo360°</title>
            </Head>
            <br></br>
            <div className="container">
            <h1>Cursos da Trampo360°</h1>

            <h2>Explore novos horizontes na Trampo360°. Inscreva-se e impulsione sua carreira tech!</h2>
            </div>
            <div className="container">
                <div className="row">
                    <CourseCard
                        imgSrc="./img/frontend.jpeg"
                        title="Front-end"
                        description="Domine a arte do Front-End! Inscreva-se agora para o curso completo e mergulhe na criação de interfaces incríveis. Seja um desenvolvedor web."
                        href="./formEscolha.jsp"
                    />
                    <CourseCard
                        imgSrc="./img/backend.jpeg"
                        title="Back-end"
                        description="Construa a base do digital! Inscreva-se no curso Back-End e aprenda a criar a infraestrutura por trás das aplicações web. Torne-se um mestre da lógica."
                        href="./formEsolha.jsp"
                    />
                    <CourseCard
                        imgSrc="./img/fullstack.jpeg"
                        title="Fullstack"
                        description="Seja um criador de soluções completas! Inscreva-se no curso Fullstack e domine o desenvolvimento tanto front-end quanto back-end. Desperte sua versatilidade agora."
                        href="./formEsolha.jsp"
                    />
                    <CourseCard
                        imgSrc="./img/unix1.jpg"
                        title="Unix"
                        description="Desvende os mistérios do Unix! Inscreva-se no curso e domine o sistema operacional amplamente utilizado. Expanda suas habilidades técnicas e conquiste o comando total."
                        href="./formEsolha.jsp"
                    />
                    <CourseCard
                        imgSrc="./img/segurInfo.png"
                        title="Segurança da informação"
                        description="Proteja o mundo digital! Inscreva-se no curso de Segurança da Informação, aprenda a defender sistemas contra ameaças cibernéticas. Torne-se o guardião da era digital de uma empresa!"
                        href="./formEsolha.jsp"
                    />
                    <CourseCard
                        imgSrc="./img/cloud2.jpg"
                        title="Cloud"
                        description="Alcance as alturas da tecnologia! Inscreva-se no curso de Cloud e aprenda a gerenciar e otimizar serviços na nuvem. Leve suas habilidades para o próximo nível da inovação."
                        href="./formEsolha.jsp"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
