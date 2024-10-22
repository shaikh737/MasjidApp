import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Footer from "./footer.jsx";
import "./index.css";
import Loader from "./loader.jsx";

function Main() {
  const [loader, setLoader] = useState(true); // Initialize with true to show loader first

  useEffect(() => {
    // Simulate a 3-second loading time
    const timer = setTimeout(() => {
      setLoader(false); // Hide the loader after 3 seconds
    }, 2000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {loader ? (
        <Loader /> // Show the loader if loading
      ) : (
        <>
          <App /> {/* Show the main content after loading */}
          <Footer />
        </>
      )}
    </div>
  );
}

// Render the Main component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
