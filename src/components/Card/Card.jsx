import React from 'react'
import { useRef } from "react";
import { motion , useInView } from "framer-motion";

const Card = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });
  return (
    <div>
      <motion.div
              key={data.id}
              className="group  bg-white p-2 rounded-lg shadow-md overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }} // ចាប់ផ្តើមពីលើ
              animate={isInView ? { opacity: 1, y: 0 } : {}} // បង្ហាញនៅពេល Scroll ទៅដល់
              transition={{ duration: 0.5, delay: data.id * 0.1 }} // Stagger effect
            >
              <img src={data.image}/>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                       {data.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${data.price}</p>
              </div>
        </motion.div>
    </div>
  )
}

export default Card