import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { motion , useInView } from "framer-motion";
import { useRef } from "react";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Detail() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [activeTab, setActiveTab] = useState('Description');
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });

  const [customerRatings, setCustomerRatings] = useState([
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Excellent product! Highly recommended.',
      date: '2023-10-01',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Good quality, but delivery was a bit slow.',
      date: '2023-10-05',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      rating: 3,
      comment: 'Average product. Could be better.',
      date: '2023-10-10',
    },
  ]);

  const handleSubmitRating = () => {
    if (newRating > 0 && newComment.trim() !== '') {
      const newReview = {
        id: customerRatings.length + 1,
        name: 'Guest User',
        rating: newRating,
        comment: newComment,
        date: new Date().toISOString().split('T')[0],
      };

      setCustomerRatings([...customerRatings, newReview]);
      setNewRating(0);
      setNewComment('');
    } else {
      alert('Please provide a rating and comment!');
    }
  };

 
  return (
    <div className="bg-white">

      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex items-center space-x-2 "
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="mx-auto  lg:grid lg:grid-cols-2 pt-5 lg:gap-x-8 ">
          {/* Image Gallery (Left Side) */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-y-8">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="rounded-lg object-cover"
              />
              <div className="grid grid-cols-5 gap-x-4">
                <img
                  alt={product.images[1].alt}
                  src={product.images[1].src}
                  className="rounded-lg object-cover"
                />
                <img
                  alt={product.images[2].alt}
                  src={product.images[2].src}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Details (Right Side) */}
          <div className="lg:col-span-1 lg:pl-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
            <p className="text-3xl tracking-tight text-gray-900 mt-4">
              {product.price}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "size-5 shrink-0"
                      )}
                    />
                  ))}
                </div>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            {/* Product Options */}
            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <fieldset aria-label="Choose a color" className="mt-4">
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="flex items-center gap-x-3"
                  >
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={classNames(
                          color.selectedClass,
                          "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "size-8 rounded-full border border-black/10"
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>
                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                          "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                        )}
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 size-full stroke-2 text-gray-200"
                            >
                              <line
                                x1={0}
                                x2={100}
                                y1={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>

            {/* Description and Details */}
            <div className="py-10">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-md my-[30px]">

        <div className="flex space-x-4 border-b border-gray-200">
          <button
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'Description' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('Description')}
          >
            Description
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'Ratings' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('Ratings')}
          >
            Customer Ratings
          </button>
        </div>

        <div className="mt-6">
          {activeTab === 'Description' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Product Description</h2>
              <p className="mt-4 text-gray-600">This is a high-quality product designed to meet your needs.</p>
            </div>
          )}

          {activeTab === 'Ratings' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Customer Ratings</h2>
              <div className="mt-4 space-y-6">
                {customerRatings.map((rating) => (
                  <div key={rating.id} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{rating.name}</h3>
                      <p className="text-sm text-gray-500">{rating.date}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`h-5 w-5 ${index < rating.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.166c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.617 9.384c-.784-.57-.38-1.81.588-1.81h4.166a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-2 text-gray-600">{rating.comment}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Leave a Review</h3>
                <div className="flex space-x-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setNewRating(star)}
                      className={`h-6 w-6 ${star <= newRating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <textarea
                  className="w-full mt-2 p-2 border rounded-lg"
                  rows="3"
                  placeholder="Write your review..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button
                  onClick={handleSubmitRating}
                  className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg"
                >
                  Submit Review
                </button>
              </div>
            </div>
          )}
        </div>

      </div>


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
}
