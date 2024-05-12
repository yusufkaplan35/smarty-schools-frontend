import LoadingList from '@/components/common/loaders/loading-list'
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import React from 'react'

const Loading = () => {
  return (
    <>
			<PageHeader>Grades &amp; Meets</PageHeader>
			<Spacer height={70} />
			<LoadingList title="Grades" rowCount={6} colCount={7} showButton={false}/>
			<Spacer />
			<LoadingList title="Meets" rowCount={6} colCount={4}/>
			<Spacer />
		</>
  )
}

export default Loading