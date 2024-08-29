import React from 'react'
import "../css/List.scss"
import ListItem from './ListItem'

export default function List({list,hd}) {
  console.log(list)
  return (
    <div className='list'>
        <h4>
            <span>{hd}</span>
            <span className='count'>{list.length}</span>
        </h4>
        {
        list.map((element,i) =><ListItem element={element} key={i}/>)
        }
    </div>
  )
}
