import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <div className="h-10 w-10 border-4 border-gray-200 border-t-[#2f6c5f] rounded-full animate-spin" />
        <p className="text-sm text-gray-500 tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
