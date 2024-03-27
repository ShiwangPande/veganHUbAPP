import React from 'react'
import SignIn from '../../components/auth/SignIn';

function Login({onFormFilled} ) {
  return (
    <div><SignIn onFormFilled={onFormFilled}/></div>
  )
}

export default Login