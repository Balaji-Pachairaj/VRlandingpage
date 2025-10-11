import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Link from "next/link";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Digital Twin",
    description:
      "We create real-time digital replicas of physical environments.",
  },
  {
    Icon: RxPencil2,
    title: "Education",
    description:
      "Immersive VR experiences that transform learning into engaging, interactive exploration.",
  },
  {
    Icon: RxDesktop,
    title: "Navigation",
    description:
      "Advanced 3D navigation systems that guide users through complex environments seamlessly.",
  },
  {
    Icon: RxReader,
    title: "Projection Mapping",
    description:
      "Turning ordinary spaces into dynamic visual storytelling experiences with precise projection technology.",
  },
  {
    Icon: RxRocket,
    title: "Combat Training",
    description:
      "Realistic VR simulations that enhance tactical awareness and combat readiness.",
  },
  {
    Icon: RxRocket,
    title: "Dome Projection",
    description:
      "Immersive 360° dome visuals for education, entertainment, and exhibitions.",
  },
  {
    Icon: RxRocket,
    title: "Health Care & Therapy",
    description:
      "Virtual environments aiding recovery, relaxation, and patient engagement.",
  },
  {
    Icon: RxRocket,
    title: "Robotic Surgery",
    description:
      "Enhanced precision and safety through simulation and visualization technologies.",
  },
  {
    Icon: RxRocket,
    title: "Other Applications",
    description:
      "Expanding VR possibilities in Sports Training, Collaborative VR, Real Estate, and VR Training.",
    link: "/work",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <Link
            href={item.link || "/"}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-[rgba(65,47,123,0.15)] h-max h rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
          >
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
