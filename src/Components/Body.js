import { useEffect, useState } from "react";
import RestrauntCard from "./RestaurantCard";
import Shim from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { FETCH_RES_URL, IMG_CDN_CLOUDINARY } from "../Config.js";
import Carousel from "./Carousel";

const Body = () => {
  const [allRestaurants, setAllRestraunts] = useState([]);
  const [filteredRestaurants, setFilteredRestraunts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [slider, setSlider] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RES_URL);
    const json = await data.json();
    console.log(json?.data);
    setData(json.data);
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setSlider(json.data.cards[0].card.card.imageGridCards.info);
    setSlider2(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    setAllRestraunts(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();
  if (!isOnline) {
    console.log("offline");
    return <h1>Offline, please check your internet connection</h1>;
  }

  return allRestaurants?.length == 0 ? (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex items-center m-4 ">
          <input
            className="border-2 border-black-900 p-1 rounded-sm"
            type="text"
            placeholder="Search Restaurant"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            data-testid="search-btn"
            className="bg-purple-500 text-white font-bold px-2 py-1 rounded ml-2"
            onClick={() => {
              const data = filterData(searchInput, allRestaurants);
              setFilteredRestraunts(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <Shim />
    </div>
  ) : (
    <div className="w-2/3 mx-auto  flex flex-col items-center">
      <div className="flex items-center m-4 ">
        <input
          className="border-2 border-black-900 p-1 rounded-sm"
          type="text"
          placeholder="Search Restaurant"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="bg-purple-500 text-white font-bold px-2 py-1 rounded ml-2"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="w-full bg-white flex flex-wrap">
        <Carousel
          data={slider}
          title={data.cards[0].card.card.id}
          id={data?.cards[0]?.card?.card?.id}
          imageLink={IMG_CDN_CLOUDINARY}
          type={data.cards[0].card.card.id}
        />
        <br />
        <br />
        <Carousel
          data={slider2}
          title={data.cards[1].card.card.id}
          id={data?.cards[1]?.card?.card?.id}
          imageLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"
          type={data.cards[1].card.card.id}
        />
        <div className="w-full m-4 border-b-2"></div>
        <Carousel
          data={
            data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          }
          title={data.cards[2].card.card.id}
          id={data?.cards[2]?.card?.card?.id}
          imageLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"
          type={data.cards[2].card.card.id}
        />
        <br />
        <br />
        <div className="w-full m-4 border-b-2"></div>

        {filteredRestaurants?.length === 0 ? (
          <h1>No restraunt with such filter</h1>
        ) : (
          filteredRestaurants?.map((res) => {
            return (
              <Link to={"/restaurant/" + res?.info?.id} key={res.info?.id}>
                <RestrauntCard {...res?.info} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
