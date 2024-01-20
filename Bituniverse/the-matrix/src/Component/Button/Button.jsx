
import "../Button/Button.css"

const Button = ({name}) =>{

    return(
        <>        

       
        <div className="btn-box">
                    
                <div >
                <button className="btn-name">{name}</button>

                {/* <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M10.5 8.38843L14.5 12.3884L10.5 16.3884" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>
                   </div>  */}
                
                </div>
                     
        
          
                </div>
           
        </>
    )
}

export default Button;