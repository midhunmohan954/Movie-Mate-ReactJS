import { Link } from "react-router-dom";
import noImage from "../assets/images/0_QOZm9X5er1Y0r5-t.jpg"
export const Card = ({ data }) => {
  const { id, original_title ,poster_path,overview} = data;

  return (
    <div>
      <div className="max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/movie/${id}`}>
          <img className="rounded-t-lg" src={poster_path ?`https://image.tmdb.org/t/p/w500/${poster_path}`:noImage} alt=""></img>
        </Link>
        <div className="p-5">
          <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {original_title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};
