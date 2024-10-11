import { IMG_CDN_CLOUDINARY } from "../Config";

const RestrauntCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  costForTwo,
  sla,
}) => {
  return (
    <div className="w-56 m-3 hover:border border-black-600 ease-in-out transition-all p-4 hover:shadow-lg hover:scale-95">
      <img
        className="shadow-lg"
        src={IMG_CDN_CLOUDINARY + cloudinaryImageId}
        alt="Food Image"
      />
      <h2 className="font-bold text-lg">{name}</h2>
      <h3 className="truncate">{cuisines.join(", ")}</h3>
      <hr className="my-1 " />
      <div className="flex justify-between mt-2">
        <div className="text-xs bg-green-400 px-1.5 py-0 pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="full"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 inline-block align-text-bottom mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <span className="align-top">{avgRating}</span>
        </div>
        <p className="text-xs inline-block p-1">{sla.deliveryTime} MINS</p>
        <p className="text-xs inline-block p-1">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestrauntCard;
