import { useState ,useEffect} from "react"


export const useFetch = (apiPath ,queryTerm ="") => {
 const [data ,SetData] = useState([])
const url = `https://api.themoviedb.org/3/${apiPath}?api_key=bb604cf2738eca4dfdca2270a31cf563&query=${queryTerm}`
 useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    SetData(data.results);
  };
  fetchData();
}, [url]);
  return {data}
}
