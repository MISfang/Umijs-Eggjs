import { FC, useState } from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
import { SwiperOptions } from 'swiper';
import './index.less';

const index: FC<{
  banner: {
    url: string;
  }[];
}> = (props) => {
  const config: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 1200,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletElement: 'li',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return (
    <>
      <AwesomeSwiper className="banner" config={config}>
        <div className="swiper-wrapper">
          {props?.banner?.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <img src={item.url} alt="banner" />
            </div>
          ))}
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </AwesomeSwiper>
    </>
  );
};

export default index;
