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
	stock: ''
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
	
	test('methods: increment', () => {
		wrapper.vm.increment(product)
		let qty = wrapper.vm.qty
		expect(qty).toEqual(2)
	})
})