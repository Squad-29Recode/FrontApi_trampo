import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import axios from "axios";
import { parse, format } from "date-fns"; 

export default function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    axios
      .get("https://trampo.somee.com/api/Cursos")
      .then((response) => {
        setCursos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de cursos:", error);
      });
  }, []);

  const formatDate = (dateString) => {
    try {
      const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());

      // Verificar se o parsing foi bem-sucedido
      if (isNaN(parsedDate.getTime())) {
        console.error('Data inválida após parsing:', dateString);
        return 'Data inválida';
      }

      // Retornar a data formatada como string
      return format(parsedDate, "dd/MM/yyyy"); // Alterado aqui
    } catch (error) {
      console.error('Erro ao formatar data:', error);
      return 'Erro ao formatar data';
    }
  };

  return (
    <>
      <Head>
        <title>Cursos | Trampo 360°</title>
      </Head>
      <main>
      <section className="container py-5">
  <div className="row">
    <div className="col-sm-12">
      <div className="card border-0 shadow">
        <div className="card-header p-4 border-0 d-flex my-auto bg-secondary text-light">
          <i className="bi bi-people-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Cursos</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Curso</th>
                          <th>Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cursos.map((curso) => (
                          <tr key={curso.id}>
                            <td>{curso.id}</td>
                            <td>{curso.curso}</td>
                            <td>{formatDate(curso.data)}</td>
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
