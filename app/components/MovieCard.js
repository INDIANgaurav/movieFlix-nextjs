import Link from "next/link";
import React from "react";
import styles from "../styles/common.module.css"
const MovieCard = ({ Poster, Title, year, id }) => {
  return (
    <div className="sm:w-[18%] w-[95%] relative rounded-md text-black bg-white shadow-sm overflow-hidden m-auto">
      <div className="flex flex-col gap-1">
        {/* poster */}
        <div className="w-full overflow-hidden object-contain">
          <img src={Poster} alt="poster" className="w-full h-full" />
        </div>

        {/* Title and year */}
        <div className="flex flex-col gap-1 p-1">
          <h2 className="font-semibold">
            Title : <span className="font-normal">{Title}</span>
          </h2>
          <p className="font-semibold">
            year : <span className="font-normal">{year}</span>
          </p>
        </div>
      </div>
      <button className="my-3 relative left-[50%] translate-x-[-50%]">
        <Link
          href={`movies/${id}`}
          className="bg-red-600 hover:bg-red-500 hover:font-bold transition-all duration-200 text-sm py-1 px-2 rounded-md text-white font-semibold"
        >
          Know More
        </Link>
      </button>
    </div>
  );
};

export default MovieCard;