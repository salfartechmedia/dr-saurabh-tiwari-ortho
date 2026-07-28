import { useEffect } from "react";

const InstagramFeed = () => {

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
    <section className="w-full overflow-hidden py-16 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="text-green-500 uppercase tracking-[5px] font-semibold">
            Follow Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-3">
            Instagram Feed
          </h2>

        </div>


        {/* Instagram Widget */}

        <div
          className="
          w-full
          max-w-full
          overflow-hidden
          "
        >

          <div
            className="elfsight-app-1cfb2e0f-7a1e-459f-966b-63ce648d3d28" w-full max-w-full data-elfsight-app-lazy
          ></div>

        </div>


      </div>

    </section>
  );
};


export default InstagramFeed;