import Navbar from "./Navbar";



const HeroSection = () => {
    return (
      <div className="relative w-full h-screen">
         <Navbar />
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/intro.mp4" // Replace with your video path
          autoPlay
          loop
          muted
        ></video>
  
        {/* Overlay for text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
        {/* Content over the video */}
        <div className=" absolute top-[100px] left-0 w-full h-full flex justify-center items-center text-white p-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Impact for Success Foundation</h1>
            <p className="text-lg mb-6">
              We are committed to making a lasting impact through our community-driven initiatives. Join us today to make a difference.
            </p>
            <div className="flex space-x-4">
            <a
              href="#joinus"
              className="px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg hover:bg-green-700 transition"
            >
              Join Us
            </a>
            <a
              href="/donate"
              className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition"
            >
              Donate Now
            </a>
           
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  