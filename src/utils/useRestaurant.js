import { useEffect, useState } from "react";
import { FETCH_MENU_URL_V2 } from "../Config";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(FETCH_MENU_URL_V2 + resId);
    const json = await data.json();
    setRestaurant(json.data.cards[0].card.card.info);
  }

  return restaurant;
};

export default useRestaurant;
