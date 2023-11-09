import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="bigContainer">
        <div className="shrinkContainer">
          <div className="navContainer">
            <div className="linkContainer">
              <p className="linkItem">About</p>
              <p className="linkItem">Policies</p>
              <p className="linkItem">Book</p>
            </div>
            <div className="brandContainer">She Des Nails</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
