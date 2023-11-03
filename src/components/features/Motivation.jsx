import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import motivateVariants from "../../animations/motivateAnimate";
const [motivate] = motivateVariants;

const defaultQuote = {
  text: "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
  author: "William White",
};

const Motivation = () => {
  const [data, setData] = useState(defaultQuote);
  const { ref, inView } = useInView({
    /* Optional options */
    // threshold: 0,
  });

  const url = "https://type.fit/api/quotes";
  const fetchData = useCallback(async (url) => {
    try {
      const resp = await fetch(url);
      const quotes = await resp.json();
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      setData(quote);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData(url);
  }, [fetchData]);
  // h-12 text-sm flex items-center justify-center
  return (
    <motion.div
      ref={ref}
      className="absolute bottom-[2%] w-full transform -translate-x-[50%] h-[3rem] text-[0.7rem] flex items-center justify-center"
      variants={motivate}
      initial="initialState"
      animate="animateState"
    >
      {inView ? (
        <div
          ref={ref}
          className="flex flex-col gap-[0.5rem] justify-center items-center "
        >
          <h2 className="text-fontLightTheme dark:text-white text-[0.8rem] md:text-[1.1rem]">
            {data.text}
          </h2>
          <p className="text-fontLightTheme dark:text-white text-[0.6rem] md:text-[0.9rem]">
            {data.author}
          </p>
        </div>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default Motivation;
