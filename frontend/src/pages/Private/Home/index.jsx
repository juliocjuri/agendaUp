import React, { Component, useState } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './style.css'

/*
TODO: I have to insert the list of schedules depending on the quantity of completed schedules from the db
*/

class Home extends Component {
     constructor(props) {
          super(props);
     }

     render() {

          return (
               <div className='container'>
                    <Sidebar />
                    <div className='page-wrapper'>
                    <header className='header-user-wrapper'>
                         <div className='header-user-title'>
                              Olá, Usuário
                         </div>
                         <div className='header-user-subtitle'>
                              Aqui está um resumo dos seus compromissos
                         </div>
                    </header>
                    <main className='completed-schedules-wrapper'>
                         <ul>
                              <li>Compromissos realizados essa semana: 25 (precisa mudar) </li>
                              <li>Compromissos agendados essa semana: </li>
                              <li>Compromissos completados hoje: </li>
                              <li>Compromissos para a próxima semana: </li>
                         </ul>
                    </main>

                    </div>
               </div>
          )
     }
}

export default Home;