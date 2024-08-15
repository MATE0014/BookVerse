import React, { useState, useEffect } from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Loader from "../../components/Loader/Loader";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about">
      {loading && <Loader />}
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title text-[2.6rem] tracking-[1px]">
              About BookVerse
            </h2>
            <p className="text-[1.7rem]">
              BookVerse is more than just a website; it’s a community for book
              lovers, by book lovers. Our mission is to create a comprehensive
              and user-friendly platform where readers of all kinds can
              discover, explore, and connect with the world of literature.
              Whether you're searching for the latest bestseller, a hidden gem,
              or a timeless classic, BookVerse is here to guide you through your
              literary journey. We believe that books have the power to inspire,
              educate, and entertain, and our goal is to make it easier for you
              to find the perfect read.
            </p>
            <p className="text-[1.7rem]">
              At BookVerse, we understand that every reader is unique, and so is
              every book. That's why we provide detailed information, reviews,
              and personalized recommendations to help you find books that match
              your interests. But we don’t stop there; we also offer a space for
              readers to share their thoughts, join discussions, and connect
              with fellow book enthusiasts. Whether you're a casual reader or a
              devoted bibliophile, BookVerse is your gateway to an endless world
              of stories, ideas, and inspiration.
            </p>{" "}
            <br />
            <p className="text-[1.7rem] italic">
              Created And Mainted By Moxit Rewar. <br />
              For Any Enquiries <br />
              Email Me At -{" "}
              <a
                href="mailto:moxitrewar777@gmail.com"
                className="custom-link"
                target="_blank"
              >
                moxitrewar777@gmail.com{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
