import React from "react";
import { Puff } from "react-loader-spinner";
export const Loading = () => {
  return (
    <>
      <div className="flex justify-center item center mt-10">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#4fa9"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};
