import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found | Love Kumar</title>

        <meta
          name="description"
          content="The page you are looking for does not exist. Return back to Love Kumar's portfolio and explore projects, contact information, and development work."
        />

        <meta name="robots" content="noindex" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="404 | Page Not Found"
        />

        <meta
          property="og:description"
          content="Oops! The page you are trying to access does not exist."
        />

        <meta
          property="og:image"
          content="https://lovekumar.vercel.app/images/image.png"
        />

        <meta
          property="og:url"
          content="https://lovekumar.vercel.app/404"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section className="min-h-screen px-6 py-24 flex items-center justify-center">
        <div className="max-w-2xl w-full  p-8 sm:p-12 text-center">

          {/* IMAGE */}
          <img
            src="/images/giphy.gif"
            alt="404 Not Found"
            className="w-60 sm:w-80 mx-auto mb-2 object-contain"
          />

       

          <h2 className="text-2xl sm:text-4xl font-bold font-mono mb-6">
            PAGE NOT FOUND
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 max-w-lg mx-auto leading-relaxed mb-10">
            The page you are looking for might have been removed,
            renamed, or is temporarily unavailable.
          </p>

          {/* BUTTON */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400 border-2 border-black font-bold font-mono shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] transition-all"
          >
            <FaArrowLeft />
            BACK TO HOME
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;