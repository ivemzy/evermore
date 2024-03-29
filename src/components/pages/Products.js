import React from 'react';

const Products = () => {
  return (
    <div>
      <section id="pageTitle" className="page-title page-title-layout6 bg-overlay bg-parallax text-center">
        <div className="bg-img"><img src="assets/images/page-titles/6.jpg" style={{Width:'100%', maxHeight: '170px'}} alt="background" /></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <h1 className="pagetitle__heading">Our Products</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Our Products</li>
                </ol>
              </nav>
            </div>{/* /.col-lg-8 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.page-title */}
      {/* ========================= 
       careers
  =========================  */}
      <section id="careers" className="careers pt-120 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col-md-4">
                  <div className=" job-item">
                    
                    <h4 className="job__title">Agric Solution</h4>
                    <a href="/agric" className="btn btn__secondary btn__link">
                    <img className='img-responsive' src="assets/images/products/agric.png" style={{Width:'100%', maxHeight: '170px'}} alt="background" />
                    </a>
                  </div>{/* /.job-item */}
                  <br />
                </div>
                <div className="col-md-4">
                  <div className=" job-item">
                    <h4 className="job__title">Hospital Equipments </h4>
                    <a href="/medical" className="btn btn__secondary btn__link">
                    <img className='img-responsive' src="assets/images/products/medical.png" style={{Width:'100%', maxHeight: '170px'}} alt="background" />
                    </a>
                  </div>{/* /.job-item */}
                  <br />
                </div>
                <div className="col-md-4">
                  <div className=" job-item">
                    <h4 className="job__title">Transformer Welder </h4>
                    <a href="/transformer" className="btn btn__secondary btn__link">
                    <img className='img-responsive' src="assets/images/products/transformer.png" style={{Width:'100%', maxHeight: '170px'}} alt="background" />
                    </a>
                  </div>{/* /.job-item */}
                  <br />
                </div>
                <div className="col-md-4">
                  <div className=" job-item">
                    <h4 className="job__title">Block Production Machine</h4>
                    <a href="/block-machine" className="btn btn__secondary btn__link">
                    <img className='img-responsive' src="assets/images/products/block.png" style={{Width:'100%', maxHeight: '170px'}} alt="background" />
                    </a>
                  </div>{/* /.job-item */}
                  <br />
                </div>
                <div className="col-md-4">
                  <div className=" job-item">
                    <h4 className="job__title">Solar </h4>
                    <a href="/solar" className="btn btn__secondary btn__link">
                    <img className='img-responsive' src="assets/images/products/solar.png" style={{Width:'100%', maxHeight: '170px'}} alt="background" />
                    </a>
                  </div>{/* /.job-item */}
                  <br />
                </div>
                <div className="col-md-4">
                  <div className=" job-item">
                    <h4 className="job__title">Transportation </h4>
                    <a href="/transportation" className="btn btn__secondary btn__link">
                    <img className='img-responsive' src="assets/images/products/transportation.png" style={{Width:'100%', maxHeight: '170px'}} alt="background" />
                    </a>
                  </div>{/* /.job-item */}
                  <br />
                </div>
                
                
              </div>
            </div>{/* /.col-lg-12 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>
    </div>
  );
};

export default Products;
