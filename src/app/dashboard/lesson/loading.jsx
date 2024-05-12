import LoadingList from '@/components/common/loaders/loading-list'
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import React from 'react'

const Loading = () => {
  return (
    <>
			<PageHeader>Leson</PageHeader>
			<Spacer height={70} />
			<LoadingList title="Lesson List" rowCount={6} colCount={5} showButton={true}/>
			
			<Spacer />
		</>
  )
}

export default Loading