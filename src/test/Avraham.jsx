import React from 'react'
import MainLayout from '../layout/MainLayout'

export default function Avraham() {
   return (
      <>
      {/* true */}
      {/* false */}
         <MainLayout active={false}
          contentChilden={<div>content</div>}
          navChilden={<div>nav</div>}/>
      </>
   )
}
