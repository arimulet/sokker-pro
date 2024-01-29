/* eslint-disable @next/next/no-img-element */

'use client';
import React from 'react';
import { useUser   } from '@auth0/nextjs-auth0/client';

import Button from '@mui/material/Button'

import './styles.scss'

const Profile = () => {
   const { user,  error, isLoading } = useUser()
    
   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>{error.message}</div>;
  
  
  return (    
      <div className='profile'>
        {user ? (<>
              <img className='photo' src={`${user.picture}`} alt={`${user.name}`} />
              <h2>{user.name}</h2>
              <p>{user.email}</p></>
              ) :
            <Button  variant='contained' href='/api/auth/login' >Login</Button>  
      }
      </div>        
  );
}

export default Profile