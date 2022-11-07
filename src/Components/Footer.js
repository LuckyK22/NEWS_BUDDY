import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class Footer extends Component {
    render() {
        return (
            <>
                <nav className="d-flex justify-content-center align-items-baseline bg-dark text-light text-center navbar">
                
                     <p> A Product By &nbsp;</p>  <Link className="nav-link product" to="/">Daddu's Production</Link><p className="copy"> 	&nbsp; &#169; 2022</p>	
                 
                </nav>

            </>
        )
    }
}

export default Footer