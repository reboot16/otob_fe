import {createLocalVue, shallowMount} from '@vue/test-utils'
import Orders from '@/pages/Order/Orders.vue'
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
		ORDERS: () => []
	}
}
jest.mock("moment", () => () => ({
	format: () => ''
}))

describe('Orders', () => {
	let wrapper
	beforeEach (() => {
		wrapper = shallowMount( Orders, {
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
	
	test('methods: viewDetail', () => {
		// const id = 'ORD123'
		// expect(wrapper.vm.viewDetail(id)).toHaveBeenCalledWith('customer/'+id+'/detail')
	})
	
	test('methods: formatDate', () => {
		let date = ''
		let newDate = moment(date).format('')
		expect(wrapper.vm.formatDate(date)).toEqual(newDate)
	})
	
})