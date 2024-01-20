


import "../Footer/Footer.css"
import Email from "../../Image/Email.png"
import Tweet from "../../Image/Tweet.png"
import Insta from "../../Image/Insta.png"
import BankIcon from "../../Image/Bank Logo.png"

const Footer = () => {


  return (

    <>


      <div className="footer-box">

        <div >
          <h1 className="footer-text1"> Join our </h1>
          <h1 className="footer-text2"> Community </h1>
        </div>

        <div className="media-box">

          <div className="img-box">
            <img src={Email} alt="Email" className="media-img" />
          </div>

          <div className="img-box">
            <img src={Tweet} alt="Tweet" className="media-img" />
          </div>

          <div className="img-box">
            <img src={Insta} alt="Insta" className="media-img" />
          </div>

        </div>

      </div>



      <div className="color-box">

        <div>
          <img src={BankIcon} alt="Bank" />
        </div>

        <div>
          <h6>2023 All rights reserved</h6>
        </div>
      </div>
    </>
  )
}

export default Footer;