import LoadingList from '@/components/common/loaders/loading-list'
import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import React from 'react'

const Loading = () => {
  return (
    <>
			<PageHeader>Program</PageHeader>
			<Spacer height={70} />
			<LoadingList title="All programs" rowCount={6} colCount={5} showButton={true}/>
			<Spacer />
			<LoadingList title="Unassigned programs" rowCount={5} colCount={3} showButton={false}/>
			<Spacer />
		</>
  )
}

export default Loading