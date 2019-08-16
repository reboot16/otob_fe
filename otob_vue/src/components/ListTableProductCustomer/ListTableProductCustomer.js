import ModifyProduct from '@/components/ModifyProduct'
export default {
	name: 'listTableProductCustomer',
	props: {
		listProduct: {}
	},
	components: {
		ModifyProduct
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