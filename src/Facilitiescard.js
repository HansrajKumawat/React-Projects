import React from 'react'

export default function Facilitiescard({icon,heading,text,val}) {
  return (
    <div class="col-lg-4 col-md-6 pb-1">
    <div class="d-flex bg-light shadow-sm border-top rounded mb-4" style={{padding: "30px"}}>
        <i class={"flaticon"+icon+" h1 font-weight-normal text-primary mb-3"}></i>
        <div class="pl-4">
            <h4>{heading}</h4>
            <p class="m-0">{text}</p>
        </div>
    </div>
</div>
  )
}
