import React from 'react'

const Card = ({data}) => {
  return (
    <div style={{border:'1px black solid',margin:'5px'}}>
        <h2 style={{color:data.isAtive===false?'red':'green'}}>{data.name}</h2>
        <h2>{data.price}</h2>
        <button>Change Activity</button>

    </div>
  )
}

export default Card