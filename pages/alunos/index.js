import React from "react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios
      .get("http://apitrampo.somee.com/api/Alunos")
      .then((response) => {
        setAlunos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de alunos:", error);
      });
  }, []);

  const invisiblePassword = (pass) => {
    return '*'.repeat(pass.length);
  };

  return (
    <>
      <Head>
        <title>Alunos | Trampo 360º</title>
      </Head>
      <main>
      <section className="container py-5">
  <div className="row">
    <div className="col-sm-12">
      <div className="card border-0 shadow">
        <div className="card-header p-4 border-0 d-flex my-auto bg-secondary text-light">
          <i className="bi bi-people-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Alunos</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nome</th>
                          <th>CPF</th>
                          <th>E-mail</th>
                          <th>Senha</th>
                        </tr>
                      </thead>
                      <tbody>
                        {alunos.map((aluno) => (
                          <tr key={aluno.alunoId}>
                            <td>{aluno.id}</td>
                            <td>{aluno.nome}</td>
                            <td>{aluno.cpf}</td>
                            <td>{aluno.email}</td>
                            <td>{invisiblePassword(aluno.senha)}</td>
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