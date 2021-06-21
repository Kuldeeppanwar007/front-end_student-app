import React from "react";
import logo from "../../images/logo.png"
// import './Navbar.css'


const Navbar = () => {
  return (
    <>

      {/* <nav className=" navbar navbar-expand-lg navbar-dark">
          <a className=" navbar-brand" href="#"> 
          <img src={logo1} style={{width:90, marginTop: -10}} />
          </a>
          <ul>
                <li>
                    <Link to='/Registration'>Registration</Link>
                </li>
                <li>
                    <Link to='/Login'>Login</Link>
                </li>
            </ul>
        
      </nav> */}
      <nav className=" navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">

          <a className=" navbar-brand"><img src={logo} alt="..." ></img></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Registration">register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/Login">login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/DocumentUpload">upload document</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/Logout">Logout</a>
              </li>


            </ul>


          </div>

        </div>
      </nav>



    </>
  );
};
export default Navbar;
