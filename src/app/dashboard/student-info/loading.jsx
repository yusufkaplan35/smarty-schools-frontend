import LoadingList from '@/components/common/loaders/loading-list'
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import React from 'react'

const Loading = () => {
  return (
    <>
			<PageHeader>Student Info</PageHeader>
			<Spacer height={70} />
			<LoadingList title="Info List" rowCount={6} colCount={10} showButton={true}/>
			<Spacer />
		</>
  )
}

export default Loading