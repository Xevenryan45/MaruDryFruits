import React from "react";

const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <main className="content2">
        <div className="container2">
          <h1 className="title">Disclaimer</h1>

          <div className="card">
            <div className="prose">
              <section className="section2">
                <h2 className="section-title2">Website Disclaimer</h2>
                <p>
                  The information provided by NutriNuts ("we," "us," or "our") on our website is for general
                  informational purposes only. All information on the site is provided in good faith, however we make
                  no representation or warranty regarding the accuracy, validity, reliability, or completeness of any
                  information on the site.
                </p>
                <p>
                  Under no circumstance shall we have any liability for any loss or damage incurred as a result of the
                  use of the site. Your use of the site is solely at your own risk.
                </p>
              </section>

              <section className="section">
                <h2 className="section-title">External Links Disclaimer</h2>
                <p>
                  The site may contain links to other websites or content belonging to third parties. Such external
                  links are not monitored for accuracy, reliability, or completeness by us.
                </p>
                <p>
                  We do not guarantee or assume responsibility for the accuracy of any third-party websites linked
                  through this site.
                </p>
              </section>

              <section className="section">
                <h2 className="section-title">Health Information Disclaimer</h2>
                <p>
                  Information about the nutritional content and health benefits of our products is based on general
                  research and is for informational purposes only. It should not be considered medical advice.
                </p>
                <p>
                  Always consult a healthcare professional before making any dietary changes.
                </p>
              </section>

              <section className="section">
                <h2 className="section-title">Testimonials Disclaimer</h2>
                <p>
                  The testimonials displayed on our website are from actual customers. However, individual results may
                  vary.
                </p>
              </section>

              <section className="section">
                <h2 className="section-title">Product Information Disclaimer</h2>
                <p>
                  We strive to provide accurate product descriptions, images, and pricing. However, we do not guarantee
                  that product descriptions are error-free.
                </p>
                <p>
                  Prices and availability of products are subject to change without notice.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Disclaimer;
