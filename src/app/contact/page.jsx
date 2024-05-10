import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import Contact from '@/components/contact/contact'
import React from 'react'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us! Find our address, phone number, and email.',
};

const ContactPage = () => {
  return (
    <>
      <PageHeader>Contact</PageHeader>
      <Spacer height={70} />
      <Contact/>
    </>
  )
}

export default ContactPage