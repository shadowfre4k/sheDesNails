import "./Details.css";

const Details = () => {
  return (
    <>
      <div className="detailsContainer">
        <div className="details">
          <p className="location">Location</p>
          <p className="address">
            {`7565 Mission Gorge Road (Inside Sugar Plum Skincare)
            San Diego, CA 92120`}
          </p>
          <p className="phoneNumber"> (858)342-8825 </p>
          <p className="email"> shedesnails@gmail.com </p>
          <p className="directions"> Get directions </p>
        </div>
        <div className="details">map place holder</div>
      </div>
    </>
  );
};

export default Details;
