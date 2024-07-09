'use client'

import { client } from '@/utils/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { FC, PropsWithChildren } from 'react'

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Providers
