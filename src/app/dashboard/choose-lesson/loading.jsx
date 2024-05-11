import LoadingList from '@/components/common/loaders/loading-list'
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import React from 'react'

const Loading = () => {
  return (
    <>
			<PageHeader>Choose Program</PageHeader>
			<Spacer height={70} />
			<LoadingList title="All Programs" rowCount={6} colCount={4} showButton={true}/>
			<Spacer />
			<LoadingList title="Student Programs" rowCount={6} colCount={4}/>
			<Spacer />
		</>
  )
}

export default Loading