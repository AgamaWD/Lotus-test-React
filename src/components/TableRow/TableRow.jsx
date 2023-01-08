import React from 'react'

export default function TabbleRow(props) {
  const values = [];
  for(let i = 0; i < props.values.length; i++) {
    values.push(props.values[i])
  }

  return (
    <div className={props.class}>
        <p className='table-row__title'>{props.title}</p>
        {values.map(function(value, i){
          return <p className='table-row__value'>{value}</p>;
        })}
    </div>
  )
}
