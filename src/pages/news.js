import React from 'react'
import Footer from '@/components/Footer'
import Link from 'next/link'

const news = () => {
  return (
    <>
       <section className='terms___section p-2'>
        {/* ====================== BANNER START ========================= */}
        <section className='banner__section'>
          <div className='container-fluid position-relative p-lg-5 p-4'>
            <div className='w-100'>
              <Link href='/'>
                  <img src="/Logo.png" className='bannner___logo' alt="logo" />
              </Link>
            </div>
            <div className='w-100 d-flex align-items-center bannner___box justify-content-center'>
              <div className='text-center col-xxl-4 col-lg-6 col-12'>
                <h1 className='text-white display-1 main___banner___title'>News</h1>
                <p className=' text-white mt-lg-4 mt-2 main___banner___p'>Keep up on the latest news</p>
              </div>
            </div>
            <img src="/terms.png" className='banner__img' alt="image" />
          </div>
        </section>
        {/* ====================== BANNER END ========================= */}

        {/* ====================== TEXT CONTENT START ========================= */}
        <section className='text___content___section'>
          <div className='container'>
            <div className='row justify-content-center mt-lg-0 mt-4 mb-lg-5 mb-0'>
              <div className='txt___content___p col-lg-7 pt-lg-5 pt-2 col-12'>
                    <h5 className='fw-bold'>
                        <Link href="/article1" className='text-decoration-none text-dark'> PRESS RELEASE: E-Legal AI Revolutionizes Legal Documents: Simplifying legalese with AI</Link>
                    </h5>
                    <h5 className='fw-bold'>
                        <Link href="/article2" className='text-decoration-none text-dark'> Is Your Severance Agreement Package Negotiable? Here's How to Sign with Confidence</Link>
                    </h5>
                    <h5 className='fw-bold'>
                        <Link href="/article3" className='text-decoration-none text-dark'> Need Legal Advice? Before You Sign the Dotted Line, Here's What You Should Know</Link>
                    </h5>
              </div>
            </div>
          </div>
        </section>
        {/* ====================== TEXT CONTENT END ========================= */}

        {/* ====================== FOOTER START ========================= */}
          <Footer/>
        {/* ====================== FOOTER END ========================= */}
        

      </section>
    </>
  )
}

export default news