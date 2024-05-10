import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import Events from '@/components/events/events'
import React from 'react'

export const metadata = {
	title: 'Events',
	description: 'Stay informed about upcoming school events and activities.',
  };

const EventsPage = () => {
  return (
    <>
			<PageHeader>Events</PageHeader>
			<Spacer height={70} />
			<Events />
			<Spacer />
		</>
  )
}

export default EventsPage