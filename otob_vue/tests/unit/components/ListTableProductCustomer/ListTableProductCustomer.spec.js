import {createLocalVue, shallowMount} from '@vue/test-utils'
import TableCustomer from '@/components/ListTableProductCustomer/index.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

describe('TableCustomer', () => {
	let wrapper
	
	beforeEach (() => {
		wrapper = shallowMount( TableCustomer, {
			localVue
		})
	})
	
	test('methods: isStockAvailable -> stock = 0', () => {
		let stock = 0
		expect(wrapper.vm.isStockAvailable(stock)).toEqual(false)
	})
	
	test('methods: isStockAvailable -> stock > 0', () => {
		let stock = 1
		expect(wrapper.vm.isStockAvailable(stock)).toEqual(true)
	})
	
})