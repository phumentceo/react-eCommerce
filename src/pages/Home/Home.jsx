import React from 'react'
import Slider from '../../components/Slide/Slider'
import { motion , useInView } from "framer-motion";
import { useRef } from "react";
import "./style.css"


const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });

  return (
    <div>
      <Slider />
      {/* Categories start */}
      <div className="w-full mt-[20px]">
      <h2 className="text-3xl font-semibold mb-5 underline">Categories</h2>

      <div ref={ref} className="overflow-x-auto flex gap-4 scrollbar-hide scroll-smooth">
        <div className="flex flex-nowrap gap-4">
          {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
            <motion.div
            className="relative min-w-[300px] h-[200px] flex items-center justify-center rounded-xl cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            >
            {/* Border Glowing Effect */}
            <div className="absolute inset-0 border-4 rounded-xl border-glow"></div>
      
            <img className="w-full h-full object-cover object-top relative z-10 rounded-xl"
              src="https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/aPfvUDpPwMn1ZadNKhP7/product-images/8905745177197/660/HLSH013833_1.jpg" 
            />

          </motion.div>
          ))}
        </div>
      </div>

    </div>

    {/* Category end */}


    <div className="py-10 max-w-full">
      <h2 className="text-3xl font-semibold mb-5 underline">products</h2>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-10">
          {[1,1,1,1,1,1,1,1,1,1,1,1].map((product, index) => (
            <motion.div
              key={index}
              className="group  bg-white p-2 rounded-lg shadow-md overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }} // ចាប់ផ្តើមពីលើ
              animate={isInView ? { opacity: 1, y: 0 } : {}} // បង្ហាញនៅពេល Scroll ទៅដល់
              transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
            >
              <img src="https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" className="aspect-square w-full rounded-md bg-gray-200 object-cover transition-transform transform group-hover:scale-110 duration-300"/>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$20</p>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
    


     


    </div>
  );
};

export default Home;
