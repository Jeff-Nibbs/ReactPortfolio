import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/sous-chef-helper.png";
import IMG2 from "../../assets/front-sass.png";
import IMG3 from "../../assets/loan-calculator.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Sous-Chef Helper",
    github: "https://github.com/Jeff-Nibbs/sous-chef-helper",
    demo: "https://jeff-nibbs.github.io/sous-chef-helper/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Front",
    github: "https://github.com/Jeff-Nibbs/Front-sass-page",
    demo: "https://jeff-nibbs.github.io/Front-sass-page/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Loan Calculator",
    github: "https://github.com/Jeff-Nibbs/loan-calulator.git",
    demo: "https://loan-calulator.vercel.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
