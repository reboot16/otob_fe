import {createLocalVue, shallowMount} from '@vue/test-utils'
import User from '@/pages/User/User.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)
// localVue.use(VueRouter)

const $route = {
	push: () => {}
}

const mockStore = {
	dispatch: jest.fn(),
	getters: {
		USERS: () => []
	}
}

describe('User', () => {
	let wrapper
	beforeEach (() => {
		wrapper = shallowMount( User, {
			localVue,
			propsData: {
				auth: {}
			},
			mocks: {
				$store: mockStore,
				$route
			}
		})
	})
	
	// test('mounted: route to "/" ', () => {
	// 	wrapper.vm.auth.isLogin = false
	// 	expect(wrapper.vm.$route.push).toHaveBeenCalled()
	// 	// expect(wrapper.vm.$route.path).toHaveBeenCalled()
	// })
	
	test('methods: showModalUser', () => {
		wrapper.vm.showModalUser()
		expect(wrapper.vm.showModalForm).toEqual(true)
	})
	
	test('methods: onSubmit then show modal', () => {
		wrapper.vm.onSubmit()
		expect(wrapper.vm.showModalForm).toEqual(false)
	})
	
	test('methods: onSubmit with role customer ', () => {
		wrapper.vm.form.role = 1
		wrapper.vm.onSubmit()
		expect(mockStore.dispatch).toHaveBeenCalledWith('registerCustomer', wrapper.vm.form)
	})
	
	test('methods: onSubmit with role cashier', () => {
		wrapper.vm.form.role = 2
		wrapper.vm.onSubmit()
		expect(mockStore.dispatch).toHaveBeenCalledWith('registerCashier', wrapper.vm.form)
	})
	
	test('methods: onSubmit with role admin', () => {
		wrapper.vm.form.role = 3
		wrapper.vm.onSubmit()
		expect(mockStore.dispatch).toHaveBeenCalledWith('registerAdmin', wrapper.vm.form)
	})
	
	test('methods: onReset', () => {
		wrapper.vm.onReset()
		let expectedForm = {"email": "", "role": ""}
		expect(wrapper.vm.form).toEqual(expectedForm)
	})
	
})