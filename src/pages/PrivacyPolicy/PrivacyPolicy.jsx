import React, { useState, useEffect } from "react";
import "./PrivacyPolicy.css";
import Loader from "../../components/Loader/Loader";

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="privacy-policy">
      {loading && <Loader />}
      <div className="container">
        <div className="section-title">
          <h2>Privacy Policy</h2>
        </div>

        <div className="privacy-content grid">
          <div className="privacy-text">
            <h2 className="privacy-title text-[2.6rem] tracking-[1px]">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-[1.7rem]">
              At ShelfSeeker, we value your privacy and are committed to
              protecting your personal information. This privacy policy outlines
              how we collect, use, and safeguard your data when you use our
              website and services.
            </p>
            <p className="text-[1.7rem]">
              We may collect personal information such as your name, email
              address, and browsing behavior to provide you with a personalized
              experience. Rest assured, your information is secure with us, and
              we will never share it with third parties without your consent.
            </p>
            <p className="text-[1.7rem]">
              Our privacy practices are guided by the principles of transparency
              and integrity. We will always inform you about what data we
              collect, why we collect it, and how you can control your personal
              information.
            </p>{" "}
            <br />
            <p className="text-[1.7rem] italic">
              If you have any questions or concerns about our privacy policy,
              feel free to contact us at: <br />
              <a
                href="mailto:moxitrewar777@gmail.com"
                className="custom-link"
                target="_blank"
              >
                moxitrewar777@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
