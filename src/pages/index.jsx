import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="facebook-domain-verification" content="9z8yq6gpisfakfsxhd6sq3ymar61od" />
        <link rel="icon" href="/favicon.ico" />



      </Head>
      <main>
        <div className="w-100 bg-primary py-1 text-white text-center fs-5 text-uppercase fs__5">
          <a href="https://mailchi.mp/2d2a5555db14/e-legal-welcome" target="_blank" className="text-decoration-none text-white">
            Enter Email to receive $10 OFF
          </a>
        </div>

        <section className="container-fluid">
          <div className="row mx-0 vh_100 mt-3 radius gap-lg-0 gap-5">
            <div className="col-lg-6 px-0 bg-dark bg__line radius" style={{ backgroundImage: 'url(Lines.png)' }}>
              <div className="container-fluid px-4">
                <div className="pt-4">
                  <Link href='/'>
                    <img src="Logo.png" className="main___logo" alt="" />
                  </Link>
                </div>
                <h1 className="pt-5 mt-lg-5 text-white fw-bold display-1 text-lg-start text-center">
                  Title
                </h1>
                <p className="text-white-50 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam numquam beatae <br className="d-lg-block d-none" />{" "}
                  amet unde corrupti pariatur ipsum, harum dolor saepe.
                  Asperiores repellat quod mollitia{" "}
                  <br className="d-lg-block d-none" /> aliquid corporis quisquam
                  ad repudiandae dolore at.
                </p>
                <p className="fs-5 text-white-50 mb-0 fw-bold">Lorem Ipsum</p>
                <p className="text-white-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam numquam beatae <br className="d-lg-block d-none" />{" "}
                  amet unde corrupti pariatur ipsum, harum dolor saepe.
                  Asperiores repellat quod mollitia{" "}
                  <br className="d-lg-block d-none" /> aliquid corporis quisquam
                  ad repudiandae dolore at.
                </p>
                <div className="mt-5 pt-4 mb-3 d-flex gap-lg-5 gap-4 align-items-center flex-lg-nowrap flex-wrap justify-content-center justify-content-lg-start">
                  <div className="socialbtn">
                    <a href="https://twitter.com/E_LegalAI" target="_blank" className="text-decoration-none" style={{ color: '#29b8f6' }}>
                      <i className="fa-brands fa-twitter"></i> Post To Twitter
                    </a>
                  </div>
                  <div className="socialbtn">
                    <a href="https://www.facebook.com/elegalai" target="_blank" className="text-decoration-none" style={{ color: '#29b8f6' }}>
                      <i className="fa-brands fa-facebook"></i> Post To Facebook
                    </a>
                  </div>
                  <a href="https://www.linkedin.com/company/e-legalai/?viewAsMember=true" target="_blank" className="text-decoration-none" style={{ color: '#29b8f6' }}>
                    <div className="socialbtn">
                      <i className="fa-brands fa-linkedin"></i> Post To Linkedin
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-0 rainbow radius2 position-relative d-lg-block d-flex justify-content-center flex-wrap" style={{ backgroundImage: 'url(/rainbow.png)' }}>
              <div className="col-lg-8 fs-2 text-white m-lg-5 m-3 tag___line">Don’t get caught signing something you wish you <br /> hadn’t.</div>
              <img src="col6.png" alt="" className="img-fluid absolute__img" />
            </div>
          </div>
        </section>
        <section className="mt-5 pt-4">
          <div className="container">
            <div className="h1 text-center mb-lg-5 mb-4">We speak Legalese so you don't have to. </div>
            <div className="row  gap-lg-0 gap-5 mx-0 align-items-start">
              <div className="col-lg-6">
                <img src="desk.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6">
                <img src="desk2.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="my-5 pt-5" id="select__file">
          <div className="container">
            <div className="component__div" style={{ backgroundImage: 'url(/component.png)' }}>
              <div className="border__div w-100 h-100">
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src="Folder.png"
                      className="folder mb-3"
                      style={{ width: "70px" }}
                      alt=""
                    />
                  </div>
                  <div className="btn btn-dark px-5 py-2 fs-4">Select File</div>
                  <div className="text-center mt-2 text-white">
                    or drag & drop your file here
                  </div>
                  <div className="text-center text-white mt-4">
                    We accept .PDF and .DOCX files up to 20MB, 30 pages max
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRICE START ================== */}
        <section className="pricings">
          <div className="container py-5">
            <h1 className="text-center mb-5 pt-5 mt-lg-4"><span className="fw-bold">Price</span></h1>
            <div className="row mx-0 gap-4 justify-content-center">
              <div className="price__card__box">
                <div className="price__card__img">
                  <img src="/card.png" alt="" />
                </div>
                <div className="card__price">
                  <span>$30</span>
                </div>
                <div className="price__details">
                  <p>Up to 20 pages</p>
                </div>
                {/* <div className="btn___add d-flex justify-content-center align-items-center cursor"><span>Start</span></div> */}
              </div>
              <div className="price__card__box">
                <div className="price__card__img">
                  <img src="/card2.png" alt="" />
                </div>
                <div className="card__price">
                  <span>+$1.00</span>
                </div>
                <div className="price__details">
                  <p>Each Additional Page</p>
                </div>
                {/* <div className="btn___add d-flex justify-content-center align-items-center cursor"><span>Start</span></div> */}
              </div>
              <h3 className="text-center mt-5 fw-bold">
                <a href="#select__file" className="text-decoration-none fw-bold text-dark">
                  Get Started
                </a>
              </h3>
            </div>
          </div>
        </section>
        {/* ================= PRICE END ================== */}

        {/* ================= TESTIMONIALS START ================== */}
        <section className="testimonials">
          <div className="container py-4">
            <h1 className="text-center mt-3 fw-bold">Testimonial section</h1>
            <div className="row justify-content-center gap-4 pt-4 pb-5">
              <div className="test__box">
                <div className="test__content">
                  <p className="text-centermt-3">"Game changer for any legal document"</p>
                  <p>E-Legal AI simplified and translated a complex employment agreement for me in just a few minutes. It transformed the legal jargon into plain English, making it easier for me to comprehend and negotiate confidently. I highly recommend it to anyone who needs to simplify legal documents – it's fast, easy, and effective-Mark S.</p>
                </div>
                <button>Mark S.</button>
              </div>
              <div className="test__box">
                <div className="test__content">
                  <p>As an influencer, it's important to understand my sponsorship agreements. E-Legal AI helped me do that quickly and easily. I uploaded my agreements and quickly gained insights into the details. I recommend E-Legal AI to any influencer looking to understand their legal agreements better. Now, I feel confident in knowing what I agree to and can focus on creating great content. Thanks, E-Legal AI! - Sarah T, Instagram influencer. </p>
                </div>
                <button>Sarah T, Instagram influencer</button>
              </div>
              <div className="test__box">
                <div className="test__content">
                  <p> "I just built my dream home! Thanks to E-Legal AI, I was able to understand my home warranty contract without struggling with complicated legal language. As a home buyer, it was important to me to fully comprehend the terms of my warranty, and E-Legal simplified everything, making the contract easy to understand. I highly recommend E-Legal to anyone who wants peace of mind when it comes to understanding legal documents.-Meera S.</p>
                </div>
                <button>Meera S.</button>
              </div>
              <h3 className="text-center mt-5 fw-bold">
                <a href="#select__file" className="text-decoration-none fw-bold text-dark">
                  Get Started
                </a>
              </h3>
            </div>
          </div>
        </section>
        {/* ================= TESTIMONIALS END ================== */}

        {/* ================= FOOTER START ================== */}
        <Footer />
        {/* ================= FOOTER END ================== */}

        {/* ================= CHECKOUT START ================== */}
        {/* <Checkout /> */}
        {/* ================= CHECKOUT END ================== */}

        {/* ================= AI ANALYZING START ================== */}
        {/* <AiAnalyzing /> */}
        {/* ================= AI ANALYZING END ================== */}

      </main>
      {/* <!-- Button trigger modal --> */}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button> */}

      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <img src="/error.png" className="w-100" alt="image" />
              <div className="d-flex justify-content-center">
                <button className="btn text-white gap-3 d-flex align-items-center mt-5" data-bs-dismiss="modal" style={{ background: '#000' }}> <img src="/referesh.png" style={{ width: '15px' }} alt="" /> <span>Start over</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
