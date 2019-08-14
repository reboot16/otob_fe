import Vue from 'vue'

export default {
	data () {
		return {
			customAlert: false,
			customTextAlert: 'Default alert from mixin'
		}
	},
	methods: {
		showCustomAlert(text) {
			console.log(this.customAlert)
			this.customAlert = true
			console.log(this.customAlert)
			
			this.customTextAlert = text
		},
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
		},
		getDateNow () {
			let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0');
			let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			let yyyy = today.getFullYear();
			
			today = mm + '/' + dd + '/' + yyyy;
			return today
		},
		
		
	}
}