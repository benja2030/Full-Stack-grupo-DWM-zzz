import Container from "react-bootstrap/Container";
import Navigation from "./navigation";
import Footer from "./footer";

export default function About() {
  return (
    <div>
      <Navigation />
      <section className="about">
        <Container style={{ marginBottom: "5%" }}>
          <main>
            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-10 col-md-8 mx-auto">
                  <h1 className="fw-light">Acerca de nosotros</h1>
                  <p className="lead text-muted">
                    Hola, somo una empresa familiar que se enfoca en la venta de
                    sushi, estamos ubicado en la comuna de maipu, nuestra
                    empresa busca brindar un buen servicio tanto en sabor de
                    nuestros productos como en la atencion a los clientes,
                    contamos con cuatro años de experiencia en este rubro y
                    podemos afirmar que nuestros productos estan hechos con la
                    mas alta calidad de estandares en los productos que se
                    utilizan para su armado, te dejamos invitados a consumir
                    nuestros productos y pasar un buen momento en conpañia de
                    tus cercanos y con una rica comida.
                  </p>
                  <p>
                    <a href="/" className="btn btn-primary my-2 mx-1">
                      Principal
                    </a>
                    <a href="/" className="btn btn-secondary my-2 mx-1">
                      Secundaria
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <div className="col">
                    <div className="card shadow-sm">
                      <img alt="img1" src="https://saopaulosecreto.com/wp-content/uploads/2022/06/thomas-marban-EHK-EH1SRzQ-unsplash.jpg"></img>
                      <div className="card-body">
                        <p style={{ color: "black" }} className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Ver
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Siguiente
                            </button>
                          </div>
                          <small className="text-muted">descripcion</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card shadow-sm">
                      <img alt="img1" src="https://www.sushilab.cl/wp-content/uploads/2022/04/Mujeres-chefs-de-sushi.jpg"></img>
                      <div className="card-body">
                        <p style={{ color: "black" }} className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Ver
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Siguiente
                            </button>
                          </div>
                          <small className="text-muted">descripcion</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card shadow-sm">
                      <img alt="img1" src="https://sc2.elpais.com.uy/files/article_default_content/uploads/2020/04/08/5e8de19eef5cf.jpeg"></img>
                      <div className="card-body">
                        <p style={{ color: "black" }} className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Ver
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Siguiente
                            </button>
                          </div>
                          <small className="text-muted">descripcion</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

