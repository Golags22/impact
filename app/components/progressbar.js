// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const ProgressBar = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   // Function to calculate scroll progress
//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const progress = (scrollTop / scrollHeight) * 100;
//     setScrollProgress(progress);
//   };

//   // Adding event listener for scroll
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-full h-2 bg-transparent"
//       initial={{ width: "0%" }}
//       animate={{ width: `${scrollProgress}%` }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//       }}
//     >
//       <motion.div className="h-full bg-blue-600" />
//     </motion.div>
//   );
// };

// export default ProgressBar;
