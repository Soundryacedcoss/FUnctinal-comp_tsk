import React from 'react'
import Tsk06_Comp02 from './Tsk06_Comp02'
import Tsk06_Comp03 from './Tsk06_Comp03'
import Tsk06_Feed_Comp03 from './Tsk06_Feed_Comp03'
import './App.css'

export default function Tsk06_Comp01() {
  return (
    <div className='tsk06'>
    <div className="navbar">Navbar</div>
    <div className='main_div'>
    <Tsk06_Comp02/>
    <Tsk06_Feed_Comp03/>
    <Tsk06_Comp03/>
    </div>
    </div>
  )
}
