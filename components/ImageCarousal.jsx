import Slider from 'react-slick';
import Image from 'next/image';
import ArrowRight from '~/public/assets/icons/arrow-right.svg';

const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute bottom-[-10%] left-[30px] cursor-pointer" onClick={onClick}>
      <span className="icon-white icon-carousal block">
        <ArrowRight />
      </span>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute bottom-[-10%] left-0 cursor-pointer" onClick={onClick}>
      <span className="icon-white icon-carousal block rotate-180 transform">
        <ArrowRight />
      </span>
    </div>
  );
};

const ImageCarousal = ({ data = [], title = '' }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-[80px] lg:mb-[160px]">
      <h1 className="text-2xl font-500 !leading-[25px] lg:text-5xl lg:!leading-[50px]">{title}</h1>
      <div className="mt-[34px]">
        <Slider {...settings} className="image-carousal relative">
          {data.map((item, index) => (
            <div key={index} className="carousel-slide mr-[62px]">
              <Image
                src={item.image_url}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
                width={425}
                height={700}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousal;
