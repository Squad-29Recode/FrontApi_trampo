import React from "react";
import Head from "next/head";
import Footer from '../components/Footer.js';


function JobCards({ imgSrc, title, description, href }) {
    return (
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
}
export default function Jobs() {
    return (
        <>
            <Head>
                <title>Parcerias da Trampo360°</title>
            </Head>
            <br />
            <div className="container text-center">
                <h1><span style={{ color: '#792882' }}>Conectando Sonhos!!!</span></h1>
                <h3>Vagas incríveis e parcerias estratégicas te aguardam. Seu futuro de sucesso começa aqui na <strong><ins>Trampo360°</ins></strong></h3>
            </div>
            <br></br>
            <div className="container">
                <div className="row">
                    <JobCards
                        imgSrc="/img/apple.png"
                        title="Apple"
                        description="Oportunidade imperdível: Vaga Front-End na Apple. Salário altamente
                        competitivo. Junte-se à nós! 🍏💼 #CarreiraNaApple"
                        href="./formEscolha.jsp"
                    />
                    <JobCards
                        imgSrc="./img/nubank.png"
                        title="Nubank"
                        description="Destaque sua carreira na NU. Vaga em Segurança da Informação, 100% HO.
                        Junte-se à nós! 💼🛡️ #NubankContrata"
                        href="./formEsolha.jsp"
                    />
                    <JobCards
                        imgSrc="./img/itaú.jpg"
                        title="Itaú"
                        description="Oportunidade única: Vaga em Segurança da Informação no Itaú. 100% HO. Junte-se à nós! 💼🛡️ #CarreiraNoItaú"
                        href="./formEsolha.jsp"
                    />
                    <JobCards
                        imgSrc="./img/google.webp"
                        title="Google"
                        description="Realize seu potencial no Google. Vaga Back-End com salário competitivo. Junte-se à nós! 💼🌐 #CarreiraNoGoogle"
                        href="./formEsolha.jsp"
                    />
                    <JobCards
                        imgSrc="./img/c6bank.png"
                        title="C6Bank"
                        description="Venha ser um Dev Fullstack no C6 Bank. Salário atrativo e benefícios
                        incríveis. Junte-se à nós! 💼🚀 #CarreiraNoC6Bank"
                        href="./formEsolha.jsp"
                    />
                    <JobCards
                        imgSrc="/img/microsoft.png"
                        title="Microsoft"
                        description="Realize seu potencial na Microsoft. Vaga Dev Fullstack com oportunidades de
                        crescimento. Junte-se à nós! 💼🔝 #CarreiraNaMicrosoft"
                        href="./formEsolha.jsp"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
