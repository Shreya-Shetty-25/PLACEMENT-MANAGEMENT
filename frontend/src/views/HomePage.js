// import React from 'react';
// import './style.css'; // Import the CSS file
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import i1 from '../images/customer-1.jpg'; // Import the CSS file
// import i2 from '../images/customer-2.avif'; // Import the CSS file
// import i3 from '../images/customer-3.avif';
// import i4 from '../images/i2.jpg'
// import i5 from '../images/about.jpg'
// import { BiArrowToRight } from 'react-icons/bi'; // Updated import
// import { FaShieldAlt, FaChartPie, FaCode, FaAndroid, FaSearch } from 'react-icons/fa';



// function Homepage() {
//   return (
//     <div>
//       <>
//         <main role="main" className="main-content">
//           {/* Video section */}
//           <section className="video-section">
//             <div className="horizontal-line"></div>
//             <div className="video-wrapper">
//               <video controls className="video-fullscreen">
//                 <source src="your-video.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <div className="video-caption-one">CAREERS</div>
//             <div className="video-caption-two">Build a future you</div>
//             <div className="video-caption-three">believe in</div>

//             {/* Apply Now container */}
//             <div className="apply-now-container">
//               <span className="apply-now-text">Apply Now</span>
//               <a href="#" className="apply-now-button"></a>
//             </div>
//           </section>
//           {/* Video section end */}

//           {/* body starts */}

//           {/* about us starts */}
//           <div className="container-fluid py-5" id="about">
//             <div className="container py-5">
//               <div className="row g-5">
//                 <div className="col-lg-7">
//                   <div className="sectiontitle pb-3 mb-5">
//                     <h5 style={{ color: 'rgb(153, 150, 150)', fontWeight: 700 }}>ABOUT US</h5>
//                     <h1 style={{ color: "rgb(51, 50, 50)" }}>The Best IT Solution With 10 Years Of Experience</h1>
//                   </div>
//                   <p className="mb-4">
//                     Techno Lab aims to help small and large scale industries to transform their business using a
//                     digital model following the high technology standards. We helped many industries in growing
//                     their customer’s count with our consultancy and software development strategies.
//                   </p>
//                   <div className="row g-0 mb-3">
//                     <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
//                       <h5 className="mb-3"><i className="fa fa-check me-3" style={{ color: 'rgb(153, 150, 150)' }}></i>Award Winning</h5>
//                       <h5 className="mb-3"><i className="fa fa-check me-3" style={{ color: 'rgb(153, 150, 150)' }}></i>Professional Staff</h5>
//                     </div>
//                     <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
//                       <h5 className="mb-3"><i className="fa fa-check me-3" style={{ color: 'rgb(153, 150, 150)' }}></i>24/7 Support</h5>
//                       <h5 className="mb-3"><i className="fa fa-check me-3" style={{ color: 'rgb(153, 150, 150)' }}></i>Fair Prices</h5>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
//                     <div className="d-flex align-items-center justify-content-center rounded"
//                       style={{ width: '60px', height: '60px', backgroundColor: 'rgb(153, 150, 150)' }}>
//                       <i className="fa fa-phone-alt text-white"></i>
//                     </div>
//                     <div className="ps-4">
//                       <h5 className="mb-2">Call to ask any question</h5>
//                       <h4 className="mb-0" style={{ color: 'rgb(153, 150, 150)' }}>+012 345 6789</h4>
//                     </div>
//                   </div>
//                   <button
//                     className="btn text-white py-md-3 px-md-5 me-3 animated slideInLeft"
//                     style={{ backgroundColor: 'rgb(153, 150, 150)' }}
//                   >
//                     Book Your Free IT Consultation Now
//                   </button>

//                 </div>
//                 <div className="col-lg-5">
//                   <div className="position-relative h-100">
//                     <img src={i5} className="w-100 h-100" alt="About Us" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* about us ends */}

//           {/* services starts */}
//           <div className="container-fluid" id="service">
//       <div className="container py-5">
//         <div className="sectiontitle mx-auto text-center position-relative py-3">
//           <h5 style={{ color: ' rgb(153, 150, 150)', fontWeight: 600 }}>OUR SERVICES</h5>
//           <h1 className="mb-0">
//             Custom IT Solutions for Your <br /> Successful Business
//           </h1>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row p-5">
//           <div className="col-lg-4 col-md-6 p-3">
//             <div
//               className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
              
//             >
//               <div className="service-icon">
//                 <FaShieldAlt className="text-white icon-rotate" />
//               </div>
//               <h4 className="mb-3">Cyber Security</h4>
//               <p className="m-0">
//                 With cutting-edge technologies and expert knowledge, we safeguard organizations from evolving cyber risks, enabling them to operate with confidence in the digital realm.
//               </p>
//               <a
//                 className="btn btn-lg rounded"
//                 href=""
//               >
//                 <BiArrowToRight />
//               </a>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 p-3">
//             <div
//               className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
//             >
//               <div className="service-icon">
//                 <FaChartPie className="text-white icon-rotate" />
//               </div>
//               <h4 className="mb-3">Data Analytics</h4>
//               <p className="m-0">
//                 With expertise in extracting actionable intelligence, they empower businesses to make data-driven decisions and drive meaningful outcomes.
//               </p>
//               <a
//                 className="btn btn-lg rounded"
//                 href=""
//               >
//                 <BiArrowToRight />
//               </a>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 p-3">
//             <div
//               className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
//             >
//               <div className="service-icon">
//                 <FaCode className="text-white icon-rotate" />
//               </div>
//               <h4 className="mb-3">Web Development</h4>
//               <p className="m-0">
//                 Crafting exceptional web experiences with pixel-perfect design, seamless functionality, and optimal user experience.
//               </p>
//               <a
//                 className="btn btn-lg rounded"
//                 href=""
//               >
//                 <BiArrowToRight />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="row px-5 py-0">
//           <div className="col-lg-4 col-md-6 p-3">
//             <div
//               className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
//             >
//               <div className="service-icon">
//                 <FaAndroid className="text-white icon-rotate" />
//               </div>
//               <h4 className="mb-3">Apps Development</h4>
//               <p className="m-0">
//                 Building groundbreaking mobile applications that blend intuitive user interfaces with powerful functionality, catering to the evolving needs of users in the digital age.
//               </p>
//               <a
//                 className="btn btn-lg rounded"
//                 href=""
//               >
//                 <BiArrowToRight />
//               </a>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 p-3">
//             <div
//               className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
//             >
//               <div className="service-icon">
//                 <FaSearch className="text-white icon-rotate" />
//               </div>
//               <h4 className="mb-3">SEO Optimization</h4>
//               <p className="m-0">
//                 Boosting online visibility and driving organic traffic with expert SEO optimization strategies that propel businesses to the top of search engine rankings.
//               </p>
//               <a
//                 className="btn btn-lg rounded"
//                 href=""
//               >
//                 <BiArrowToRight />
//               </a>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 p-3">
//             <div
//               className="position-relative rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5"
//               style={{ backgroundColor: 'rgb(51, 50, 50)' }}
//             >
//               <h3 className="text-white mb-3">Call Us For Free Consultation</h3>
//               <p className="text-white mb-3">
//                 Contact Techno Lab for a FREE consultation and we’ll show you what award-winning Managed IT Services can do for your business
//               </p>
//               <h2 className="text-white mb-0">+012 345 6789</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//           {/* services ends */}


//           {/* image with div starts */}
//           <section className="image-section">
//             <div className="image-container">
//               <img className="fullscreen-image" src={i4} alt="Fullscreen" />
//               <div className="caption">Image Caption Here</div>
//               <div className="overlap-container">
//                 <div className="overlap-div">
//                   <h1 className="overlap-div-h1">600k</h1>
//                   <h5 className="overlap-div-h5">OUR EMPLOYEES</h5>
//                   <p className="overlap-div-p">Workforce globally distributed, highly localized</p>
//                 </div>
//                 <div className="overlap-div">
//                   <h1 className="overlap-div-h1">600k</h1>
//                   <h5 className="overlap-div-h5">OUR EMPLOYEES</h5>
//                   <p className="overlap-div-p">Workforce globally distributed, highly localized</p>
//                 </div>
//                 <div className="overlap-div">
//                   <h1 className="overlap-div-h1">600k</h1>
//                   <h5 className="overlap-div-h5">OUR EMPLOYEES</h5>
//                   <p className="overlap-div-p">Workforce globally distributed, highly localized</p>
//                 </div>
//                 <div className="overlap-div">
//                   <h1 className="overlap-div-h1">600k</h1>
//                   <h5 className="overlap-div-h5">OUR EMPLOYEES</h5>
//                   <p className="overlap-div-p">Workforce globally distributed, highly localized</p>
//                 </div>
//               </div>
//             </div>
//           </section>
//           {/* image with div ends */}

//           {/* commnet box starts */}
//           <div className="container-fluid comment-box" style={{ width: '100%' }}>
//             <div id="customer-comments" className="carousel slide" data-bs-ride="carousel">
//               <div className="carousel-inner">
//                 <div className="carousel-item active">
//                   <div className="container-fluid customer-review">
//                     <p
//                       style={{ fontSize: '40px', marginTop: '80px' }}
//                       className="customer-heading"
//                     >
//                       TESTIMONIALS OF OUR WINNERS
//                     </p>
//                     <div style={{ marginTop: '90px' }}>
//                       <div className="row">
//                         <div className="col-md-3">
//                           <img
//                             className="customer-image"
//                             src={i1}
//                             alt="Customer-1"
//                             style={{ height: '200px', width: '200px' }}
//                           />
//                         </div>
//                         <div className="col-md-9">
//                           <div className="customer-comment">
//                             <i className="fas fa-quote-left quotes"></i>
//                             <p className="comment-descp">
//                               I have never experienced such an easy procedure of placing a bid and selling products on your auction site.
//                               It's very simple and at the same time very secure, and thatss what I like most about Online Auction.
//                               I recommend this website to everyone who is looking for a reliable and safe website to place a bid or sell almost anything.
//                             </p>
//                           </div>
//                           <p className="cust-name">Clara James</p>
//                           <p className="cust-type">Regular Customer</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="carousel-item">
//                   <div className="container-fluid customer-review">
//                     <p
//                       style={{ fontSize: '40px', marginTop: '80px' }}
//                       className="customer-heading"
//                     >
//                       TESTIMONIALS OF OUR WINNERS
//                     </p>
//                     <div style={{ marginTop: '90px' }}>
//                       <div className="row">
//                         <div className="col-md-3">
//                           <img
//                             className="customer-image"
//                             src={i2}
//                             alt="Customer-2"
//                             style={{ height: '200px', width: '200px' }}
//                           />
//                         </div>
//                         <div className="col-md-9">
//                           <div className="customer-comment">
//                             <i className="fas fa-quote-left quotes"></i>
//                             <p className="comment-descp">
//                               On behalf of our company, I wanted to thank you for the exceptional service you provided us with selling some of
//                               our equipment and raising more money than we hoped. This was our first time using online auction,
//                               and everything went extremely smoothly, from the registration to selling the products and their delivery.
//                             </p>
//                           </div>
//                           <p className="cust-name">Max Ortega</p>
//                           <p className="cust-type">Regular Customer</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="carousel-item">
//                   <div className="container-fluid customer-review">
//                     <p
//                       style={{ fontSize: '40px', marginTop: '80px' }}
//                       className="customer-heading"
//                     >
//                       TESTIMONIALS OF OUR WINNERS
//                     </p>
//                     <div style={{ marginTop: '90px' }}>
//                       <div className="row">
//                         <div className="col-md-3">
//                           <img
//                             className="customer-image"
//                             src={i3}
//                             alt="Customer-3"
//                             style={{ height: '200px', width: '200px' }}
//                           />
//                         </div>
//                         <div className="col-md-9">
//                           <div className="customer-comment">
//                             <i className="fas fa-quote-left quotes"></i>
//                             <p className="comment-descp">
//                               I just wanted to take the time and say I am very impressed with your online bidding site.
//                               I'm pleased I can create a watchlist and bid & delete lots out of it. Also, there's no more scrolling to the bottom of
//                               every page just to place 1 bid. It really helps when it's necessary to place a single bid and do it quickly.
//                             </p>
//                           </div>
//                           <p className="cust-name">Sarah Beeston</p>
//                           <p className="cust-type">Regular Customer</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 className="carousel-control-prev active"
//                 type="button"
//                 data-bs-target="#customer-comments"
//                 data-bs-slide="prev"
//               >
//                 <i className="bi bi-arrow-left-circle-fill" style={{ fontSize: '40px', color: 'rgb(153, 150, 150)' }}></i>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next active"
//                 type="button"
//                 data-bs-target="#customer-comments"
//                 data-bs-slide="next"
//               >
//                 <i className="bi bi-arrow-right-circle-fill" style={{ fontSize: '40px', color: 'rgb(153, 150, 150)' }}></i>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//           {/* commnet box ends */}


//           {/* body ends */}



//           {/* Footer starts */}
//           <div className="container-fluid text-light mt-5" style={{ backgroundColor: "rgb(51, 50, 50)" }}>
//             <div className="container">
//               <div className="row gx-5">
//                 <div className="col-lg-4 col-md-6 footer-about">
//                   <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 p-4" style={{ backgroundColor: "rgb(153, 150, 150)" }}>
//                     <a href="#" className="navbar-brand">
//                       <h1 className="m-0 text-white">techno Lab</h1>
//                     </a>
//                     <p className="mt-3 mb-4">
//                       We are diverse, passionate, and highly curious tech enthusiasts who are sowing the seeds for a better tomorrow. We collaborate with businesses, enterprises, organizations, and government agencies to streamline their operations.
//                     </p>
//                     <form action="">
//                       <div className="input-group">
//                         <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
//                         <button className="btn btn-dark">Sign Up</button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div className="col-lg-8 col-md-6">
//                   <div className="row gx-5">
//                     <div className="col-lg-4 col-md-12 pt-5 mb-5 footer-child2">
//                       <div className="sectiontitle section-title-sm position-relative pb-3 mb-4">
//                         <h5 className="text-light mb-0">Get In Touch</h5>
//                       </div>
//                       <div className="d-flex mb-2">
//                         <i className="bi bi-geo-alt me-2" style={{ color: "rgb(153, 150, 150)" }}></i>
//                         <p className="mb-0">Subidbazar Sylhet 3100</p>
//                       </div>
//                       <div className="d-flex mb-2">
//                         <i className="bi bi-envelope-open me-2" style={{ color: "rgb(153, 150, 150)" }}></i>
//                         <p className="mb-0">technolab@gmail.com</p>
//                       </div>
//                       <div className="d-flex mb-2">
//                         <i className="bi bi-telephone me-2" style={{ color: "rgb(153, 150, 150)" }}></i>
//                         <p className="mb-0">+012 345 67890</p>
//                       </div>
//                       <div className="d-flex mt-4">
//                         <a className="btn btn-square me-2" style={{ backgroundColor: "rgb(153, 150, 150)" }} href="#">
//                           <i className="fab fa-twitter fw-normal" style={{ color: "rgb(255, 255, 255)" }}></i>
//                         </a>
//                         <a className="btn btn-square me-2" style={{ backgroundColor: "rgb(153, 150, 150)" }} href="#">
//                           <i className="fab fa-facebook-f fw-normal" style={{ color: "rgb(255, 255, 255)" }}></i>
//                         </a>
//                         <a className="btn btn-square me-2" style={{ backgroundColor: "rgb(153, 150, 150)" }} href="#">
//                           <i className="fab fa-linkedin-in fw-normal" style={{ color: "rgb(255, 255, 255)" }}></i>
//                         </a>
//                         <a className="btn btn-square" style={{ backgroundColor: "rgb(153, 150, 150)" }} href="#">
//                           <i className="fab fa-instagram fw-normal" style={{ color: "rgb(255, 255, 255)" }}></i>
//                         </a>
//                       </div>

//                     </div>
//                     <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
//                       <div className="sectiontitle section-title-sm position-relative pb-3 mb-4">
//                         <h5 className="text-light mb-0">Services</h5>
//                       </div>
//                       <div className="link-animated d-flex flex-column justify-content-start">
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>Cyber Security</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>Data Analytics</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>Web Development</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>Apps Development</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>SEO Optimization</a>
//                         <a className="text-light" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>CMS Solutions</a>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
//                       <div className="sectiontitle section-title-sm position-relative pb-3 mb-4">
//                         <h5 className="text-light mb-0">Quick Links</h5>
//                       </div>
//                       <div className="link-animated d-flex flex-column justify-content-start">
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>Home</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>About Us</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>Our Services</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>Meet The Team</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>Latest Blog</a>
//                         <a className="text-light" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "rgb(153, 150, 150)" }}></i>Contact Us</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="container-fluid text-white" style={{ backgroundColor: 'black' }}>
//             <div className="container text-center">
//               <div className="row justify-content-end">
//                 <div className="col-lg-8 col-md-6">
//                   <div className="d-flex align-items-center justify-content-center" style={{ height: "75px" }}>
//                     <p className="mb-0">&copy; <a className="text-white border-bottom" style={{ textDecoration: "none" }} href="#">TechnoLab</a>. All Rights Reserved.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Footer end */}
//         </main>
//       </>
//     </div>
//   );
// }

// export default Homepage;
import React from 'react';
import './style.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import i1 from '../images/customer-1.jpg'; // Import the CSS file
import i2 from '../images/customer-2.avif'; // Import the CSS file
import i3 from '../images/customer-3.avif';
import i4 from '../images/i2.jpg'
import i5 from '../images/about.jpg'
import { BiArrowToRight } from 'react-icons/bi'; // Updated import
import { FaShieldAlt, FaChartPie, FaCode, FaAndroid, FaSearch } from 'react-icons/fa';



function Homepage() {
  return (
    <div>
      <>
        <main role="main" className="main-content">
          {/* Video section */}
          <section className="video-section">
            <div className="horizontal-line"></div>
            <div className="video-wrapper">
              <video className="video-fullscreen" autoPlay loop muted>
                <source src="/placement.mp4" type="video/mp4"/>
              </video>
            </div>
            <div className="video-caption-one" style={{color:"black"}}>CAREERS</div>
            <div className="video-caption-two" style={{color:"black"}}>Build a future you</div>
            <div className="video-caption-three" style={{color:"black"}}>believe in</div>
           
            {/* Apply Now container */}
            <div className="apply-now-container">
              <span className="apply-now-text" style={{color:"black"}}>Apply Now</span>
              <a href="#" className="apply-now-button"></a>
            </div>
          </section>
          {/* Video section end */}

          {/* body starts */}

          {/* about us starts */}
          <div className="container-fluid py-5" id="about">
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-lg-7">
                  <div className="sectiontitle pb-3 mb-5">
                    <h5 style={{ color: '#90AEAD', fontWeight: 700 }}>ABOUT US</h5>
                    <h1 style={{ color: "#244855" }}>Find your gateway to career success and talent discovery!</h1>
                  </div>
                  <p className="mb-4" style={{color:'#244855'}}>
                  Welcome to CareerPlacement, where opportunities meet talent. Our innovative placement platform is designed to bridge
                  the gap between ambitious students and forward-thinking companies, creating a seamless connection for career
                  advancement.                  
                  </p>
                  <div className="row g-0 mb-3">
                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                      <h5 className="mb-3" style={{ color:'#244855' }}><i className="fa fa-check me-3" style={{ color: '#90AEAD' }}></i>Award Winning</h5>
                      <h5 className="mb-3" style={{ color:'#244855' }}><i className="fa fa-check me-3" style={{ color: '#90AEAD' }}></i>Dedicated Support</h5>
                    </div>
                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                      <h5 className="mb-3" style={{ color:'#244855' }}><i className="fa fa-check me-3" style={{ color: '#90AEAD' }}></i>24/7 Support</h5>
                      <h5 className="mb-3" style={{ color:'#244855' }}><i className="fa fa-check me-3" style={{ color: '#90AEAD' }}></i>Fair Prices</h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                    <button className="d-flex align-items-center justify-content-center rounded about-button-hover1"
                    >
                      <i className="fa fa-phone-alt text-white"></i>
                    </button>
                    <div className="ps-4">
                      <h5 className="mb-2" style={{color:'#244855'}}>Call to ask any question</h5>
                      <h4 className="mb-0" style={{ color: '#90AEAD' }}>+091 798 4466321</h4>
                    </div>
                  </div>
                  <button
                    className="btn py-md-3 px-md-5 me-3 about-button-hover2">
                    Where ambition meets opportunity—discover your path with CareerPlacement                
                  </button>

                </div>
                <div className="col-lg-5">
                  <div className="position-relative h-100">
                    <img src={i5} className="w-100 h-100" alt="About Us" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* about us ends */}

          {/* services starts */}
          <div className="container-fluid" id="service">
      <div className="container py-5">
        <div className="sectiontitle mx-auto text-center position-relative py-3">
          <h5 style={{ color: ' #90AEAD', fontWeight: 600 }}>OUR SERVICES</h5>
          <h1 className="mb-0" style={{color:'#244855'}}>
          Discover the Future of Job Placement with  <br /> Our Dynamic Services and Tools
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-4 col-md-6 p-3">
            <div
              className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
              
            >
              <div className="service-icon">
                <FaShieldAlt className="text-white icon-rotate" />
              </div>
              <h4 className="mb-3">Personalized Job Matching</h4>
              <p className="m-0">
              Our advanced algorithms analyze your skills, experience, and career goals to provide tailored job recommendations. Discover opportunities that align perfectly with your aspirations.
              </p>
              <a
                className="btn btn-lg rounded"
                href=""
              >
                <BiArrowToRight />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3">
            <div
              className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div className="service-icon">
                <FaChartPie className="text-white icon-rotate" />
              </div>
              <h4 className="mb-3">Advanced Candidate Search</h4>
              <p className="m-0">
              Utilize our advanced search features to find candidates who meet your specific job requirements. Filter by skills, experience, location, and more to identify the best talent for your organization.              </p>
              <a
                className="btn btn-lg rounded"
                href=""
              >
                <BiArrowToRight />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3">
            <div
              className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div className="service-icon">
                <FaCode className="text-white icon-rotate" />
              </div>
              <h4 className="mb-3">Career Resources and Guidance</h4>
              <p className="m-0">
              Access a suite of resources designed to support your job search. From resume writing workshops and interview preparation guides to career counseling and networking tips, we provide tools to help you succeed.              </p>
              <a
                className="btn btn-lg rounded"
                href=""
              >
                <BiArrowToRight />
              </a>
            </div>
          </div>
        </div>
        <div className="row px-5 py-0">
          <div className="col-lg-4 col-md-6 p-3">
            <div
              className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div className="service-icon">
                <FaAndroid className="text-white icon-rotate" />
              </div>
              <h4 className="mb-3">Efficient Job Posting</h4>
              <p className="m-0">
              Post job openings with ease using our intuitive job listing platform. Manage your job postings and attract qualified candidates effortlessly.              </p>
              <a
                className="btn btn-lg rounded"
                href=""
              >
                <BiArrowToRight />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3">
            <div
              className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div className="service-icon">
                <FaSearch className="text-white icon-rotate" />
              </div>
              <h4 className="mb-3">Skill Development Opportunities</h4>
              <p className="m-0">
              Take advantage of webinars, workshops, and online courses offered through our platform. Enhance your skills and qualifications to make yourself more competitive in the job market.              </p>
              <a
                className="btn btn-lg rounded"
                href=""
              >
                <BiArrowToRight />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 p-3">
            <div
              className="position-relative rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5"
              style={{ backgroundColor: '#244855' }}
            >
              <h3 className="text-white mb-3">Call Us For Free Consultation</h3>
              <p className="text-white mb-3">
                Contact CareerPlacement for a FREE consultation and we’ll show you our services.
              </p>
              <h2 className="text-white mb-0">+091 798 4466321</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
          {/* services ends */}


          {/* image with div starts */}
          <section className="image-section">
            <div className="image-container">
              <img className="fullscreen-image" src={i4} alt="Fullscreen" />
              <div className="caption">Why Only Us???</div>
              <div className="overlap-container">
                <div className="overlap-div">
                  <h1 className="overlap-div-h1">User-Friendly Interface</h1>
                  <h5 className="overlap-div-h5"></h5>
                  <p className="overlap-div-p">Ensuring a smooth experience whether you’re applying for jobs or hiring talent.</p>
                </div>
                <div className="overlap-div">
                  <h1 className="overlap-div-h1">Secure and Reliable</h1>
                  <h5 className="overlap-div-h5"></h5>
                  <p className="overlap-div-p"> We prioritize the security of your data and provide a reliable service to help you achieve your career or hiring goals.</p>
                </div>
                <div className="overlap-div">
                  <h1 className="overlap-div-h1">Dedicated Support</h1>
                  <h5 className="overlap-div-h5"></h5>
                  <p className="overlap-div-p">Our team is here to assist you with any questions or issues, ensuring you get the support you need throughout your journey.</p>
                </div>
                {/* <div className="overlap-div">
                  <h1 className="overlap-div-h1"> Innovative Features</h1>
                  <h5 className="overlap-div-h5"></h5>
                  <p className="overlap-div-p">Workforce globally distributed, highly localized</p>
                </div> */}
              </div>
            </div>
          </section>
          {/* image with div ends */}

          {/* commnet box starts */}
          <div className="container-fluid comment-box" style={{ width: '100%' }}>
            <div id="customer-comments" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container-fluid customer-review">
                    <p
                      style={{ fontSize: '40px', marginTop: '80px',color:'#244855' }}
                      className="customer-heading"
                    >
                      TESTIMONIALS OF OUR USERS
                    </p>
                    <div style={{ marginTop: '90px' }}>
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            className="customer-image"
                            src={i1}
                            alt="Customer-1"
                            style={{ height: '200px', width: '200px' }}
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="customer-comment">
                            <i className="fas fa-quote-left quotes" style={{color:"#244855"}}></i>
                            <p className="comment-descp"> I am Nishi Patel,</p>
                            <p className="comment-descp">
                              
                            This was my first time using an online placement service, and everything went 
                            seamlessly—from setting up our job postings to managing applications and making 
                            successful hires. The intuitive interface and efficient processes made it easy to
                             connect with qualified candidates and streamline our recruitment efforts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid customer-review">
                    <p
                      style={{ fontSize: '40px', marginTop: '80px',color:'#244855' }}
                      className="customer-heading"
                    >
                      TESTIMONIALS OF OUR USERS
                    </p>
                    <div style={{ marginTop: '90px' }}>
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            className="customer-image"
                            src={i2}
                            alt="Customer-2"
                            style={{ height: '200px', width: '200px' }}
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="customer-comment">
                            <i className="fas fa-quote-left quotes" style={{color:"#244855"}}></i>
                            <p className="comment-descp"> I am Joyy Shah,</p>
                            <p className="comment-descp">
                            I really impressed with the support and guidance offered throughout the 
                            process, ensuring a smooth and successful experience. Thanks to CareerPlacement, we were 
                            able to fill our positions with exceptional talent and achieve better results than anticipated. 
                            We highly recommend your platform to others seeking effective recruitment solutions."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid customer-review">
                    <p
                      style={{ fontSize: '40px', marginTop: '80px',color:'#244855' }}
                      className="customer-heading"
                    >
                      TESTIMONIALS OF OUR USRS
                    </p>
                    <div style={{ marginTop: '90px' }}>
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            className="customer-image"
                            src={i3}
                            alt="Customer-3"
                            style={{ height: '200px', width: '200px' }}
                          />
                        </div>
                        <div className="col-md-9">
                          <div className="customer-comment">
                            <i className="fas fa-quote-left quotes" style={{color:"#244855"}}></i>
                            <p className="comment-descp"> I am Shreya Shetty,</p>
                            <p className="comment-descp">
                            CareerPlacement made our hiring process incredibly efficient and effective.
                             The platform's intuitive design and comprehensive candidate pool allowed us
                              to find top-notch talent quickly. We exceeded our hiring goals and are thrilled 
                              with the results. I highly recommend CareerPlacement for any organization looking 
                              to streamline their recruitment.                             
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev active"
                type="button"
                data-bs-target="#customer-comments"
                data-bs-slide="prev"
              >
                <i className="bi bi-arrow-left-circle-fill" style={{ fontSize: '40px' ,color:"#244855"}}></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next active"
                type="button"
                data-bs-target="#customer-comments"
                data-bs-slide="next"
              >
                <i className="bi bi-arrow-right-circle-fill" style={{ fontSize: '40px',color:"#244855" }}></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* commnet box ends */}


          {/* body ends */}



          {/* Footer starts */}
          <div className="container-fluid text-light mt-5" style={{ backgroundColor: "#244855" }}>
            <div className="container">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-6 footer-about">
                  <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 p-4" style={{ backgroundColor: "#90AEAD",color:"#244855" }}>
                    <a href="#" className="navbar-brand">
                      <h2 className="m-0">Career Placement</h2>
                    </a>
                    <p className="mt-3 mb-4">
                    If you have any questions or need support, please contact us at our email or visit our Help Center. We’re here to assist you 
                    and ensure your experience with CareerPlacementis exceptional.

                    Thank you for choosing us. We look forward to helping you achieve your career goals and find the perfect talent!

                    </p>
                    <form action="">
                      <div className="input-group">
                        <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                        <button className="btn btn-dark">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6">
                  <div className="row gx-5">
                    <div className="col-lg-4 col-md-12 pt-5 mb-5 footer-child2">
                      <div className="sectiontitle section-title-sm position-relative pb-3 mb-4">
                        <h5 className="text-light mb-0">Get In Touch</h5>
                      </div>
                      <div className="d-flex mb-2">
                        <i className="bi bi-geo-alt me-2" style={{ color: "#90AEAD" }}></i>
                        <p className="mb-0">Makarba 3100</p>
                      </div>
                      <div className="d-flex mb-2">
                        <i className="bi bi-envelope-open me-2" style={{ color: "#90AEAD" }}></i>
                        <p className="mb-0">CareerPlacement@gmail</p>
                        <p>.com</p>
                      </div>
                      <div className="d-flex mb-2">
                        <i className="bi bi-telephone me-2" style={{ color: "#90AEAD" }}></i>
                        <p className="mb-0">+091 798 4466321</p>
                      </div>
                      <div className="d-flex mt-4">
                        <a className="btn btn-square me-2" style={{ backgroundColor: "#90AEAD" }} href="#">
                          <i className="fab fa-twitter fw-normal" style={{ color: "rgb(255, 255, 255)" }}></i>
                        </a>
                        <a className="btn btn-square me-2" style={{ backgroundColor: "#90AEAD" }} href="#">
                          <i className="fab fa-facebook-f fw-normal" style={{ color: "rgb(255, 255, 255)" }}></i>
                        </a>
                        <a className="btn btn-square me-2" style={{ backgroundColor: "#90AEAD" }} href="#">
                          <i className="fab fa-linkedin-in fw-normal" style={{ color: "rgb(255, 255, 255)" }}></i>
                        </a>
                        <a className="btn btn-square" style={{ backgroundColor: "#90AEAD" }} href="#">
                          <i className="fab fa-instagram fw-normal" style={{ color: "rgb(255, 255, 255)" }}></i>
                        </a>
                      </div>

                    </div>
                    <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                      <div className="sectiontitle section-title-sm position-relative pb-3 mb-4">
                        <h5 className="text-light mb-0">Services</h5>
                      </div>
                      <div className="link-animated d-flex flex-column justify-content-start">
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>Cyber Security</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>Data Analytics</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>Web Development</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>Apps Development</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>SEO Optimization</a>
                        <a className="text-light" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>CMS Solutions</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                      <div className="sectiontitle section-title-sm position-relative pb-3 mb-4">
                        <h5 className="text-light mb-0">Quick Links</h5>
                      </div>
                      <div className="link-animated d-flex flex-column justify-content-start">
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>Home</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>About Us</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>Our Services</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>Why Only Us???</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>Latest Blog</a>
                        <a className="text-light" href="#"><i className="bi bi-arrow-right me-2" style={{ color: "#90AEAD" }}></i>Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid text-white" style={{ backgroundColor: 'black' }}>
            <div className="container text-center">
              <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6">
                  <div className="d-flex align-items-center justify-content-center" style={{ height: "75px" }}>
                    <p className="mb-0">&copy; <a className="text-white border-bottom" style={{ textDecoration: "none" }} href="#">CareerPlacement</a>. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer end */}
        </main>
      </>
    </div>
  );
}

export default Homepage;
