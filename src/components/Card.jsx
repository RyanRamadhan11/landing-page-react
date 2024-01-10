import Card1 from '../assets/img/img-card1.jpg';
import Card2 from '../assets/img/img-card2.jpg';
import Card3 from '../assets/img/img-card3.jpg';
import Card4 from '../assets/img/img-card4.jpg';

function Card() {
    return (
      <div className="row justify-content-between" style={{ marginBottom: '80px', marginTop: '8em', padding: '20px 150px' }}>
        <h5 className="card-title text-center mb-2">
          Curriculum Design By Industrial Expert
        </h5>
  
        <h5 className="card-title text-center mb-4">Our Programs</h5>
  
        <div className="card" style={{ width: '18rem' }}>
          <img src={Card1} className="card-img-top mt-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">PHP Developer</h5>
            <p className="card-text">
              Sampai pada saat ini bahasa pemrograman PHP masih masuk dalam 10 besar bahasa pemrograman yang
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
  
        <div className="card" style={{ width: '18rem' }}>
          <img src={Card2} className="card-img-top mt-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kotlin Developer</h5>
            <p className="card-text">
              Kotlin merupakan bahasa pemrograman yang menjadi cukup populer beberapa tahun kebelakang.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
  
        <div className="card" style={{ width: '18rem' }}>
          <img src={Card3} className="card-img-top mt-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Fullstack Developer</h5>
            <p className="card-text">
              Full Stack Developer adalah seorang profesional yang memiliki keterampilan dan pengetahuan di front-end dan back-end.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
  
        <div className="card" style={{ width: '18rem' }}>
          <img src={Card4} className="card-img-top mt-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">React Developer</h5>
            <p className="card-text">
              React Developer adalah seorang profesional pengembangan perangkat lunak yang memiliki keahlian dalam penggunaan React.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
  
        <div className="card" style={{ width: '18rem' }}>
          <img src={Card1} className="card-img-top mt-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Backend Developer</h5>
            <p className="card-text">
              Backend Developer adalah seorang profesional dalam pengembangan perangkat lunak.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  