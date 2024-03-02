import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { parse } from "date-fns";

export default function Escolhas() {
  const [escolhas, setEscolhas] = useState([]); // Corrigido de reservas para escolhas

  useEffect(() => {
    axios
      .get("http://apitrampo.somee.com/api/Escolha")
      .then((response) => {
        setEscolhas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de escolhas:", error);
      });
  }, []);

  const formatMoney = (price) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const formatDate = (dateString) => {
    try {
      const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());

      if (isNaN(parsedDate.getTime())) {
        console.error('Data inválida após parsing:', dateString);
        return 'Data inválida';
      }

      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return parsedDate.toLocaleDateString('pt-BR', options);
    } catch (error) {
      console.error('Erro ao fazer parsing da data:', error);
      return 'Data inválida';
    }
  };

  return (
    <>
      <Head>
        <title>Escolhas | Trampo 360°</title>
      </Head>
      <main>
        <section className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="card border-0 shadow">
                <div className="card-header p-4 border-0 d-flex my-auto bg-secondary text-light">
                  <i className="bi bi-people-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Escolhas</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Data</th>
                          <th scope="col">Nome</th>
                          <th scope="col">Curso</th>
                          <th scope="col">Aluno</th>
                        </tr>
                      </thead>
                      <tbody>
                      {escolhas.map((escolha) => (
                          <tr key={escolha.escolhaId}>
                            <td>{escolha.id}</td>
                            <td>{formatDate(escolha.data_escolha)}</td>
                            <td>{escolha.nome_escolha}</td>
                            <td>{escolha.curso.curso}</td>
                            <td>{escolha.aluno.nome}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
