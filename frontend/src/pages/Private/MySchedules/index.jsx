import React, { Component, useState } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './style.css'
import { Checkbox } from '@mui/material'
import Api from '../../../services/api';


class MySchedules extends Component {
     constructor(props) {
          super(props);
          this.state = {
               selectedFilter: 'all',
               schedules: []
          }
     }


     async fetchSchedules(){
          if(!localStorage.getItem('token')) alert("Redirect to login")
          else{
               const res = await Api.getAllUserSchedules(localStorage.getItem('token')).then((result) => {
                    for(let i = 0; i < result.data.length; i++){
                         console.log(result.data[i])
                         this.setState(prev => ({
                              schedules: [...prev.schedules, result.data[i]]
                         }), () => {
                              console.log(this.state.schedules)
                         })
                    }
               })
               return res
          }
     }

     handleFilter(){
          
     }

     render() {
          return (
               <div className='container' onLoad={() => {
                    this.fetchSchedules()
               }}>
                    <Sidebar />
                    <header className='schedules-header'>
                         Meus compromissos
                    </header>
                    <main className='schedules-wrapper'>
                         <label for="cars">Filtro</label>
                         <select name="filter" id="filter" onChange={(e) => {
                              this.setState({
                                   selectedFilter: e.target.value
                              })
                              this.handleFilter();
                         }}>
                              <option value="all" selected >Todos</option>
                              <option value="myself">Marcados por mim</option>
                              <option value="other" >Marcados por outros</option>
                         </select>

                         <div className='schedule-list'>
                              <ul>
                                   {
                                        this.state.schedules.map((schedule, index) => {
                                             return(
                                                  <li className='schedule-item'>
                                                       <Checkbox />
                                                       {schedule.name}
                                                  </li>
                                             )
                                        })
                                   }
                                   <li className='schedule-item'>
                                        <Checkbox />
                                        Item
                                   </li>
                              </ul>

                         </div>
                    </main>
               </div>
          )
     }
     
}

export default MySchedules;