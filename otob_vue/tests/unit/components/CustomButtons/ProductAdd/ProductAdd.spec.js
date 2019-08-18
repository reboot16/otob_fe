import {createLocalVue, shallowMount} from '@vue/test-utils'
import ProductAdd from '@/components/CustomButtons/ProductAdd/index.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

const mockStore = {
	dispatch: jest.fn()
}
const product = {
	name: '',
	description: '',
	listPrice: '',
	offerPrice: '',
	stock: ''
}

describe('ProductAdd', () => {
	let wrapper
	
	beforeEach (() => {
		wrapper = shallowMount( ProductAdd, {
			localVue,
			mocks: {
				$store: mockStore
			}
		})
	})
	
	test('methods: onHandleSubmit', () => {
		wrapper.vm.onHandleSubmit()
		let formProduct = wrapper.vm.form
		expect(wrapper.vm.showModalAdd).toEqual(false)
		expect(mockStore.dispatch).toHaveBeenCalledWith('addProduct', formProduct)
	})
	
	test('methods: onUpload', () => {
		let form = {}
		wrapper.vm.onUpload(form)
		expect(wrapper.vm.showModalBatch).toEqual(false)
		expect(mockStore.dispatch).toHaveBeenCalledWith('uploadProduct', form)
	})
	
	test('methods: resetForm', () => {
		wrapper.vm.resetForm()
		let formEqual = {
			name: '',
			description: '',
			listPrice: '',
			offerPrice: '',
			stock: ''
		}
		expect(wrapper.vm.form).toEqual(formEqual)
	})
})