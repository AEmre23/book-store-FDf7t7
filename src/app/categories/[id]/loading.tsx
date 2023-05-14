import React from "react";

const Loading = () => {
  return (
    <div className="px-16 pb-16 w-full flex items-center justify-center">
      <div className="flex flex-col gap-8 max-w-[1350px]">
        <div className="w-56 h-12 rounded-md bg-slate-100 animate-pulse" />
        <div className="grid grid-cols-4 gap-5 items-center justify-center">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="px-4 py-4 w-[300px] h-[380px] flex justify-center rounded-md bg-slate-100 animate-pulse"
            >
              <div className="bg-slate-200 w-[200px] h-[300px] rounded-md animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
