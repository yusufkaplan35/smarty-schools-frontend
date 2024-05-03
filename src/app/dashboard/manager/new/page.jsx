import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import ManagerCreateForm from '@/components/dashboard/manager/manager-create-form'
import React from 'react'

const ManagerCreatePage = () => {
  return (
    <>
        <PageHeader>New Manager</PageHeader>
        <Spacer height={70}/>
        <ManagerCreateForm/>
        <Spacer/>
    </>
  )
}

export default ManagerCreatePage