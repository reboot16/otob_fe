import {createLocalVue, shallowMount} from '@vue/test-utils'
import Product from '@/pages/Product/index.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

const mockStore = {
	dispatch: jest.fn(),
	getters: {
		PRODUCTS: () => [],
		CARTS: () => [],
		TOTAL_PAGES: () => 0
	}
}

describe('Product', () => {
	let wrapper
	
	beforeEach (() => {
		wrapper = shallowMount( Product, {
			localVue,
			propsData: {
				auth: {
					isLogin: false,
					isAdmin: false,
					isCustomer: false,
					isGuest: true
				}
			},
			mocks: {
				$store: mockStore
			}
		})
	})
	
	test('methods: dispatchCart', () => {
		wrapper.vm.dispatchCart()
		wrapper.vm.auth.islogin = true
		expect(mockStore.dispatch).toHaveBeenCalledWith('getProducts')
	})
	
})