import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import AdminList from '@/components/dashboard/admin/admin-list'
import React from 'react'

const AdminPage = () => {
  return (
    <>
        <PageHeader>Admin</PageHeader>
        <Spacer height={70}/>
        <AdminList/>
        <Spacer/>
    </>
  )
}

export default AdminPage