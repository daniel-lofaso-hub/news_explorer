import "./Preloader.css";

function Preloader() {
  return (
    <div className="circle-preloader">
      <div className="circle-preloader__animation"></div>
      <h2 className="circle-preloader__text">Searching for news...</h2>
    </div>
  );
}

export default Preloader;
