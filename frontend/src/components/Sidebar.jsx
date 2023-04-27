import React, { Component, useState } from 'react';
import './Sidebar.css'

class Sidebar extends Component {
     constructor(props){
          super(props);
          this.state = {
               isOpened: false
          }
     }

     handleButtonClick(){
          this.setState({ 
               isOpened: !this.state.isOpened
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
                    }} className='collapse-btn'> </button>
               </div>
          </div>
     )
}

}

export default Sidebar;