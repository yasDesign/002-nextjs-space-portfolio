import Head from 'next/head'
import Image from 'next/image'

import galleryImg1 from '../public/assets/img/gallery-img-01.jpg'
import galleryImg2 from '../public/assets/img/gallery-img-02.jpg'
import galleryImg3 from '../public/assets/img/gallery-img-03.jpg'
import galleryImg4 from '../public/assets/img/gallery-img-04.jpg'
import galleryImg5 from '../public/assets/img/gallery-img-05.jpg'
import galleryImg6 from '../public/assets/img/gallery-img-06.jpg'
import galleryImg7 from '../public/assets/img/gallery-img-07.jpg'
import galleryImg8 from '../public/assets/img/gallery-img-08.jpg'

import bgImg1 from '../public/assets/img/home-img-1.jpg'
import bgImg2 from '../public/assets/img/home-img-2.jpg'


export default function Home() {
  return (
    <>
  
       <video autoPlay muted loop id="bg-video">
        <source src="assets/video/gfp-astro-timelapse.mp4" type="video/mp4" />
    </video>
    <div className="page-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="cd-slider-nav">
              <nav className="navbar navbar-expand-lg" id="tm-nav">
                <a className="navbar-brand" href="#">Astro Motion</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-supported-content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbar-supported-content">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                      <li className="nav-item selected">
                        <a className="nav-link" aria-current="page" href="#0" data-no="1">Home</a>
                        <div className="circle"></div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#0" data-no="2">Gallery</a>
                        <div className="circle"></div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#0" data-no="3">About</a>
                        <div className="circle"></div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#0" data-no="4">Contact</a>
                        <div className="circle"></div>
                      </li>
                    </ul>
                  </div>
              </nav>
            </div>
          </div>          
        </div>        
      </div>      
      <div className="container-fluid tm-content-container">
        <ul className="cd-hero-slider mb-0 py-5">
          <li className="px-3" data-page-no="1">
            <div className="page-width-1 page-left">
              <div className="d-flex position-relative tm-border-top tm-border-bottom intro-container">
                <div className="intro-left tm-bg-dark">
                  <h2 className="mb-4">Welcome to Astro Motion</h2>
                  <p className="mb-4">
                    This HTML template has a motion video background loop which is provided by <a rel="sponsored" href="https://getfreepictures.com" >Get Free Pictures</a>. This is
                    one-page responsive layout for your websites. Feel
                  free to use this for a commercial purpose. </p>
                  <p className="mb-0">
                  You are not permitted to redistribute this template on your Free CSS collection websites. Please <a rel="nofollow" href="https://templatemo.com/contact" >contact us</a> for more information. </p>
                </div>
                <div className="intro-right">
                  <Image src={bgImg1} alt="Image" className="img-fluid intro-img-1" />
                  <Image src={bgImg2} alt="Image" className="img-fluid intro-img-2" />
                </div>
                <div className="circle intro-circle-1"></div>
                <div className="circle intro-circle-2"></div>
                <div className="circle intro-circle-3"></div>
                <div className="circle intro-circle-4"></div>
              </div>
              <div className="text-center">
                <a href="#0" data-page-no="2" className="btn btn-primary tm-intro-btn tm-page-link">
                  View Gallery
                </a>
              </div>            
            </div>            
          </li>
          <li data-page-no="2">
            <div className="mx-auto position-relative gallery-container">
              <div className="circle intro-circle-1"></div>
              <div className="circle intro-circle-2"></div>
              <div className="mx-auto tm-border-top gallery-slider">
                <figure className="effect-julia item">
                    <Image src={galleryImg9} alt="Image" />
                    <figcaption>
                        <div>
                            <p>Julia dances in the deep dark</p>
                        </div>
                        <a href="#">View more</a>
                    </figcaption>
                </figure>
                <figure className="effect-julia item">
                    <Image src={galleryImg1} alt="Image" />
                    <figcaption>
                        <div>
                            <p>Julia dances in the deep dark</p>
                        </div>
                        <a href="#">View more</a>
                    </figcaption>
                </figure>
                <figure className="effect-julia item">
                    <Image src={galleryImg2} alt="Image" />
                    <figcaption>
                        <div>
                            <p>Julia dances in the deep dark</p>
                        </div>
                        <a href="#">View more</a>
                    </figcaption>
                </figure>
                <figure className="effect-julia item">
                    <Image src={galleryImg3} alt="Image"/>
                    <figcaption>
                        <div>
                            <p>Julia dances in the deep dark</p>
                        </div>
                        <a href="#">View more</a>
                    </figcaption>
                </figure>
                <figure className="effect-julia item">
                    <Image src={galleryImg4} alt="Image"/>
                    <figcaption>
                        <div>
                            <p>Julia dances in the deep dark</p>
                        </div>
                        <a href="#">View more</a>
                    </figcaption>
                </figure>
                <figure className="effect-julia item">
                    <Image src={galleryImg5} alt="Image"/>
                    <figcaption>
                        <div>
                            <p>Julia dances in the deep dark</p>
                        </div>
                        <a href="#">View more</a>
                    </figcaption>
                </figure>
                <figure className="effect-julia item">
                    <Image src={galleryImg6} alt="Image"/>
                    <figcaption>
                        <div>
                            <p>Julia dances in the deep dark</p>
                        </div>
                        <a href="#">View more</a>
                    </figcaption>
                </figure>
                <figure className="effect-julia item">
                    <Image src={galleryImg7} alt="Image"/>
                    <figcaption>
                        <div>
                            <p>Julia dances in the deep dark</p>
                        </div>
                        <a href="#">View more</a>
                    </figcaption>
                </figure>
                <figure className="effect-julia item">
                    <Image src={galleryImg8} alt="Image"/>
                    <figcaption>
                        <div>
                            <p>Julia dances in the deep dark</p>
                        </div>
                        <a href="#">View more</a>
                    </figcaption>
                </figure>
              </div>
            </div>
          </li>
          <li data-page-no="3" className="px-3">
            <div className="position-relative page-width-1 page-right tm-border-top tm-border-bottom">
              <div className="circle intro-circle-1"></div>
              <div className="circle intro-circle-2"></div>
              <div className="circle intro-circle-3"></div>
              <div className="circle intro-circle-4"></div>
              <div className="tm-bg-dark content-pad">
                <h2 className="mb-4">About our company</h2>
                <p className="mb-4">
                  You are <span className="highlight">allowed</span> to use Astro Motion HTML Template for your websites. You are not allowed to re-distribute this template ZIP file on any Free CSS template collection website. Illegal redistribution is strongly prohibited.
                </p>
                <p>
                  Praesent auctor rhoncus arcu, vitae blandit est vestibulum sit amet. Integer erat
                  turpis, vestibulum pellentesque aliquam ultricies, finibus nec dui. Donec bibendum
                  enim mi, at tristique leo feugiat at. Thank you for visiting Template Mo.
                </p>
              </div>              
            </div>
          </li>
          <li data-page-no="4">
            <div className="mx-auto page-width-2">
              <div className="row">
                <div className="col-md-6 me-0 ms-auto">
                  <h2 className="mb-4">Contact Us</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 tm-contact-left">
                  <form action="#" method="POST" className="contact-form">
                    <div className="input-group tm-mb-30">
                        <input name="name" type="text" className="form-control rounded-0 border-top-0 border-end-0 border-start-0" placeholder="Name"/>
                    </div>
                    <div className="input-group tm-mb-30">
                        <input name="email" type="text" className="form-control rounded-0 border-top-0 border-end-0 border-start-0" placeholder="Email"/>
                    </div>
                    <div className="input-group tm-mb-30">
                        <textarea rows="5" name="message" className="textarea form-control rounded-0 border-top-0 border-end-0 border-start-0" placeholder="Message"></textarea>
                    </div>
                    <div className="input-group justify-content-end">
                        <input type="submit" className="btn btn-primary tm-btn-pad-2" value="Send"/>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 tm-contact-right">                  
                  <p className="mb-4">
                    Integer erat turpis, vestibulum pellentesque aliquam
                    ultricies, finibus nec dui. Donec bibendum enim mi,
                    at tristique leo feugiat at.
                  </p>
                  <div>
                    Email: <a href="mailto:info@company.com" className="tm-link-white">info@company.com</a>
                  </div>
                  <div className="tm-mb-45">
                    Tel: <a href="tel:0100200340" className="tm-link-white">010-020-0340</a>
                  </div>
                  <div className="map-outer">
                    <div className="gmap-canvas">
                        <iframe width="100%" height="400" id="gmap-canvas"
                            src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
                </div>
              </div>
            </div>            
          </li>
        </ul>
    </div>
    <div className="container-fluid">
      <footer className="row mx-auto tm-footer">
        <div className="col-md-6 px-0">
          Copyright 2021 Astro Motion Company Limited. All rights reserved.
        </div>
        <div className="col-md-6 px-0 tm-footer-right">
          Designed by <a rel="sponsored" href="https://templatemo.com"  className="tm-link-white">TemplateMo</a>
        </div>
      </footer>
    </div>
  </div>

  <div id="loader-wrapper">            
    <div id="loader"></div>
    <div className="loader-section section-left"></div>
    <div className="loader-section section-right"></div>
  </div>  

    </>
  )
}
