import React, { Component, useState } from 'react';
import './Sidebar.css'
import { FaBars } from 'react-icons/fa'

class Sidebar extends Component {
     constructor(props){
          super(props);
          this.state = {
               isOpened: false,
               rotate: false
          }
     }

     handleButtonClick(){
          this.setState({ 
               isOpened: !this.state.isOpened,
               rotate: !this.state.rotate
          })
          console.log(this.state.isOpened)
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
                    <main className='icons-wrapper'>
                         
                    </main>
               </div>
          </div>
     )
}

}

export default Sidebar;