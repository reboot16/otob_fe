import {createLocalVue, shallowMount} from '@vue/test-utils'
import User from '@/pages/user/User.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.use(moment)

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
				$store: mockStore
			}
		})
	})
	
	test('methods: doSearch', () => {
		let value = ''
		wrapper.vm.doSearch(value)
		expect(wrapper.vm.filters).toEqual(value)
	})
	
})