import React from "react";
import styles from './Navigation.module.css';
import AppAvatar from "./Avatar";
import UserProvider from '../providers/UserProvider'



  class UserWindow extends React.Component {


  render () {
   

    return ( <UserProvider>
        {(user) => {
        return (
        <>
        {user ? <div className={styles.userWindow}>
          <AppAvatar user={user}/>
          <div>
          <h2 style={{ marginBottom: '5px', marginTop: '0', fontWeight: '600', letterSpacing: '0.05em'}} >Hello Ada!</h2>
          <h4 style={{ marginTop: '0', marginBottom: '0', fontWeight: '400', color: 'lightgray'}}>Gdańsk, Poland</h4>
          </div>  
      </div> : <h1> </h1>
   }
   </>
   )}}
   </UserProvider>
   )}};

   export default UserWindow;