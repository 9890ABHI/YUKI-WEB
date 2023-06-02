import React, { useState } from "react";
// import { useResultContext } from "../context/ResultContextProvider";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
import axios from "axios";

export const Results = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [nodata, setNodata] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    setIsLoading(true);
    axios
      .get(`http://139.59.61.87:5000/search?q=${inputValue}`)
      .then((response) => {
        setSearchResult(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  return (
    <>
      <div className="flex">
        <input
          type="text"
          style={{
            width: "100%",
            height: 50,
            borderRadius: 20,
            padding: "0px 20px",
            border: "1px solid gray",
          }}
          placeholder="Search "
          className="dark:text-black"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="w-[150px] h-[50px] bg-slate-400 dark:bg-blue-500 dark:text-black  rounded-2xl ml-2"
        >
          Search
        </button>
      </div>
      <ul>
        {isLoading ? (
          <>
            <Loading />
          </>
        ) : undefined}

        {/* {searchResult === [null] ? (
          <>
            <h2 className="text-black">no data</h2>
          </>
        ) : (
          <>
            <h2 className="text-black">some data</h2>
          </>
        )} */}

        {searchResult.map((data, id) => (
          <>
            <>
              <Link to="/details" state={data}>
                <div
                  key={id}
                  className=" h-[200px] bg-[rgba(99,93,93,0.12)] dark:bg-[rgba(252,252,252,0.07)] dark:text-white  rounded-xl px-10 py-5 my-5 "
                >
                  <div className="flex ">
                    <h3>{id}</h3>
                    <div className="ml-10">
                      <h3>{data.title}</h3>
                      <h5 className="text-blue-400">{data.effective_url}</h5>
                      <h5 className="text-black dark:text-white">{data.url}</h5>
                      <h5 className="text-black dark:text-white">
                        {data.url_hash}
                      </h5>
                    </div>
                  </div>

                  <div className="mt-10">
                    Keywords include in :{" "}
                    {data.keywords.replaceAll("|", " , ").toUpperCase()}
                  </div>
                </div>
              </Link>
            </>
          </>
        ))}
      </ul>
    </>
  );
  // return (
  //   <>
  //     <div className="flex flex-col justify-between space-y-6 sm:px-56">
  //       {data?.map((data, id) => (
  //         <>
  //           <Link to="/details" state={data}>
  //             <div className=" h-[200px] bg-gray-400  rounded-xl px-10 py-2 ">
  //               <h3>{data.title}</h3>
  //               <h5 className="text-blue-100">{data.effective_url}</h5>
  //               <h5 className="text-gray-700">{data.url}</h5>
  //               <h5 className="text-gray-700">{data.url_hash}</h5>
  //               <div className="mt-10">
  //                 Keywords include in : {data.keywords}
  //               </div>
  //             </div>
  //           </Link>
  //         </>
  //       ))}
  //     </div>
  //   </>
  // );
};
