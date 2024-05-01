import React from 'react'

import  "./HomeLayout.css"
import UserNav from '../html-components/nav/UserNav'
import Dashboard from '../pages/dashboard/Dashboard'
import Header from '../html-components/header/header'

export default function HomeLayout(props: any) {
  return (
    <section className='container-lg'>
        
        <UserNav />
        <Header />
        <main>{props.children}</main>
        
      
    </section >
  )
}
