import Vue from 'vue'

Vue.mixin({
	methods: {
		getFormattedCurrency (value) {
			let result = ''
			value = value === null ? 0 : value
			let reverseValue = value.toString().split('').reverse().join('')
			for (let i = 0; i < reverseValue.length; i++) {
				if (i % 3 === 0) {
					result += reverseValue.substr(i, 3) + '.'
				}
			}
			return 'Rp ' + result.split('', result.length - 1).reverse().join('')
		}
	}
})