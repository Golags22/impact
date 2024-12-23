

const Cardinals = () => {


  return (
    <div
      id="cardinals-section"
      className="relative flex flex-col min-h-screen sticky top-0"
    >
      

      {/* Content Section */}
      <div className="flex-1 ml-8 py-10 px-5">
        <header className="text-center py-5">
          <h1 className="text-4xl font-bold text-gray-800">CARDINALS</h1>
        </header>
        {/* First Section */}
<section className="cardinal-section relative bg-gray-100 py-10 px-5">
  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-[8px]">
    <div className="h-[auto] w-[20px] bg-blue-600 rounded "></div>
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
        IMPACT FOR EXPLOIT CONFERENCE
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700">
        The first quarter of the year is used for a conference tagged
        "IMPACT FOR EXPLOIT CONFERENCE." This is targeted towards the
        appreciation of our creator as well as training and empowerment of
        the youths in the society through sponsorship for various
        vocational trainings.
      </p>
    </div>
  </div>
</section>

{/* Second Section */}
<section className="cardinal-section relative bg-gray-200 py-10 px-5">
  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-[8px]">
    <div className="h-[auto] w-[20px] bg-purple-600 rounded "></div>
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-600 mb-4">
        CATCH THEM YOUNG (CTY) INITIATIVE
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700">
        This is a youth-based programme targeted towards students in higher institutions of learning through the organization of symposiums with resource persons from all works of life and provision of scholarship schemes via selection process.
      </p>
    </div>
  </div>
</section>

{/* Third Section */}
<section className="cardinal-section relative bg-gray-100 py-10 px-5">
  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-[8px]">
    <div className="h-[auto] w-[10px] bg-red-600 rounded "></div>
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600 mb-4">
        COMMUNITY AWARENESS PROGRAMME
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700">
        This is aimed at visiting indigenous communities and providing some basic amenities such as:
        <ul className="list-disc list-inside mt-4">
          <li>Food Stuffs</li>
          <li>Medical Check up</li>
          <li>Clothing</li>
          <li>Hair cuts</li>
          <li>Funds</li>
        </ul>
      </p>
    </div>
  </div>
</section>

{/* Fourth Section */}
<section className="cardinal-section relative bg-gray-200 py-10 px-5">
  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-[8px]">
    <div className="h-[auto] w-[20px] bg-green-600 rounded "></div>
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-600 mb-4">
        TRAINING
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700">
        This cardinal is targeted towards youths who are unemployed and involves the provision of training for youths who have the intention to work in the Oil and Gas industry, skill acquisition programmes.
      </p>
    </div>
  </div>
</section>


      </div>
    </div>
  );
};

export default Cardinals;
