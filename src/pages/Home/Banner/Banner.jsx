import React from "react";
import banner from '../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className="hero py-10 bg-opacity-30 border-3 border-red-200  my-bg my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div className="text-black">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
