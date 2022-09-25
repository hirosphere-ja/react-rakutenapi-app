module.exports = {
	env: {
		"browser": true,
		"es2021": true,
		"node": true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		'prettier',
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			"jsx": true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'react/jsx-key': [
			'error',
			{ checkFragmentShorthand: true, warnOnDuplicates: true },
		],
	},
	settings: {
    react: {
      version: "detect"
    }
  }
}