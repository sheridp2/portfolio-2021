import React from "react";
import "./AboutDetails.scss";

export default function AboutDetails() {
  return (
    <>
      <div className="blogSlider">
        <div className="blogSlider__wrp swiperWrapper">
          <div className="blogSlider__item swiperSlide">
            <div className="blogSlider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="blogSlider__content">
              <span className="blogSlider__code">26 December 2019</span>
              <div className="blogSlider__title">Lorem Ipsum Dolor</div>
              <div className="blogSlider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?{" "}
              </div>
              <a href="#" className="blogSlider__button">
                READ MORE
              </a>
            </div>
          </div>
          <div className="blogSlider__item swiperSlide">
            <div className="blogSlider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="blogSlider__content">
              <span className="blogSlider__code">26 December 2019</span>
              <div className="blogSlider__title">Lorem Ipsum Dolor2</div>
              <div className="blogSlider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
              <a href="#" className="blogSlider__button">
                READ MORE
              </a>
            </div>
          </div>

          <div className="blogSlider__item swiperSlide">
            <div className="blogSlider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="blogSlider__content">
              <span className="blogSlider__code">26 December 2019</span>
              <div className="blogSlider__title">Lorem Ipsum Dolor</div>
              <div className="blogSlider__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
              <a href="#" className="blogSlider__button">
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div className="blogSlider__pagination"></div>
      </div>
    </>
  );
}
