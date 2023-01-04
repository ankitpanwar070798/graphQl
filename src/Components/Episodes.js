import { useLazyQuery } from "@apollo/client";
import { GET_USER_DATA } from "../Graphql/queries";
import './EpisodesStyle.css';
import { useNavigate } from "react-router-dom";

const Episodes = () => {
  const Navigate = useNavigate();

  const [loadGreeting, { called, loading, data }] = useLazyQuery(GET_USER_DATA);

  if (called && loading) return <p>Loading ...</p>;

  if (!called) {
    return loadGreeting();
  }

  const value = data.episodes.results;

  console.log(value);

  const btnNav = (ele) => {
    console.log(ele, "element")
    Navigate(`/epiNav/${ele.id}`)
  }

  return (
    <>
      {value.map((element, index) => (
        <div key={index} className="list">
          <h2><span>Id-</span>{element.id}</h2>
          <h2><span>Episodes-</span>{element.episode}</h2>
          <h2><span>Release Date-</span>{element.air_date}</h2>
          <h2><span>Episode Names-</span>{element.name}</h2>
          <button className="More" onClick={() => btnNav(element)} >READ MORE</button>
        </div>
      ))}
    </>
  );
};
export default Episodes;  
