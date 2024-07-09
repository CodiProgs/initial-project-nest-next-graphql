import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--primary))',
				bg: 'rgb(var(--bg))',
				soft_bg: 'rgb(var(--soft-bg))',
				text: 'rgb(var(--text))'
			}
		}
	},
	darkMode: 'class',
	mode: 'jit',
	plugins: []
}
export default config
