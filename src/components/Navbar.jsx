import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-success"
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Burger🔥Hot
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <NavLink to="Home" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
              <form role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                <>
                  <li className="nav-item">
                    <NavLink to="SignUp" className="nav-link active">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="SignIn" className="nav-link active">
                      Sign In
                    </NavLink>
                  </li>
                </>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
