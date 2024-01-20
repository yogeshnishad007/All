
import "../Navbar/Navbar.css"
import Logo from "../../Image/Logo.jpg"

const Navbar = () => {
    return (
      
      <nav className="navbar">
        <div className="left">
          <img src={Logo} alt="Logo" className="logo" />
         
            <span className="name1">BITVERSE</span>
             <span className="name2">FINANCE</span>
        </div>
        <div className="middle">
              <div>
                <h6 className="about">About</h6>
              </div>
              <div>
                <h6 className="our">Our Products</h6>
              </div>
              <div>
                <h6>Token Utility</h6>
              </div>

              <div>
                <h6>Roadmap</h6>
              </div>
        </div>

        <div >
          <button className="right">Connect Wallet</button>
        
        </div>
      </nav>
 
    );
  };
  
  export default Navbar;