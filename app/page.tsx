"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import { Scrollbars } from "react-custom-scrollbars-2";
import HeroImg from "@/public/assets/hero-device.png";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import BrandLogo from "@/public/assets/brand-logo-full.png";

const AnimatedSection = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    }),
  };

  return (
    <motion.p
      ref={ref}
      className="text-2xl md:text-4xl font-semibold !leading-[50px] max-w-4xl mx-auto p-6 text-center"
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={variants}
          style={{ display: "inline-block", marginRight: "8px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default function Component() {
  const scrollbarsRef = useRef<Scrollbars>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { title: "Home", content: "Go Nexpe" },
    { title: "About", content: "Learn about our innovative payment solutions" },
    { title: "Portfolio", content: "Explore our successful implementations" },
    { title: "Contact", content: "Get in touch with our expert team" },
    { title: "Blog", content: "Stay updated with the latest in fintech" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollbarsRef.current) {
        const scrollPosition = scrollbarsRef.current.getScrollLeft();
        const pageWidth = scrollbarsRef.current.getClientWidth();
        const currentPage = Math.round(scrollPosition / pageWidth);
        setCurrentPage(currentPage);
      }
    };

    scrollbarsRef.current?.view.addEventListener("scroll", handleScroll);

    return () => {
      scrollbarsRef.current?.view.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (scrollbarsRef.current) {
      const scrollAmount = event.deltaY;
      scrollbarsRef.current.scrollLeft(
        scrollbarsRef.current.getScrollLeft() + scrollAmount
      );
    }
  };

  const scrollTo = (index: number) => {
    if (scrollbarsRef.current) {
      const targetPosition = index * scrollbarsRef.current.getClientWidth();
      const startPosition = scrollbarsRef.current.getScrollLeft();
      const distance = targetPosition - startPosition;
      const duration = 1000; // ms
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const easeInOutCubic =
          percentage < 0.5
            ? 4 * percentage * percentage * percentage
            : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

        scrollbarsRef.current?.scrollLeft(
          startPosition + distance * easeInOutCubic
        );

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: "#FDB665",
      width: "50px",
      height: "8px",
      borderRadius: "2px",
      marginTop: "-1px",
      cursor: "pointer",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const renderTrackHorizontal = ({ style, ...props }) => {
    const trackStyle = {
      height: "6px",
      bottom: "20px",
      left: "15%",
      right: "15%",
      borderRadius: "3px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    };
    return <div style={{ ...style, ...trackStyle }} {...props} />;
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden text-white">
      <motion.header
        className="flex justify-between items-center px-6 py-4 z-10 bg-transparent fixed top-0 left-0 right-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <Image
          src={BrandLogo}
          alt="NexPe App Screenshot"
          width={150}
          height={150}
        />
        <nav className="hidden md:flex space-x-6">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`${
                currentPage === index
                  ? "text-[#FDB665] font-bold  relative after:content-[''] after:absolute after:top-[-10px] after:left-0 after:w-full after:h-[8px] after:bg-[#FDB665] after:rounded-t-lg"
                  : "text-white"
              } hover:text-[#FDB665] transition-colors text-lg font-semibold antialiased tracking-wider`}
            >
              {page.title}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <span className="text-md">
            Email: <span className="text-[#FDB665]">support@gonexpe.com</span>
          </span>
        </div>
      </motion.header>

      <div className="flex-1 overflow-hidden">
        <Scrollbars
          ref={scrollbarsRef}
          style={{ width: "100%", height: "100%" }}
          renderThumbHorizontal={renderThumb}
          renderTrackHorizontal={renderTrackHorizontal}
          thumbSize={120}
          onWheel={handleWheel}
          universal={true}
          autoHide={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="flex">
            {pages.map((page, index) => (
              <section
                key={index}
                className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center p-10"
              >
                {index === 0 ? (
                  <div className="flex items-center justify-between w-full max-w-4xl p-5 ">
                    <AnimatedSection index={0}>
                      <Image
                        src={HeroImg}
                        alt="NexPe App Screenshot"
                        width={350}
                        height={600}
                        className="object-contain"
                      />
                    </AnimatedSection>
                    <AnimatedSection index={1}>
                      <div className="w-full md:w-2/3 space-y-8">
                        <h1 className="text-5xl md:text-8xl !leading-[100px] tracking-widest font-bold custom-shadow">
                          Go
                          <span className="text-[#FDB665] custom-yellow-shadow">
                            .
                          </span>
                          <br />
                          Nexpe
                        </h1>
                        <p className="text-xl">Pay as you go, Next</p>
                        <div className="flex space-x-4 text-xl font-semibold tracking-wide">
                          <motion.button
                            className="px-8 py-3 bg-gray-800 rounded-full flex items-center space-x-2.5"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaGooglePlay size={16} color="#FDB665" />
                            <span>Playstore</span>
                          </motion.button>
                          <motion.button
                            className="px-8 py-3 bg-gray-800 rounded-full flex items-center space-x-2.5"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaApple size={18} color="#FDB665" />
                            <span>Appstore</span>
                          </motion.button>
                        </div>
                      </div>
                    </AnimatedSection>
                    <motion.button
                      className="absolute right-32 bg-[#FDB665] rounded-full p-4"
                      onClick={() => scrollTo(1)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      whileHover="hover" // Define a custom hover state
                    >
                      <motion.div
                        variants={{
                          hover: { x: 10 }, // Move the arrow out on button hover
                          initial: { x: 0 }, // Default position when not hovered
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        }} // Smooth out the movement
                      >
                        <FaLongArrowAltRight size={24} className="text-white" />
                      </motion.div>
                    </motion.button>
                  </div>
                ) : index === 1 ? (
                  <AnimatedSection index={0}>
                    <AnimatedText text="At NexPe, we simplify and secure payment processing for businesses. Our innovative solutions cater to all business sizes, delivering fast, reliable, and user-friendly payment experiences. Join us in redefining digital payment solutions." />
                  </AnimatedSection>
                ) : (
                  <AnimatedSection index={0}>
                    <div className="text-center space-y-4">
                      <h2 className="text-4xl font-bold mb-4">{page.title}</h2>
                      <p className="text-xl max-w-2xl mx-auto">
                        {page.content}
                      </p>
                    </div>
                  </AnimatedSection>
                )}
              </section>
            ))}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
}
