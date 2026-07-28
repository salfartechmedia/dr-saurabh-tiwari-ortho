import { useEffect } from "react";

const GoogleReviews = () => {

  useEffect(() => {

    // Elfsight script load
    const script = document.createElement("script");

    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;

    document.body.appendChild(script);


    return () => {
      document.body.removeChild(script);
    };

  }, []);


  return (
    <section className="w-full overflow-hidden py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="text-green-500 uppercase tracking-[5px] font-semibold">
            Patient Reviews
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-3">
            What Our Patients Say
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Read genuine feedback and experiences shared by our patients.
          </p>

        </div>


        {/* Google Review Widget */}

        <div
          className="
          w-full
          max-w-full
          overflow-hidden
          "
        >

          <div
            className="elfsight-app-ddb813d5-5c55-4316-ab25-635783e96df6" w-full max-w-full data-elfsight-app-lazy
          ></div>

        </div>


      </div>

    </section>
  );
};


export default GoogleReviews;