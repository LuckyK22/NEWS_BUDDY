// import PropTypes from 'prop-types'
import React from "react";
import { Link } from "react-router-dom";


const NavBar =() => {
  //   static propTypes = {}


    return (
      <>
        <nav className="navbar navbar-expand-lg bg-danger">
          <div className="container-fluid">
            <Link className="navbar-brand buddy" to="/">
              NEWS-Buddy
            </Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
            </button> */}
            <div  className="collapse navbar-collapse"  id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link  className="nav-link active text-light active"  aria-current="page"  to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/business">
                    Business
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/entertainment">
                    Entertainment
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/health">
                    Health
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/science">
                    Science
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/sports">
                    Sports
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/technology">
                    Technology
                  </Link>
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }








// -------------------------------------------------> Class Based <------------------------------------------
// export class NavBar extends Component {
//   //   static propTypes = {}

//   render() {
//     return (
//       <>
//         <nav className="navbar navbar-expand-lg bg-danger">
//           <div className="container-fluid">
//             <Link className="navbar-brand buddy" to="/">
//               NEWS-Buddy
//             </Link>
//             {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
//             <span className="navbar-toggler-icon"></span>
//             </button> */}
//             <div  className="collapse navbar-collapse"  id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link  className="nav-link active text-light active"  aria-current="page"  to="/">
//                     Home
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link className="nav-link text-light" to="/business">
//                     Business
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link className="nav-link text-light" to="/entertainment">
//                     Entertainment
//                   </Link>

//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-light" to="/health">
//                     Health
//                   </Link>

//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-light" to="/science">
//                     Science
//                   </Link>

//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-light" to="/sports">
//                     Sports
//                   </Link>

//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-light" to="/technology">
//                     Technology
//                   </Link>

//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   }
// }

export default NavBar;
