import React from 'react'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div>
      <div>
        <div className="page-loader page-loader-show">
          <div className="page-loader__spinner"><span className="spinner-grow text-primary" role="status" id="spinner" /></div>
        </div>
        <div className="d-xl-flex" style={{ maxWidth: 'none' }}>
          <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white d-xl-flex m-auto transparency border-bottom border-light" id="transmenu">
            <div className="container"><Link className="navbar-brand js-scroll-trigger" href="#page-top" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: 'rgb(103,58,183)' }}>&nbsp; &nbsp;<img className="js-scroll-trigger" src="assets/img/logo.png" style={{ width: '100px' }} /></Link>
            <h2>Alif Real Estate Lahore</h2>
              <button data-toggle="collapse" className="navbar-toggler collapsed" data-target="#navcol-1"><span /><span /><span /></button>
              <div className="collapse navbar-collapse text-justify" id="navcol-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#About">About</a></li>
                  <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                  {/* <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li> */}
                  <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#Team">Team</a></li>
                  <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="carousel slide" data-ride="carousel" data-interval={4000} data-pause="false" id="carousel-1">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="jumbotron jumbotron-fluid pulse animated" style={{ backgroundImage: 'url("assets/img/sl03.jpg")', backgroundPosition: 'center', backgroundSize: 'cover', paddingTop: '100px', paddingBottom: '100px', textAlign: 'center', height: '100vh' }}>
                <div className="row d-lg-flex align-items-lg-center" style={{ marginTop: '100px' }}>
                  <div className="col offset-lg-3">
                    <h3 className="d-lg-flex justify-content-lg-center" id="slider-text">Houses For Sell</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="jumbotron jumbotron-fluid pulse animated" style={{ backgroundImage: 'url("assets/img/sl02.jpg")', backgroundPosition: 'center', backgroundSize: 'cover', paddingTop: '100px', paddingBottom: '100px', textAlign: 'center', height: '100vh' }}>
                <div className="row d-lg-flex align-items-lg-center" style={{ marginTop: '100px' }}>
                  <div className="col offset-lg-3">
                    <h3 className="d-lg-flex justify-content-lg-center" id="slider-text">Plots For Sell</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="jumbotron jumbotron-fluid pulse animated" style={{ backgroundImage: 'url("assets/img/game_dev.jpg")', backgroundPosition: 'center', backgroundSize: 'cover', paddingTop: '100px', paddingBottom: '100px', textAlign: 'center', height: '100vh' }}>
                <div className="row d-lg-flex align-items-lg-center" style={{ marginTop: '100px' }}>
                  <div className="col offset-lg-0">
                    <h3 className="d-lg-flex justify-content-lg-center pl-lg-5" id="slider-text">Files For Sell</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon" /><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span className="carousel-control-next-icon" /><span className="sr-only">Next</span></a></div>
        </div>
        <div>
          <section id="About">
            <div style={{ paddingBottom: '100px' }}>
              <h1 className="text-center" data-aos="fade-up" data-aos-duration={1500} data-aos-once="true"  style={{ fontSize: '60px', fontFamily: 'Roboto, sans-serif', fontWeight: 'normal', color: '#494a4d', paddingTop: '100px', paddingBottom: '100px' }}>About Us</h1>
              <div className="container">
                <div className="row d-lg-flex" style={{ backgroundPosition: 'left', backgroundSize: '58%', backgroundRepeat: 'no-repeat' }}>
                  <div className="col-md-auto d-md-flex d-lg-flex flex-row justify-content-center align-items-center align-content-center align-self-center m-auto justify-content-md-center align-items-md-center align-content-md-center mx-md-auto justify-content-lg-center align-items-lg-center" data-aos="fade-up" data-aos-duration={2000} data-aos-once="true"><img className="img-fluid d-lg-flex flex-column justify-content-center align-items-center m-auto justify-content-lg-center align-items-lg-center" src="assets/img/about_img.svg" style={{ width: '490px' }} /></div>
                  <div className="col-sm-auto col-md-auto col-lg-5 col-xl-5 text-left float-left align-self-center ml-auto" data-aos="fade-up" data-aos-duration={1500} data-aos-once="true" style={{ marginTop: '20px' }}>
                    <p style={{ fontSize: '20px', color: '#4d4d4d', fontFamily: 'Roboto, sans-serif' }}> <span className="ml-5" /> Our membership is composed of residential and commercial brokers, salespeople, property managers, appraisers, counselors, and others engaged in the real estate industry.We deal in all over the Pakistan. Members belong to one or more of approximately 1,200+ local associations/boards and 100 state and territory associations.<br />
                      <p1 style={{ fontSize: '20px', color: '#4d4d4d', fontFamily: 'Roboto, sans-serif' }}>
                        <span className="ml-5" />Our vision is to be a trusted ally, guiding our members and those they serve through the ever-evolving real estate landscape.
                      </p1>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div data-bs-parallax-bg="true" style={{ backgroundImage: 'url("assets/img/bg_about01.png")', backgroundPosition: 'center', backgroundSize: 'cover', marginBottom: '100px' }}>
          <div>
            {/* Services */}
            <section id="services">
              <div>
                <h1 className="text-center" data-aos="fade-up" data-aos-duration={1500} data-aos-once="true" style={{ fontSize: '60px', color: 'rgb(255,255,255)', paddingBottom: '50px', fontFamily: 'Roboto, sans-serif', paddingTop: '100px' }}>Our great services<br /></h1>
              </div>
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 d-flex d-sm-flex justify-content-center align-items-center justify-content-sm-center" data-aos="fade-up" data-aos-duration={1500} data-aos-once="true" style={{ paddingTop: '100px', paddingBottom: '25px' }}>
                  <div className="col"><img className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center mx-auto justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center align-items-xl-start" data-bs-hover-animate="pulse" src="assets/img/web%20development.svg" style={{ paddingBottom: '20px', width: '80px', height: '80px' }} />
                    <h3 className="display-3 text-center d-xl-flex mx-auto justify-content-xl-center align-items-xl-end" style={{ fontSize: '20px', fontFamily: 'Roboto, sans-serif', marginTop: '20px', color: 'rgb(255,255,255)', paddingBottom: '20px' }}>Houses Sell and Purchase<br /></h3>
                  </div>
                  <div className="col align-self-center"><img className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center mx-auto justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center align-items-xl-start" data-bs-hover-animate="pulse" src="assets/img/mobile%20development.svg" style={{ paddingBottom: '20px', width: '80px', height: '80px' }} />
                    <h3 className="display-3 text-center d-xl-flex mx-auto justify-content-xl-center align-items-xl-end" style={{ fontSize: '20px', fontFamily: 'Roboto, sans-serif', marginTop: '20px', color: 'rgb(255,255,255)', paddingBottom: '20px' }}>Files Sell and Purchase<br /></h3>
                  </div>
                  <div className="col align-self-center"><img className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center mx-auto justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center align-items-xl-start" data-bs-hover-animate="pulse" src="assets/img/ui_ux.svg" style={{ paddingBottom: '20px', width: '80px', height: '80px' }} />
                    <h3 className="display-3 text-center d-xl-flex mx-auto justify-content-xl-center align-items-xl-end" style={{ fontSize: '20px', fontFamily: 'Roboto, sans-serif', marginTop: '20px', color: 'rgb(255,255,255)', paddingBottom: '20px' }}>Plots Sell and Purchase<br /></h3>
                  </div>
                </div>
              </div>
            </section></div>
        </div>
        <div id="Team" className="team-clean">
          <div className="container" style={{ paddingBottom: '100px' }}>
            <div className="intro">
              <h1 className="text-center" data-aos="fade-up" data-aos-duration={9500} data-aos-once="true" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '60px', color: 'rgb(73,74,77)' }}>Our Team </h1>
            </div>
            <div className="row people" data-aos="fade-up" data-aos-duration={150000} data-aos-delay={100} data-aos-once="true">
              <div className="col-md-6 col-lg-4 item" data-bs-hover-animate="pulse" id="people"><img className="rounded-circle" src="assets/img/team01.png" />
                <h3 className="name" style={{ fontFamily: 'Roboto, sans-serif' }}><a href="https://wa.me/+923002150091" target="_blank">Ulfat Rasool</a></h3>
                <p className="title">Founder/ceo</p>
              </div>
              <div className="col-md-6 col-lg-4 item" data-bs-hover-animate="pulse" id="people"><img className="rounded-circle" src="assets/img/team03.jpg" />
                <h3 className="name" style={{ fontFamily: 'Roboto, sans-serif' }}><a href="https://wa.me/+923054490010" target="_blank">Mubasher Akram</a></h3>
                <p className="title">DHA files(sell and purchase)</p>
              </div>
              <div className="col-md-6 col-lg-4 item" data-bs-hover-animate="pulse" id="people"><img className="rounded-circle" src="assets/img/team02.jpg" />
                <h3 className="name" style={{ fontFamily: 'Roboto, sans-serif' }}><a href="https://wa.me/+923010773586" target="_blank">Mudasser Rasool</a></h3>
                <p className="title">Software Engineer(Dealer and IT Incharge)</p>
              </div>
              <div className="col-md-6 col-lg-4 item" data-bs-hover-animate="pulse" id="people"><img className="rounded-circle" src="assets/img/team04.jpg" />
                <h3 className="name" style={{ fontFamily: 'Roboto, sans-serif' }}><a href="https://wa.me/+923008836376" target="_blank">Sohail</a></h3>
                <p className="title"><strong>CA(Incone Tex Mannager)</strong><br /></p>
              </div>
              <div className="col-md-6 col-lg-4 item" data-bs-hover-animate="pulse" id="people"><img className="rounded-circle" src="assets/img/team06.jpg" />
                <h3 className="name" style={{ fontFamily: 'Roboto, sans-serif' }}><a href="https://wa.me/+923227778224" target="_blank">Abdul Hannan</a></h3>
                <p className="title">DHA files(sell and purchase)</p>
              </div>
              {/* <div className="col-md-6 col-lg-4 item" data-bs-hover-animate="pulse" id="people"><img className="rounded-circle" src="assets/img/team08.jpg" />
                <h3 className="name" style={{ fontFamily: 'Roboto, sans-serif' }}><a href="https://wa.me/+923018460085" target="_blank">Tahir</a></h3>
                <p className="title">DHA files(sell and purchase)</p>
              </div> */}
              
            </div>
          </div>
        </div>
        <div style={{ background: 'linear-gradient(102.98deg, #364991 -0.28%, #0098DA 99.03%)' }}>
          <div className="container d-lg-flex justify-content-lg-center align-items-lg-center" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
            <div className="row row-cols-1 row-cols-sm-1">
              <div className="col-sm-6 col-md-5 col-lg-5 d-md-flex mr-auto" data-aos="zoom-in-right" data-aos-duration={1500} data-aos-delay={50} data-aos-once="true"><img className="img-fluid" src="assets/img/love-to-build.jpg" /></div>
              <div className="col-sm-6 col-md-5 col-lg-5 d-md-flex ml-auto align-items-md-center" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={50} data-aos-once="true">
                <h2 className="d-md-flex" style={{ color: 'rgb(255,255,255)', fontSize: '40px', fontFamily: 'Roboto, sans-serif' }}>We always provide greeted services and fulfill our commitment. And always serve best to our customers.
                  <br /></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center d-lg-flex justify-content-lg-center align-items-lg-center" id="contact" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
          <h1 data-aos="fade-up" data-aos-duration={1500} data-aos-once="true" style={{ fontSize: '60px', color: 'rgb(73,74,77)' }}>Contact Us</h1>
        </div>
        <div className="justify-content-lg-center align-items-lg-center" data-aos="fade-up" data-aos-duration={1500} data-aos-delay={200} data-aos-once="true" id="contact-form" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <form data-bss-subject="IM Estate" data-bss-recipient="mudasserasool@gmail.com">
                  <div className="form-group"><label htmlFor="Your Name" style={{ fontFamily: 'Roboto, sans-serif' }}>Full Name</label><input className="form-control" type="text" style={{ color: 'rgb(38,38,38)', height: '50px', borderRadius: '10px', fontFamily: 'Roboto, sans-serif' }} placeholder="Enter Your Name" required /></div>
                  <div className="form-group"><label htmlFor="Your Name" style={{ fontFamily: 'Roboto, sans-serif' }}>Email</label><input className="form-control" type="email" style={{ color: 'rgb(38,38,38)', height: '50px', borderRadius: '10px', fontFamily: 'Roboto, sans-serif' }} placeholder="Email" required /></div>
                  <div className="form-group"><label htmlFor="Your Name" style={{ fontFamily: 'Roboto, sans-serif' }}>Subject</label><input className="form-control" type="text" style={{ color: 'rgb(38,38,38)', height: '50px', borderRadius: '10px' }} placeholder="Subject" /></div>
                  <div className="form-group"><label style={{ fontFamily: 'Roboto, sans-serif' }}>Message</label><textarea className="form-control" style={{ height: '150px', borderRadius: '10px' }} required defaultValue={""} /></div>
                  <div className="form-group"><button className="btn btn-primary d-md-flex d-lg-flex justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center"  style={{backgroundColor: '#A6895E'}} data-bs-hover-animate="pulse" id="btn-contact" type="submit">Submit</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* MAP */}
        {/* <div class="container-fluid">
       <div class="row">
       <div class="col-2"></div>
       <div class="col-8" id="map" style="height: 300px;"></div>
       <div class="col-2"></div>
    </div>
   </div> */}
        <div className="text-center d-md-flex justify-content-md-center" id="address-bar" style={{ backgroundColor: '#f7f7f7', paddingTop: '50px', paddingRight: '0px', paddingBottom: '50px' }}>
          <div className="container d-md-flex d-lg-flex justify-content-md-center justify-content-lg-center">
            <div className="row row-cols-1 row-cols-md-2 justify-content-center align-items-center justify-content-md-center">
              <div className="col text-center" style={{ borderColor: '#959595', borderRightColor: 'initial', borderRight: '2px' }}>
                <h2 className="text-center" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '25px' }}><strong>Address</strong><br /></h2>
                <p className="text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>13-A Commercial, 3rd floor, IM Estate, DHA phase 6 Lahore<br /></p>
              </div>
              <div className="col text-center">
                <h2 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '25px' }}><strong>Email</strong><br /></h2>
                <p style={{ fontFamily: 'Roboto, sans-serif', color: 'rgb(43,44,44)' }}>alif@gmail.com<br /></p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-dark page-footer font-small cyan darken-3">
          {/* Footer Elements */}
          <div className="container">
            {/* Grid row*/}
            <div className="row">
              <div className="col-5" />
              {/* Grid column */}
              <div className="col-md-4 pt-5">
                <div className="mb-5 flex-center">
                  <div className="col-4" />
                  {/* Facebook */}
                  <a className="btn btn-primary btn-floating m-1 ml-2" style={{ backgroundColor: '#3b5998' }} href="#" role="button" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></a>
                  {/* Instagram */}
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#" role="button" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
                  {/* Twitter */}
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#" role="button" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
                  {/* Linkedin */}
                  <a className="btn btn-primary btn-floating m-1 " style={{ backgroundColor: '#0082ca' }} href="#" role="button" target="_blank"><i className="fab fa-linkedin-in" /></a>
                  <div className="col-4" />
                </div>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row*/}
          </div>
          {/* Footer Elements */}
        </footer>
        {/* Footer */}
      </div>
    </div>
  )
}

export default Home