import MenuItemCard from "./MenuItemCard";

function MenuCategory(props) {
  function handleClick() {
    if (props.showCards) {
      props.setNoIndex();
    } else {
      props.setIndex();
    }
  }

  return (
    <div className="w-full">
      <div className="my-3 bg-gray-100 shadow-lg p-4 ease-in-out transition-all	">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {props.data.title} ({props.data.itemCards.length})
          </span>
          {props.showCards ? (
            <span>
              {" "}
              <img
                className="w-5 rotate-180"
                src="https://w7.pngwing.com/pngs/175/947/png-transparent-arrow-computer-icons-down-arrow-angle-black-desktop-wallpaper-thumbnail.png"
              />
            </span>
          ) : (
            <span>
              <img
                className="w-5"
                src="https://w7.pngwing.com/pngs/175/947/png-transparent-arrow-computer-icons-down-arrow-angle-black-desktop-wallpaper-thumbnail.png"
              />
            </span>
          )}
        </div>

        {props.showCards ? (
          props.data.itemCards.map((item) => {
            return (
              <MenuItemCard key={item.card.info.id} item={item.card.info} />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default MenuCategory;
