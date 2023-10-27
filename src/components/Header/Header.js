import React from 'react'
import TopHeader from './Topheader/TopHeader'
import MiddleHeader from './MiddileHeader/MiddleHeader'
import BottomHeader from './Bottomheader/BottomHeader'

export default function Header() {
  return (
    <div className="header-wrapper" >
      <TopHeader/>
      <MiddleHeader/>
      <BottomHeader />
    </div>
  )
}
