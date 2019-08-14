import ModifyButton from '@/components/ModifyButton'
export default {
	name: 'listTableProductCustomer',
	props: {
		listProduct: {}
	},
	components: {
		ModifyButton
	},
	data() {
		return {
			form: {
				name: '',
				description: '',
				listPrice: '',
				offerPrice: '',
				stock: ''
			},
			filterByName: [],
			sortByName: false,
			quantity: 1,
			bookData: {},
		}
	},
	methods: {
		isStockAvailable(stock){
			if(stock <= 0){
				return false;
			}
			return true;
		}
	},
	
}