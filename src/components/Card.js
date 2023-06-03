import React from 'react'

export default function Card(props) {

    let options = props.options;
    console.log(options);
  //  let priceOptions = Object.keys(options); 

  return (
    <div>
      
      <div>
        <div className="card mt-3" style={{"width": "18rem", "maxHeight": "360px"}}>
          <img src={props.ImgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <div className="container w-100">
                <select className="m-2 h-100 bg-success ">
                    {Array.from(Array(6),(e, i)=>{
                        return(
                            <option key={i+1} value={i+1}> {i+1} </option>
                        )
                    })}
                </select>
                <select className="m-2 h-100 bg-success ">
                    {/* {priceOptions.map((i) => {
                    return <option key={i} value={i}>{i}</option>
                  })} */}
                </select>

                <div className="d-inline fs-3 h-100">
                    Total Price
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
