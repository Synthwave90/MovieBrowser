import React from "react";
import { Link } from "react-router-dom";

class ErrorView extends React.Component {
    render () {
        return (
            <div className="box container-fluid ">
                <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg&ga=GA1.2.1653196401.1626480000" alt=""></img>
                <p style={{textAlign:"center"}}>Uh-Oh! this page doesn't exist, try again </p>
                <Link to="/">
                    <button className='btn btn-primary' type="button">
                        Go Back to Home
                    </button> 
                </Link>

            </div>
        )
    }
}
  

export default ErrorView