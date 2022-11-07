import React from 'react'
import loading from './loading.svg'




const Spinner =() => {

      return (
              <>
          <div className="text-center">
              <img className="img" src={loading} alt="Loading" /> 

              </div>
         

              </>

  )
}



// ---------------------------------------------> CLass Based <------------------------------------------
// export class Spinner extends Component {
//     render() {
//         return (
//                 <>
//             <div className="text-center">
//                 <img className="img" src={loading} alt="Loading" /> 

//                 </div>
           

//                 </>

//     )
//   }
// }
export default Spinner
