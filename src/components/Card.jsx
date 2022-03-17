import React from 'react'

export const Card = () => {
  return (
    <div>
        <div className="card w-74 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-error">8.9 &#10029;</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-start">
      <div className="badge badge-outline">Watch</div>
    </div>
  </div>
</div>
    </div>
  )
}
