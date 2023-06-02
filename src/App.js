import React, { useEffect, useState } from "react";
import Navbar from "./componets/Navbar";
import Routers from "./componets/Routers";
import Footer from "./componets/Footer";
import { Loading } from "./componets/Loading";
// import { Animate } from "./componets/main";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        {isLoading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div className=" bg-gray-100 dark:bg-[rgb(12,11,12)] dark:text-gray-200 min-h-screen">
              <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
              <Routers />
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
