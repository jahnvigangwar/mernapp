import React from 'react'

export default function Card(props) {

    let options = props.options;
    console.log(options);
  //  let priceOptions =  Object.keys(options); 


    // let foodItem = props.foodItem;

  const handleAddToCart =()=>{

  }
  return (
    <div>
      
      <div>
        <div className="card mt-3" style={{"width": "18rem", "maxHeight": "360px"}}>
          <img src={props.ImgSrc} className="card-img-top" alt="..."  style={{height:"120px", objectFit: "fill"}}/>
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
                <hr></hr>
            <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
