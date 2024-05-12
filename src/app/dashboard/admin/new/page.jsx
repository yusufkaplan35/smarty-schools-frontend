import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import AdminCreateForm from '@/components/dashboard/admin/admin-create-form'
import { wait } from '@/helpers/misc'
import React from 'react'

const AdminCreatePage = async () => {
  await wait(5)
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