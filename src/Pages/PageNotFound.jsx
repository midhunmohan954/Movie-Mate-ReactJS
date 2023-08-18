import { Link } from "react-router-dom";
import noImage from "../assets/images/0_QOZm9X5er1Y0r5-t.jpg"
export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className=" flex flex-col items-center my-4">
          <p className="text-7xl font-bold text-gray-700  my-10 dark:text-white">
            404 ,opps!
          </p>
          <img
            className="rounded"
            src={noImage}
            alt="404 Page Not Found"
            srcset=""
          />
        </div>
       <div className="flex justify-center my-4">
       <Link to="/">
          <button className="rounded-lg font-medium text-white px-5 py-2.5 w-64 m-2 text-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"> Back to HOME</button>
        </Link>
       </div>
      </section>
    </main>
  );
};
