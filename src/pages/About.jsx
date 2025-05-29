import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    if (window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Founders' Vision */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6 wow animate__animated animate__fadeInDown">
          Welcome to India’s Premium Garlic Brand
        </h2>
        <p
          className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed wow animate__animated animate__fadeInUp"
          data-wow-delay="0.2s"
        >
          Founded by <strong>Kiran Rajole</strong>, led by{" "}
          <strong>Keshav Kalmodiya</strong>, and powered by{" "}
          <strong>Kunal Kalmodiya</strong>, our mission is to blend traditional
          values with modern automation to deliver garlic products that are
          hygienic, pure, and full of flavor. With three years of excellence, we
          are revolutionizing garlic processing in India.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="wow animate__animated animate__fadeInLeft">
            <h3 className="text-3xl font-semibold text-green-700 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be India’s most trusted brand for garlic-based products,
              delivering excellence through purity and precision, while
              expanding across global markets.
            </p>
          </div>
          <div
            className="wow animate__animated animate__fadeInRight"
            data-wow-delay="0.2s"
          >
            <h3 className="text-3xl font-semibold text-green-700 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower homes, hotels, and industries with hygienic, premium
              garlic solutions crafted using state-of-the-art automation and
              deep agricultural knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10 wow animate__animated animate__fadeInUp">
            What Makes Us Unique
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Purity First",
                text: "No chemicals, no compromise—just pure garlic with traditional essence.",
              },
              {
                title: "Automation Excellence",
                text: "Modern machines meet agricultural wisdom for consistent quality.",
              },
              {
                title: "Customer Trust",
                text: "Over 3 years of delighting clients with timely delivery and premium products.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md wow animate__animated animate__fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >
                <h4 className="font-bold text-green-600 text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-sm mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-12 wow animate__animated animate__fadeInDown">
          Meet Our Leaders
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Kiran Rajole",
              role: "Founder",
              desc: "A visionary rooted in agriculture, she turned her dream of hygienic, high-quality garlic into a thriving business.",
            },
            {
              name: "Keshav Kalmodiya",
              role: "Co-Founder & CEO",
              desc: "The brain behind automation and scale—bringing innovation, efficiency, and market expansion to the core of our operations.",
            },
            {
              name: "Kunal Kalmodiya",
              role: "General Manager",
              desc: "The engine of day-to-day operations—overseeing production, quality, logistics, and ensuring every order is perfectly delivered.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 wow animate__animated animate__zoomIn"
              data-wow-delay={`${index * 0.2}s`}
            >
              <h4 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-green-600 font-medium">{member.role}</p>
              <p className="text-sm text-gray-600 mt-2">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white py-16 px-6 text-center wow animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience Pure Garlic?
        </h2>
        <p className="text-lg mb-6">
          Reach out to us for collaborations, bulk orders, or business
          inquiries.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
