import React from 'react'
import { Route ,Switch}  from "react-router-dom";

import Products from '../Products/Products';



 const Routes = (productos) => {
  return (
    <div>
<Switch>
    <Route path="/" exact>
       <Products productos={productos}/>
    </Route>
</Switch>
    </div>
  )
}
export default Routes ;
