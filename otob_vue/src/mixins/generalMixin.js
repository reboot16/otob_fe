import Vue from 'vue'

export default {
	data () {
		return {
			customAlert: false,
			customTextAlert: 'Default alert from mixin'
		}
	},
	methods: {
		showCustomAlert() {
			alert('custom alert')
			// // console.log(this.customAlert)
			// this.customAlert = true
			// // console.log(this.customAlert)
			//
			// this.customTextAlert = text
		},
		formatCurrency (value) {
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
}