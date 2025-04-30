import { FaMicroscope, FaMoneyBillWave, FaRobot } from "react-icons/fa";
import vegitable1 from "../assets/veg1.jpeg";
import vegitable2 from "../assets/veg2.jpeg";
import vegitable3 from "../assets/veg3.jpeg";

function ServicesPart() {
  const services = [
    {
      title: "Protected Cultivation for High-Value Crops",
      image: vegitable1,
    },
    {
      title: "Climate Control & Automation Systems",
      image: vegitable2,
    },
    {
      title: "Crop Consultation & Support Services",
      image: vegitable3,
    },
  ];

  return (
    <div className="bg-[#f7f6f1] py-10 px-4 my-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h6 className="text-green-700 font-handwritten text-2xl mb-2">
          We provide
        </h6>
        <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold text-center sm:mb-5 lg:mb-10">
          Best Agriculture Serrvices <br />
          In India
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md "
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 object-cover"
            />

            {/* Card Content */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-6 py-4 text-center shadow-md w-5/6">
              <p className="text-sm text-gray-500">{service.subtitle}</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPart;
