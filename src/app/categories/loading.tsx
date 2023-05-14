import React from "react";

const Loading = () => {
  return (
    <div className="px-16 pb-16 flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center max-w-[1350px]">
        <div className="w-[1320px] h-[400px] rounded-md bg-slate-100 animate-pulse" />
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col gap-4 w-full">
            <div className="bg-slate-100 rounded-md w-44 h-8 animate-pulse" />
            <div className="flex gap-3 w-full">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index + 3}
                  className="bg-slate-100 rounded-md w-full h-44 animate-pulse"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
