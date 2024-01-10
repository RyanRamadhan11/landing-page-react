import Logo from '../assets/img/logo.png'

function Footer() {
    return(
        <div className="footer">
        <div className="row bg-light">
          <div className="col-sm-4 d-flex py-3 px-4">
            <img
              src={Logo}
              alt=""
              style={{width: '80px', height: '80px'}}
            ></img>
            <h4 className="p-4">EnigmaCamp</h4>
          </div>
        </div>

        <div className="row bg-light footer-header">
          <div className="col-sm-4 footer-body">
            <div class="p-4 isi">
              <p style={{textAlign: 'justify'}}>
                EnigmaCamp We specialize in the business of IT Bootcamp and
                talent management for the last five years with a list of
                well-known clients and companies.
              </p>
            </div>

            <div className="p-4 d-flex isi">
              <div className="about me-5 text-black">
                <h5>About Us</h5>
                <a href="">EnigmaCamp</a>
                <a href="">GK Hebat</a>
                <a href="">Contact Us</a>
              </div>
              <div className="program">
                <h5>Program</h5>
                <a href="">Talent as a Service</a>
                <a href="">Training as a Service</a>
              </div>
            </div>
          </div>

          <div className="col-sm-4 footer-body">
            <div className="p-4 isi">
              <h5 className="fw-bold px-4 pb-2">Office</h5>
              <p className="px-4">
                <i className="bi bi-telephone-fill" style={{paddingRight: '10px'}}></i>(+123) 456-7890
              </p>
              <p class="px-4">
                <i class="bi bi-geo-alt-fill" style={{paddingRight: '10px'}}></i>
                Gran Rubina Business Park Jalan HR Rasuna Said - Jakarta 12940
              </p>
            </div>

            <div className="px-4 pb-2 service">
              <h5 className="fw-bold px-4">Service</h5>
              <a href="">Remote Development</a>
              <a href="">Talent as a Service</a>
              <a href="">Training as a Service</a>
              <a href="">Mentoring</a>
            </div>
          </div>

          <div className="col-sm-4 boot">
            <div className="p-4">
              <h5 className="fw-bold px-4 pb-3">Bootcamp</h5>
              <p className="px-4">
                <i className="bi bi-geo-alt-fill" style={{paddingRight: '10px'}}></i>
                Jl. H. Dahlan No.75, RT.8 / RW.4, Ragunan, Ps. Minggu, Kota
                Jakarta Selatan
              </p>
            </div>
            <div className="link">
              <h5 className="fw-bold px-5 pb-3">Connect with Us!</h5>
              <a href="#"><i className="bi bi-instagram ms-5"></i></a>
              <a href="#"><i className="bi bi-linkedin ms-5"></i></a>
              <a href="#"><i className="bi bi-twitter ms-5"></i></a>
              <a href="#"><i className="bi bi-facebook ms-5"></i></a>
              <a href="#"><i className="bi bi-youtube ms-5"></i></a>
              <a href="#"><i className="bi bi-discord ms-5"></i></a>
            </div>
          </div>

          <div className="text-center mt-4 mb-3 text-muted">
            Copyright &copy; 2024 &mdash; Enigmacamp
          </div>
        </div>
      </div>
    );
}

export default Footer;