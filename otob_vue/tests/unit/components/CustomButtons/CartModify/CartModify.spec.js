import {createLocalVue, shallowMount} from '@vue/test-utils'
import CartModify from '@/components/CustomButtons/CartModify/index.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

const mockStore = {
	dispatch: jest.fn()
}

describe('CartModify', () => {
	let wrapper
	
	beforeEach (() => {
		wrapper = shallowMount( CartModify, {
			localVue,
			mocks: {
				$store: mockStore
			},
		})
	})
	
	test('methods: onOrder', () => {
		// wrapper.vm.onOrder()
		// expect(wrapper.vm.showModalAlert).toEqual(true)
	})
	
	test('methods: continueCheckout', () => {
		// wrapper.vm.continueCheckout()
		// expect(mockStore.dispatch).toHaveBeenCalledWith('checkout')
	})
})