import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Importing your local assets
import video1 from '../assets/sruthy (1).mp4';
import video2 from '../assets/sruthy (2).mp4';
import video3 from '../assets/sruthy (3).mp4';
import video4 from '../assets/sruthy (4).mp4';
import img1 from '../assets/sruthy (1).jpg';
import img2 from '../assets/sruthy (2).jpg';
import img3 from '../assets/sruthy (3).jpeg';
import img4 from '../assets/sruthy (4).jpeg';
import img5 from '../assets/sruthy (5).jpeg';
import img6 from '../assets/sruthy (6).jpeg';
import img7 from '../assets/sruthy (7).jpeg';
import img8 from '../assets/sruthy (8).jpeg';
import img9 from '../assets/sruthy (9).jpeg';
import img10 from '../assets/sruthy (10).jpeg';

const PhotoGallery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state || {};

  const galleryItems = [
    { type: 'video', src: video1, alt: 'Sruthi Video 1' },
    
    { type: 'video', src: video3, alt: 'Sruthi Video 3' },
   
    { type: 'image', src: img1, alt: 'Sruthi Image 1' },
    { type: 'image', src: img2, alt: 'Sruthi Image 2' },
    { type: 'video', src: video2, alt: 'Sruthi Video 2' },
    { type: 'image', src: img3, alt: 'Sruthi Image 3' },
    { type: 'image', src: img4, alt: 'Sruthi Image 4' },
    { type: 'image', src: img5, alt: 'Sruthi Image 5' },
    { type: 'image', src: img6, alt: 'Sruthi Image 6' },
    { type: 'image', src: img7, alt: 'Sruthi Image 7' },
    { type: 'video', src: video4, alt: 'Sruthi Video 4' },
    { type: 'image', src: img8, alt: 'Sruthi Image 8' },
    { type: 'image', src: img9, alt: 'Sruthi Image 9' },
    { type: 'image', src: img10, alt: 'Sruthi Image 10' },
  ];

  const itemsPerPage = 4; // Change to 4 items per page
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomItem, setZoomItem] = useState(null);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleGoToCake = () => {
    navigate('/cake');
  };

  const handleZoom = (item) => {
    setZoomItem(item);
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
    setZoomItem(null);
  };

  // Get the items to display for the current page
  const paginatedItems = galleryItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="flex flex-col items-center justify-center bg-yellow-200 h-screen">
      <h1 className="text-3xl font-bold mb-8">
        {name ? `Here are some memories, ${name}!` : 'Here are some memories!'}
      </h1>

      <div className="relative w-full max-w-xl overflow-x-auto">
        <button
          onClick={handlePrev}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 border-black text-black p-2 rounded-full ${
            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentPage === 0}
        >
          &#x276E; {/* Left arrow */}
        </button>

        <div className="flex justify-center items-center">
          {paginatedItems.map((item, index) => (
            <div
              key={index}
              className="mx-2 cursor-pointer"
              onClick={() => handleZoom(item)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-96 h-40 object-cover rounded-lg"
                  style={{ width: '500px', height: '250px', objectFit: 'cover' }}
                />
              ) : (
                <video
                  src={item.src}
                  className="w-96 h-40 object-cover rounded-lg"
                  controls
                  style={{ width: '500px', height: '250px', objectFit: 'cover' }}
                />
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 border-black text-black p-2 rounded-full ${
            currentPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentPage >= totalPages - 1}
        >
          &#x276F; {/* Right arrow */}
        </button>
      </div>

      <button
        onClick={handleGoToCake}
        className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg mt-8"
      >
        Go to Surprise
      </button>

      {/* Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-4/5 h-4/5 max-w-3xl max-h-3xl">
            {zoomItem.type === 'image' ? (
              <img
                src={zoomItem.src}
                alt={zoomItem.alt}
                className="max-w-full max-h-full rounded-lg"
              />
            ) : (
              <video
                src={zoomItem.src}
                className="max-w-full max-h-full rounded-lg"
                controls
              />
            )}
            <button
              onClick={handleCloseZoom}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times; {/* Close icon */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
