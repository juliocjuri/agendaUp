import React, { Component, useState } from 'react';
import './style.css';
import Api from '../../services/api';

class Login extends Component {
     constructor(props) {
          super(props);
          this.state = {
               email: '',
               password: ''
          }
     }

     handleLogin(){
          let res;

          Api.auth({
               email: this.state.email,
               password: this.state.password
          }).then((result) => {
               if(result.status == 200){
                     res = result.data.token
                     localStorage.setItem('token', res)
               }
               else(alert("Couldn't login"))
          })
     }

     render() {
          return (
               <div className='container'>
                    <div className='login-wrapper'>
                         <header className='login-header'>
                              <img src='/src/assets/logo.png' className='logo' />
                              <div className='login-title'>
                                   Entre com sua conta
                              </div>
                         </header>
                         <main className='login-content'>
                              <form 
                                   className='login-form'>
                                   
                                   <label>
                                        Email:
                                   </label>
                                   <input 
                                        type="text" 
                                        placeholder='adalovelace@gmail.com'
                                        onChange={(value) => {
                                             this.setState({
                                                  email: value.target.value
                                             })
                                        }}
                                   />
                                   <label>
                                        Senha:
                                   </label>
                                   <input 
                                        type="text" 
                                        placeholder='•••••••••'
                                        value={this.state.password}
                                        onChange={(value) => {
                                             this.setState({
                                                  password: value.target.value
                                             })
                                        }}
                                   />
                              </form>
                                   <button
                                        className='login-input-button' 
                                        onClick={() => this.handleLogin()}
                                   >
                                        Entrar
                                   </button>
                         </main>
                    </div>
               </div>
          )
     }
}

export default Login;