import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import AdminCreateForm from '@/components/dashboard/admin/admin-create-form'
import React from 'react'

const AdminCreatePage = () => {
  return (
    <>
        <PageHeader>New Admin</PageHeader>
        <Spacer height={70}/>
        <AdminCreateForm/>
        <Spacer/>
    </>
  )
}

export default AdminCreatePage