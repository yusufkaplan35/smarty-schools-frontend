import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import LessonCreateForm from '@/components/dashboard/lesson/lesson-create-form'
import React from 'react'

const LessonCreatePage = () => {
  return (
    <>
        <PageHeader>New Lesson</PageHeader>
        <Spacer height={70}/>
        <LessonCreateForm/>
        <Spacer/>
    </>
  )
}

export default LessonCreatePage