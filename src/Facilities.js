import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'
import Facilitiescard from './Facilitiescard'
export default function Facilities() {

          var icons=["-050-fence","-022-drum","-030-crayons","-017-toy-car","-025-sandwich","-047-backpack"]
          var heading=["Play Ground","Music and Dance","Arts and Crafts","Safe Transportation","Healthy food","Education"]
          var text=["Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."]
        //   var val = ["050","022","030","017","025","047"]


  return (
      
    // <!-- Facilities Start -->
    <div class="container-fluid pt-5">
        <div class="container pb-3">
            <div class="row">
              {icons.map((value,index)=>{

return <Facilitiescard  icon={icons[index]}  heading={heading[index]}  text={text}/>

              }) }

            </div>
        </div>
    </div>
    // <!-- Facilities Start -->


  )
}
