
import { Card } from "../Components";
import { useFetch } from "../Hooks/useFetch";
import { useEffect } from "react";
export const MovieList = ({apiPath,title}) => {
const{data:movies} = useFetch(apiPath) 
useEffect(()=>{
  document.title=`${title}/MovieMate`
  })
  

  return (
    <main>
      <section className="max-w-7xl flex  mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly ">
          {movies?.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </section>
    </main>
  );
};
