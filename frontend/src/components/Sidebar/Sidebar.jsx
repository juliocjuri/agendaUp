import React, { Component, useState } from 'react';
import './Sidebar.css'
import { 
     FaBars,
     FaHome,
     FaBell,
     FaList,
     FaPlus } from 'react-icons/fa'

class Sidebar extends Component {
     constructor(props){
          super(props);
          this.state = {
               isOpened: false,
               rotate: false
          }
          this.menuItems = [
               {
                   path:"/home",
                   name:"Home",
                   icon: <FaHome className='sidebar-item-icon' color='#0048a7'/>
               },
               {
                   path:"/createschedule",
                   name:"Agendar",
                   icon: <FaPlus className='sidebar-item-icon' color='#0048a7'/> 
               },
               {
                   path:"/myschedules",
                   name:"Agendamentos",
                   icon: <FaList className='sidebar-item-icon' color='#0048a7'/> 
               },
               {
                   path:"/notifications",
                   name:"Notificações",
                   icon: <FaBell className='sidebar-item-icon' color='#0048a7'/>
               }
           ]
          
     }

     handleButtonClick(){
          this.setState({ 
               isOpened: !this.state.isOpened,
               rotate: !this.state.rotate
          })
     }

render() {
     return (
          <div>
               <div className={this.state.isOpened ? 
                         'sidebar-wrapper' :
                         'sidebar-wrapper sidebar-wrapper-collapsed'}>
                    
                    <button onClick={() => {
                         this.handleButtonClick();
                    }} className='collapse-btn' > 
                    <FaBars className='collapse-btn-icon'/>
                    </button>
                    <header className='header-wrapper'>
                         <img 
                              src='/src/assets/logo-check-sign.png' 
                              alt='fgdg' 
                              className='logo-check-sign'
                              rotate={this.state.rotate.toString()}
                         />
                    </header>
                    <main>
                         {this.menuItems.map((item, index) => {
                              return(
                                   <div className='sidebar-item-wrapper'>
                                        <div className='sidebar-item-icon'>
                                             {item.icon}
                                        </div>
                                        <div className={this.state.isOpened ? 'sidebar-item-text' : 'sidebar-item-text sidebar-item-text-collapsed'}>
                                             {item.name}
                                        </div>
                                   </div>
                              )
                         })}
                    </main>
               </div>
          </div>
     )
}

}


export default Sidebar;