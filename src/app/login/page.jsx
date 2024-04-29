import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import LoginForm from '@/components/login/login-form'
import React from 'react'

const LoginPage = () => {
  return (
    <>
        <PageHeader>Login</PageHeader>
        <Spacer height={70}/>
        <LoginForm/>
        <Spacer/>
    </>
  )
}

export default LoginPage