import Img1 from '../assets/img/img-card1.jpg';
import Img2 from '../assets/img/img-card2.jpg';
import Img3 from '../assets/img/img-card3.jpg';

function Service() {
    return(

      <div id="carouselExampleDark" className="carousel carousel-dark slide my-5">
        <h5 className="card-title text-center mb-4">Our Service</h5>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active justify-content-center"
            style={{display: 'flex'}}
            data-bs-interval="10000"
          >
            <img
              src={Img1}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Software Development Center</h5>
              <p>
                Your all around software development house Building the future,
                one line of code at a time
              </p>
              <a href="#" className="btn btn-warning mb-3">Learn More</a>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={Img2}
              class="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Talent Aquisition Service</h5>
              <p>
                Find the Best Talent for the Industry Find the best talent with
                our comprehensive hiring and admission service
              </p>
              <a href="#" className="btn btn-warning mb-3">Learn More</a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Img3}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Talent Coaching and Mentoring</h5>
              <p>
                Empowering Potential, Unleashing Success Unlock your potential
                with our coaching and mentoring program
              </p>
              <a href="#" className="btn btn-warning mb-3">Learn More</a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default Service;