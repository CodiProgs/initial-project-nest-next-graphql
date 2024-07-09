import { gql } from '@apollo/client'

gql`
	mutation Create($input: String!) {
		create(input: $input)
	}
`
