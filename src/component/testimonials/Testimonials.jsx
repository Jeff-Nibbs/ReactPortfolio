import React from "react";
import "./testimonials.css";

import AVTR1 from "../../assets/eli.JPG";
import AVTR2 from "../../assets/ben.JPG";
import AVTR3 from "../../assets/britt.jpg";
import AVTR4 from "../../assets/levi.png";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Elijah Yang",
    review:
      "Daniel did a fantastic job!! Very communicative, completed the project quickly and accurately. He went above and beyond what was expected in the scope of the job. I would absolutely recommend and will be hiring Daniel again in the future!",
  },
  {
    avatar: AVTR2,
    name: "Benjamin Wagner",
    review:
      "Fantastic experience working with Daniel. Great communication, and very prompt delivery. Will absolutely work with him again!",
  },
  {
    avatar: AVTR3,
    name: "Brittany Lawson",
    review:
      "Excellent developer with an eye for detail and design. Super responsive, very fast, couldn't be happier with the work.",
  },
  {
    avatar: AVTR4,
    name: "Levi Baker",
    review: "Excellent work and fast.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h4>Review from clients</h4>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avitar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
