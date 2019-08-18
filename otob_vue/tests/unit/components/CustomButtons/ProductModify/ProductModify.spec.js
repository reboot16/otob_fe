import {createLocalVue, shallowMount} from '@vue/test-utils'
import ProductModify from '@/components/CustomButtons/ProductModify/index.vue'
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
	stock: 10
}

describe('ProductModify', () => {
	let wrapper
	
	beforeEach (() => {
		wrapper = shallowMount( ProductModify, {
			localVue,
			mocks: {
				$store: mockStore
			},
		})
	})
	
	test('sets the correct default data', () => {
		// expect(wrapper.vm._data.qty).toBe(1)
	})
	
	test('methods: isStockAvailable', () => {
		// let stock = 1
		// expect(wrapper.vm.isStockAvailable(stock)).toEqual(stock)
	})
	
})