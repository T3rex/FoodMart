import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_CLOUDINARY } from "../Config";
import Shimmer from "../Components/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { FETCH_MENU_URL_V2 } from "../Config";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const resId = useParams();
  const [resInfo, setResInfo] = useState();
  const [categories, setCategories] = useState([]);
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    getRestaurantMenu(resId);
  }, []);

  async function getRestaurantMenu(resId) {
    const data = await fetch(FETCH_MENU_URL_V2 + resId.id);
    const json = await data.json();
    const cat =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (section) => {
          return (
            section?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );
    setResInfo(json.data.cards[0].card.card.info);
    //console.log(json.data);
    setCategories(cat);
  }

  return (
    <div className="w-2/5 mx-auto flex justify-center items-center flex-col">
      <div className="flex justify-between w-full p-5 mt-10">
        <div>
          <p className="font-bold text-lg">{resInfo?.name}</p>
          <p className="font-extralight text-sm">
            {resInfo?.cuisines.join(", ")}
          </p>
          <p className="font-extralight text-sm">
            {resInfo?.areaName}, {resInfo?.sla?.lastMileTravelString}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 rounded-md h-full px-1 py-2">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="full"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="green"
              className="w-5 h-5 inline-block align-text-bottom mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <div className="font-extrabold text-green-900">
              {resInfo?.avgRatingString}
            </div>
          </div>
          <div className="font-extralight text-sm border-t-2">
            {resInfo?.totalRatingsString}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        {categories?.map((cat, index) => {
          return (
            <MenuCategory
              key={cat?.card?.card?.title}
              data={cat?.card?.card}
              showCards={index == showIndex}
              setIndex={() => setShowIndex(index)}
              setNoIndex={() => setShowIndex(null)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
