
import "../Home/Home.css"
import Bank from "../../Image/Bank.png"

const Home = () => {


    return (
        <>

            <div className="main">

                <div>
                    <h1 className="text-1">Your Gateway</h1>
                </div>

                <div className="text2-box">
                    <h1 className="text-2">To</h1>
                </div>

                <div className="bitcoin-text">
                    <h1 className="text-3">DEfi On</h1>
                    <h1 className="text-4">Bitcoin</h1>
                </div>

                <div className="image-container">
                    <img src={Bank} alt="bank"  className="bank-image"/>
                </div>
                   
                <div className="decs-box">
                     
                     <h6 className="description">
                            Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse id velit proin eleifend id mauris. 
                            Amet sem in id eget nunc quam lacus tellus augue.
                      </h6>

            </div>
                   
            </div>
            
                           
                         

                  
        </>
    )
}

export default Home;

