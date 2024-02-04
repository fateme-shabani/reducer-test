import React from 'react'
import Product from './Product'

const Card = ({data,dsp}) => {

  const addHandler=()=>{
    dsp({type:'change-activity',payload:{id:data.id}})
  }
  const deleteHandler=()=>{
    dsp({type:'delete',payload:{id:data.id}})
  }
  return (
    <div style={{border:'1px black solid',margin:'5px'}}>
        <h2 style={{color:data.isAtive===false?'red':'green'}}>{data.name}</h2>
        <h2>{data.price}</h2>
        <button onClick={addHandler}>Change Activity</button>
        <button onClick={deleteHandler}>Delete Item</button>

    </div>
  )
}

export default Card