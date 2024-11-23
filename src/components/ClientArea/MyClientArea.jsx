import React from "react";

const MyClientArea = () => {
  return (
    <section className="client-area pt-120" style={{ position: 'relative' }}>
      {/* Background image with decreased opacity */}
      <div
        style={{
          marginTop: 130,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/img/background/bg11.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9, // Decrease the background image opacity (0 to 1)
          zIndex: 1, // Keep the background behind the content
        }}
      ></div>

      {/* Content above the background */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title title-style-two text-center mb-200 mt-200">
              <h2 className="title" style={{ color: '#fff' }}>Share Your Dream We’ll Build It</h2>
              <p style={{ color: '#fff' }}>
                Have a brand problem that needs to be solved? We’d love to hear about it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyClientArea;
