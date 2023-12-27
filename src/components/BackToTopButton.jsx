"use client"
import React, { useState, useEffect } from 'react';
import { FaHandPointUp } from "react-icons/fa6";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      } fixed bottom-4 right-4 text-2xl bg-pink-500 text-white px-4 py-4 rounded-full transition-opacity duration-300 ease-in-out`}
      onClick={scrollToTop}
    >
     <FaHandPointUp />
    </button>
  );
};

export default BackToTopButton;
