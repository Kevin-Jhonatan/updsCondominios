import axios from 'axios';
import React, {useState, createContext} from 'react';
import {BASE_URL} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [userCondominiums, setUserCondominiums] = useState({}); 
  const [condoInfo, setCondoInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [commonArea, setCommonArea] = useState('');

   const register = (userName, email, pass) => {
      setIsLoading(true);
      const userData = {name: [{value: userName}], mail: [{value: email}] ,pass: [{value:pass}]}
      axios.post(`${BASE_URL}user/register?_format=json`, userData)
         .then(response => {
            let userInfo = response.data;
            console.log(`Informacion del usuario ${JSON.stringify(userInfo)}`);
            setIsLoading(false);
         })
         .catch(function (error) {
            if (error.response) {
               // The request was made, but the server responded with a status code
               // that falls out of the range of 2xx
               console.log(`data ${JSON.stringify(error.response.data)}`);
               console.log(`status ${error.response.status}`);
               console.log(`headers ${error.response.headers}`);
             } else {
               // Something happened in setting up the request that triggered an Error
               console.log('Error', error.message);
             }
             setIsLoading(false);
             console.log(error.config);
         });
   }

   const login = (userName, password) => {
      setIsLoading(true);
       const loginData = {name:userName, pass:password}
       axios.post(`${BASE_URL}user/login?_format=json`, loginData)
       .then(response => { 
         let userInfo = response.data;
         console.log(`Informacion del usuario ${JSON.stringify(userInfo)}`);
         setUserInfo(userInfo);
         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
         setIsLoading(false);
         
      })
      .catch(function (error) {
         
         if (error.response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(`data ${JSON.stringify(error.response.data)}`);
            console.log(`status ${error.response.status}`);
            console.log(`headers ${JSON.stringify(error.response.headers)}`);
         } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
         }
         setIsLoading(false);
         console.log(error.config);
      });     
   }

   const openCondo = () => {
      const condoInfo = {id:10, name:'Green tower'}
      setIsLoading(true);
      setCondoInfo(condoInfo);
      AsyncStorage.setItem('condoInfo', JSON.stringify(condoInfo));
      setIsLoading(false);
   }

   const listRoles = () => {
      var options = {
         method: 'GET',
         url: `${BASE_URL}api/role`,
         headers: {
            'Content-Type': 'application/json'
         }
       };
      
      axios.request(options)
      .then(function (response) {
         console.log(response.data);
      }).catch(function (error) {
         console.log(error);
         console.log(`message ${JSON.stringify(error)}`)
      });
   }

   const logout = () => {
      setIsLoading(true);
      axios.post(
        `${BASE_URL}user/logout?_format=json&token=${userInfo.logout_token}`,
        {},
        {
           headers: {Authorization: `Bearer ${userInfo.access_token}`},
        },
      )
      .then(res => {
         console.log(res.data);
         AsyncStorage.removeItem('userInfo');
         setUserInfo({});
         setCondoInfo({});
         setIsLoading(false);
      })
      .catch(e => {
         console.log(`logout error ${e}`);
         setIsLoading(false);
      }

      );
   }

   const associateUserCondominium = (code) => {
      setIsLoading(true);
       const associateData = {userId:userInfo.current_user.uid, codeCondominium:code}
       const headers = {
         'Content-type' : `application/json`, 
         'Authorization': `Bearer ${userInfo.access_token}`,
         'X-CSRF-Token' : `${userInfo.csrf_token}`

       }
       axios.post(`${BASE_URL}api/association-user-condominium?_format=json`, associateData, {headers})
       .then(response => { 
         let associateInfo = response.data;
         console.log(`Informacion de la asociacion ${JSON.stringify(associateInfo)}`);
         setIsLoading(false);
         
      })
      .catch(function (error) {
         
         if (error.response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(`data ${JSON.stringify(error.response.data)}`);
            console.log(`status ${error.response.status}`);
            console.log(`headers ${JSON.stringify(error.response.headers)}`);
         } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
         }
         setIsLoading(false);
         console.log(error.config);
      });  
   }

   const myCondominiums = () => {
      var options = {
         method: 'GET',
         url: `${BASE_URL}api/my-condominiums/${userInfo.current_user.uid}`,
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.access_token}`,
            'X-CSRF-Token' : `${userInfo.csrf_token}`
         }
       };
      
      axios.request(options)
      .then(function (response) {
         console.log(response.data);
         setUserCondominiums(response.data);
      }).catch(function (error) {
         console.log(error);
         console.log(`message ${JSON.stringify(error)}`);
      });
   }
   return (
      <AuthContext.Provider 
         value={{
            isLoading,
            userInfo,
            condoInfo,
            userCondominiums,
            register,
            login,
            logout,
            openCondo,
            associateUserCondominium,
            myCondominiums,
            commonArea,
            setCommonArea
          }}>
         {children}
      </AuthContext.Provider> 
   ); 
}