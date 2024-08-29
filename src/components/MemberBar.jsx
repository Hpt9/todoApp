import React from 'react'
import "../css/MemberBar.scss"
import NewMember from './NewMember'

export default function MemberBar() {
  return (
    <div className='info_bar'>
        <div>
            <p>Product Design Team</p>
            <span className='sprint'>Sprint 0</span>
        </div>
        <NewMember/>
    </div>
  )
}
