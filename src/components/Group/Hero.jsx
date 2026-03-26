import React from "react";
const backgroundImage = "https://res.cloudinary.com/drkmm8xka/image/upload/v1770183123/assets_1_yif4en.png";

const Hero = () => {
  return (
    <section className="relative h-[95vh] w-full flex items-center mt-15 justify-center">
      <img 
        src={backgroundImage} 
        alt="Background" 
        className="w-full h-full object-cover absolute"
      />

      <div className="absolute inset-0 bg-black/60"></div>


      {/* Content */}
      {/* <div className="relative max-w-5xl text-center text-white px-7">
        <h4 className="text-xl md:text-5xl font-bold leading-tight mb-6">
          Transforming Infrastructure Through <span className="text-[#C79336]">Financial Advisory & Asset Management</span>
        </h4>

        <p className="md:text-2xl leading-relaxed mb-8 text-200 text-[#fff]">
          Through our affiliate company Ecos Infra Communications, we provide expert advisory services in project communication,
          public engagement, and training. We partner with governments, development
          institutions, and private sector actors to deliver sustainable and transformative
          infrastructure solutions across Africa.
        </p>
      </div> */}

       <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30 px-4">
        <div className="max-w-4xl bg-black bg-opacity-70 p-8 rounded-lg">
          {/* Main Title - Styled to match screenshot */}
          <h1 class="text-[20px] md:text-[35px] font-bold mb-6 text-white uppercase tracking-wider">
                PROJECT COMMUNICATION
            </h1>
          
          {/* Subtitle with decorative line */}
          <div className="relative mb-8">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[#C79336]"></div>
            
          </div>
          
          {/* Main content text */}
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto">
            We provide expert advisory services in project communication,
            public engagement, and training. We partner with governments, development
            institutions, and private sector actors to deliver sustainable and transformative
            infrastructure solutions across Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
