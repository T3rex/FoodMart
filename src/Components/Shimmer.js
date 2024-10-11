import { Image, Shimmer } from "react-shimmer";

const Shim = () => {
  return (
    <div data-testid="shimmer" className="flex flex-wrap w-2/3 mx-auto mt-10">
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div
            className="rounded-md p-4 max-w-sm w-56 mx-auto mb-6"
            key={index}
          >
            <div className="animate-pulse flex flex-col justify-center items-center ">
              <div className=" bg-slate-200 w-40 h-32 block"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 w-40 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shim;
