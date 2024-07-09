import { SERVER_URL } from './src/config/url.config'
import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: `${SERVER_URL}/graphql`,
	documents: ['src/graphql/**/**/*.ts'],
	generates: {
		'./src/gql/graphql.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo'
			]
		}
	}
}

export default config
