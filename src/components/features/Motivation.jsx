import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import motivateVariants from "../../animations/motivateAnimate";
const [motivate] = motivateVariants;

//$  Default quote if the data is not fetched or sessionStorage is empty
const defaultQuote = {
  text: "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
  author: "William White",
};

const Motivation = () => {
  const [data, setData] = useState(defaultQuote);
  const url = "https://type.fit/api/quotes";

  useEffect(() => {
    //$  If there is a saved quote in sessionStorage, set the data to the saved quote
    const savedQuote = sessionStorage.getItem("quote");

    //$ if not, fetch the data from the url and set the data to the fetched quote
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const quotes = await resp.json();
        const quote = quotes[Math.floor(Math.random() * quotes.length)];

        //$ Remove the type.fit text from the quote author object
        const updatedAuthor =
          ((quote.author = quote.author.replace(", type.fit", "")), quote);

        //$ Add the updatedAuthor to the quote object
        quote.author = updatedAuthor.author;

        //$ Save the quote to sessionStorage
        sessionStorage.setItem("quote", JSON.stringify(quote));
        setData(quote);
      } catch (error) {
        console.log(error);
      }
    };

    const handleBeforeUnload = () => {
      if (!savedQuote) {
        fetchData();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    if (savedQuote) {
      setData(JSON.parse(savedQuote));
    } else {
      fetchData();
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [data.text]);

  return (
    <motion.div
      className="absolute bottom-[2%] w-full transform -translate-x-[50%] h-[3rem] text-[0.7rem] flex items-center justify-center"
      variants={motivate}
      initial="initialState"
      animate="animateState"
    >
      <div className="flex flex-col gap-[0.5rem] justify-center items-center ">
        <h2 className="text-fontLightTheme dark:text-white text-[0.8rem] md:text-[1.1rem]">
          {data.text}
        </h2>
        <p className="text-fontLightTheme dark:text-white text-[0.6rem] md:text-[0.9rem]">
          {data.author}
        </p>
      </div>
    </motion.div>
  );
};

export default Motivation;

//   useEffect(() => {
//     const savedQuote = localStorage.getItem("quote");
//     if (savedQuote) {
//       setData(JSON.parse(savedQuote));
//     } else {
//       const fetchData = async () => {
//         try {
//           const resp = await fetch("https://type.fit/api/quotes");
//           const quotes = await resp.json();
//           const quote = quotes[Math.floor(Math.random() * quotes.length)];
//           setData(quote);
//           localStorage.setItem("quote", JSON.stringify(quote));
//         } catch (error) {
//           console.log(error);
//         }
//       };

//       fetchData();
//     }
//   }, []);

//   // Rest of your component...
// };
