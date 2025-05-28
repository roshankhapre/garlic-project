import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CheckCircle, Star, Users } from "lucide-react";
import Products from "../pages/Products";
import garlicImage2 from "../assets/top-view-spicy-garlic-cloves.webp";
import garlicImage1 from "../assets/garlicimg1.webp";
import garlicImage3 from "../assets/garlicImg2.webp";

const slides = [
  {
    image: garlicImage3,
    title: "India’s Premium Garlic Processing Brand",
    desc: "Where Purity Meets Precision – machine-processed garlic delivered nationwide.",
  },
  {
    image: garlicImage1,
    title: "100% Hygienic. 100% Reliable.",
    desc: "India’s first fully-automated garlic processing unit with FSSAI certification.",
  },
];

const Home = () => {
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative wow animate__animated animate__fadeIn">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          loop
          className="h-[90vh]"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-full bg-cover bg-center flex items-center justify-center text-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center px-4">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg wow animate__animated animate__fadeInDown">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6 wow animate__animated animate__fadeInUp">
                    {slide.desc}
                  </p>
                  <a
                    href="/contact"
                    className="bg-white text-green-700 text-lg font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition wow animate__animated animate__zoomIn"
                    data-wow-delay="0.3s"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 wow animate__animated animate__fadeInDown">
          About PureGarlic
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 wow animate__animated animate__fadeInUp">
          Founded by <strong>Kiran Rajole</strong> and led by{" "}
          <strong>Keshav Kalmodiya</strong>, PureGarlic is transforming garlic
          processing with India’s first fully-automated, hygiene-focused garlic
          facility. We’re setting new benchmarks in agri-tech by blending
          tradition with precision.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700 wow animate__animated animate__zoomIn">
          <div>
            <Users className="mx-auto text-green-600" size={32} />
            <p className="mt-2 font-medium">100+ Happy B2B Clients</p>
          </div>
          <div>
            <Star className="mx-auto text-green-600" size={32} />
            <p className="mt-2 font-medium">5+ Years of Excellence</p>
          </div>
          <div>
            <CheckCircle className="mx-auto text-green-600" size={32} />
            <p className="mt-2 font-medium">FSSAI Certified Unit</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <Products />

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-green-50">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-10 wow animate__animated animate__fadeInDown">
          Why Choose PureGarlic?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-gray-700">
          {[
            "Uncompromised Hygiene Standards",
            "Fully Automated Processing Unit",
            "Skilled & Trained Workforce",
            "FSSAI & Industry Compliance",
            "Traceable & Transparent Sourcing",
            "Custom Packaging & Bulk Orders",
          ].map((reason, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border shadow hover:shadow-md transition wow animate__animated animate__fadeInUp"
              data-wow-delay={`${i * 0.1}s`}
            >
              <CheckCircle className="text-green-600 mb-2" />
              <h4 className="text-lg font-semibold">{reason}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 wow animate__animated animate__fadeInDown">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Vikram Food Co.",
              quote:
                "The hygiene and quality of PureGarlic is unmatched. Our production efficiency improved after switching.",
            },
            {
              name: "Spice Cartel Pvt Ltd",
              quote:
                "Reliable, fast delivery and clean products. Their garlic powder is now a key ingredient in our seasoning line.",
            },
            {
              name: "Sunrise Kitchens",
              quote:
                "PureGarlic helped us scale — quality packaging and very responsive service from the team.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition wow animate__animated animate__fadeInUp"
              data-wow-delay={`${idx * 0.2}s`}
            >
              <p className="text-gray-700 mb-4">“{item.quote}”</p>
              <p className="text-green-700 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-20 text-center px-6 wow animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold mb-4 wow animate__animated animate__fadeInDown">
          Partner With India’s Most Trusted Garlic Brand
        </h2>
        <p className="text-lg mb-6 wow animate__animated animate__fadeInUp">
          Let’s grow together. Contact us for B2B orders, sample requests, and
          collaborations.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition wow animate__animated animate__zoomIn"
          data-wow-delay="0.3s"
        >
          Contact Us Now
        </a>
      </section>
    </div>
  );
};

export default Home;
