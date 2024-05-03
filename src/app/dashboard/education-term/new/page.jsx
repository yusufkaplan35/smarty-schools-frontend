import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import TermCreateForm from '@/components/dashboard/term/term-create-form'
import React from 'react'

const TermCreatePage = () => {
  return (
    <>
        <PageHeader>New Term</PageHeader>
        <Spacer height={70}/>
        <TermCreateForm/>
        <Spacer/>
    </>
  )
}

export default TermCreatePage