import React from "react";
import { Link, useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  // const url = window.URL.createObjectURL(new Blob([data]));
  // const link = document.createElement("a");
  // link.href = url;
  // link.setAttribute("download", "file.pdf"); //or any other extension
  // document.body.appendChild(link);
  // link.click();
  const newKeyword = data.keywords.replaceAll("|", " , ");
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="h-[50vh] bg-[rgba(107,102,102,0.14)]  dark:bg-[rgba(252,252,252,0.07)] dark:text-black rounded-xl px-10 py-2 gap-10 ">
          <h3>{data.title}</h3>
          <h5 className="dark:text-blue-500 mt-2">
            <b>Effective Domain :</b> {data.effective_url}
          </h5>
          <h5 className="dark:text-white mt-2">
            <b>Url : </b>
            {data.url}
          </h5>
          <h5 className="dark:text-white mt-2">
            <b>Hash : </b>
            {data.url_hash}
          </h5>
          <div className="mt-[10vh] dark:text-white">
            {" "}
            <b>Keywords include :</b> {newKeyword.toUpperCase()}
          </div>
          <div className="mt-0 dark:text-white">
            <b>Added on : </b>
            {data.added_on}
          </div>
        </div>
        {/* <Link to={"/files/file.pdf"} target={data} download>
          <button className="w-[150px] h-[50px] bg-purple-500 rounded-2xl mt-10">
            Download
          </button>
        </Link> */}
      </div>
    </>
  );
};

export default Details;
