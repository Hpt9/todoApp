import React from 'react'
import "../css/ContentBody.scss"
import List from './List'

export default function ContentBody({todoList,inProgressList,inReviewList,doneList}) {
  // console.log(todoList)
  // console.log(inProgressList)
  // console.log(inReviewList)
  // console.log(doneList)
  return (
    <div className='content_body'>
          <List list={todoList} hd="To do"/>
          <List list={inProgressList} hd="In Progress"/>
          <List list={inReviewList} hd="In Review"/>
          <List list={doneList} hd="Done"/>
    </div>
  )
}
