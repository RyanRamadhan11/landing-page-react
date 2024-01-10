import React from "react";
import Caro1 from '../assets/img/caro1.jpg';
import Caro2 from '../assets/img/caro2.jpg';
import Caro3 from '../assets/img/caro3.jpg';

function Testimoni() {
    return(
        <div>

        <h1 className="text-center ms-5" style={{ marginTop: '2.5em' }}>Testimonial</h1>
        <p className="text-center my-3">
          Berbagai review positif dari para pelanggan kami
        </p>
  
        <div className="row mb-5"style={{ marginTop: '2.5em' }} >
          <div className="col-md-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators car">
                <a
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="btn bi bi-chevron-left active"
                ></a>
                <a
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                  className="btn bi bi-chevron-right"
                ></a>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro1} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i></p>
                          <p>
                            “Mengikuti enigma camp adalah pengalaman yang sangat
                            luar biasa, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod”
                          </p>
                          <h2>Joo RR 1, Fullstack Developer Batch#11</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro2} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i></p>
                          <p>
                            “Enigma camp menyedikan pelatihan pelatihan gratis
                            tentang pemrograman dengan traine diajarkan dari awal,
                            consectetur adipiscing elit, sed do eiusmod”
                          </p>
                          <h2>Joo RR 2, Backend Developer Batch#12</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro3} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i></p>
                          <p>
                            “Terima Kasih Enigma camp, sed do eiusmod lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod”
                          </p>
                          <h2>Joo RR 3, Frontend Developer Batch#14</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro1} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i></p>
                          <p>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod”
                          </p>
                          <h2>Joo 1, Frontend Developer Batch#1</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro2} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i></p>
                          <p>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod”
                          </p>
                          <h2>Joo 2, Fullstack Developer Batch#2</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Caro3} alt="" />
                        </div>
                        <div className="img-text">
                          <p className="star"><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i><i class="bi bi-star-fill" style={{ color: 'blue' }}></i></p>
                          <p>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod”
                          </p>
                          <h2>Joo 3, Backend Developer Batch#3</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  
    );
    
}

export default Testimoni