import React from 'react'
import { Helmet } from 'react-helmet'

interface props {
	title: string
	children: React.ReactNode
}

const Page = ({ title, children }: props) => (
	<>
		<Helmet>
			<title>Ayala: {title}</title>
		</Helmet>
		{children}
	</>
)

export default Page
