import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-lg-start text-muted mt-5"
    >
      <section className="text-center justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="">
          <a href="#" className="backtotop">
            BACK TO TOP
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                STARSHOP
              </h6>
              <p>
                STARSHOP is a European multinational e-commerce company headquartered in Nice, France. STAR-SHOP is the name of its proprietary e-commerce platform for online stores and retail point-of-sale systems.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Shirts
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pants
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Casquttes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  jackets
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Profile
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                37 Rue de France, 6000 Nice
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                contact@starshop.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                04 28 29 11 06
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />
                04 28 29 11 07
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className="text-center justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <img
            className="logo_star_shop"
            src="https://res.cloudinary.com/b2s/image/upload/v1664141449/starshop1_avqyhk.png"
            alt="Star Shop"
          />
        </div>
        <div className="text-center p-2">
          <span className="me-4 text-reset">Australie</span>
          <span className="me-4 text-reset">Allemagne</span>
          <span className="me-4 text-reset">Belgique</span>
          <span className="me-4 text-reset">Brésil</span>
          <span className="me-4 text-reset">Canada</span>
          <span className="me-4 text-reset">Chine</span>
          <span className="me-4 text-reset">Espagne</span>
          <span className="me-4 text-reset">États-Unis</span>
          <span className="me-4 text-reset">Inde</span>
          <span className="me-4 text-reset">Japon</span>
          <span className="me-4 text-reset">Mexique</span>
          <span className="me-4 text-reset">Pays-Bas</span>
          <span className="me-4 text-reset">Pologne</span>
          <span className="me-4 text-reset">Royaume-Uni</span>
          <span className="me-4 text-reset">Singapour</span>
          <span className="me-4 text-reset">Turquie</span>
        </div>
      </section>
      <div className="text-center p-4">
        © 2022 Copyright :<span className="text-reset fw-bold"> b2s.com</span>
      </div>
    </MDBFooter>
  );
}
