import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  const testimonials = [
    {
      name: "Zuber All Hasan",
      position: "CEO, Developer",
      iconBg: "bg-[#4baf47]",
      icon: "👤",
      message:
        "We've been thoroughly impressed with the quality of the poly green house from Rathe Agrotech. The structure is durable, well-designed, and perfect for year-round cultivation. Highly recommend their service!",
    },
    {
      name: "Mahfuz Riad",
      position: "CEO, Company",
      iconBg: "bg-[#4baf47]",
      icon: "👤",
      message:
        "Rathe Agrotech delivered exactly what we needed for our horticulture project. The team was professional, timely, and supportive throughout the installation. The greenhouse is performing excellently!",
    },
    {
      name: "Anika Sharma",
      position: "Designer, Studio X",
      iconBg: "bg-[#4baf47]",
      icon: "👤",
      message:
        "Our experience with Rathe Agrotech has been fantastic. The poly green house is not only sturdy but also helps maintain optimal growing conditions. Their post-installation support is commendable.",
    },
    {
      name: "David Lee",
      position: "Manager, TechWorld",
      iconBg: "bg-[#4baf47]",
      icon: "👤",
      message:
        "Thanks to Rathe Agrotech, we now have a reliable and cost-effective greenhouse setup. The team provided expert guidance and ensured everything was tailored to our crop needs. Truly satisfied!",
    },
  ];

  return (
    <div className="bg-black bg-opacity-90 py-7 px-6 text-white">
      <div className="text-center mb-10">
        <h6 className="text-green-700 font-handwritten text-2xl">
          What People Say?
        </h6>
      </div>
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          slidesPerGroup={2}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            type: "progressbar",
            el: ".swiper-pagination", // you must specify this
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center text-center w-full  mx-auto">
                {/* User icon */}
                <div
                  className={`w-16 h-16 rounded-full ${t.iconBg} text-2xl flex items-center justify-center`}
                >
                  {t.icon}
                </div>
                <h4 className="mt-4 font-bold text-lg">{t.name}</h4>
                <p className="text-sm">{t.position}</p>

                {/* Testimonial Box */}
                <div className="relative bg-white text-gray-800 mt-4 p-4 rounded shadow-lg h-[150px] flex flex-col justify-between">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
                  <p className="text-sm leading-relaxed">{t.message}</p>
                  <div className=" text-4xl text-gray-300">“</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
