import LoadingList from '@/components/common/loaders/loading-list'
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import React from 'react'

const Loading = () => {
  return (
    <>
			<PageHeader>Term</PageHeader>
			<Spacer height={70} />
			<LoadingList title="Term List" rowCount={6} colCount={6} showButton={true}/>
			
			<Spacer />
		</>
  )
}

export default Loading