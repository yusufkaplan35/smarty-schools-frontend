import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import TeacherCreateForm from '@/components/dashboard/teacher/teacher-create-form'
import { getAllLessons } from '@/services/lesson-service'
import React from 'react'

const TeacherCreatePage = async () => {

  const res = await getAllLessons();
  const data = await res.json();



  return (
    <>
        <PageHeader>New Teacher</PageHeader>
        <Spacer height={70}/>
        <TeacherCreateForm lessons={data}/>
        <Spacer/>
    </>
  )
}

export default TeacherCreatePage