const About = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Founders' Vision */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
          Welcome to India’s Premium Garlic Brand
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
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
          <div>
            <h3 className="text-3xl font-semibold text-green-700 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be India’s most trusted brand for garlic-based products,
              delivering excellence through purity and precision, while
              expanding across global markets.
            </p>
          </div>
          <div>
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

      {/* Leadership Team */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-12">
          Meet Our Leaders
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Team Member: Kiran */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/120"
              alt="Kiran Rajole"
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-green-100"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              Kiran Rajole
            </h4>
            <p className="text-green-600 font-medium">Founder</p>
            <p className="text-sm text-gray-600 mt-2">
              A visionary rooted in agriculture, she turned her dream of
              hygienic, high-quality garlic into a thriving business.
            </p>
          </div>

          {/* Team Member: Keshav */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/120"
              alt="Keshav Kalmodiya"
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-green-100"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              Keshav Kalmodiya
            </h4>
            <p className="text-green-600 font-medium">Co-Founder & CEO</p>
            <p className="text-sm text-gray-600 mt-2">
              The brain behind automation and scale—bringing innovation,
              efficiency, and market expansion to the core of our operations.
            </p>
          </div>

          {/* Team Member: Kunal */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/120"
              alt="Kunal Kalmodiya"
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-green-100"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              Kunal Kalmodiya
            </h4>
            <p className="text-green-600 font-medium">General Manager</p>
            <p className="text-sm text-gray-600 mt-2">
              The engine of day-to-day operations—overseeing production,
              quality, logistics, and ensuring every order is perfectly
              delivered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
