import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="shrinkContainer">
        <div className="navContainer">
          <ul className="linkContainer">
            <p className="linkItem">About</p>
            <p className="linkItem">Policies</p>
            <p className="linkItem">Book</p>
          </ul>
          <div className="brandContainer">She Des Nails</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
