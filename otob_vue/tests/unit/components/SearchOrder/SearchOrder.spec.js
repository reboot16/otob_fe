import {createLocalVue, shallowMount} from '@vue/test-utils'
import SearchOrder from '@/components/SearchOrder/index.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.use(moment)

const mockStore = {
	dispatch: jest.fn()
}
jest.mock("moment", () => () => ({
	format: () => ''
}))

describe('SearchOrder', () => {
	let wrapper
	beforeEach (() => {
		wrapper = shallowMount( SearchOrder, {
			localVue,
			mocks: {
				$store: mockStore
			}
		})
	})
	
	test('methods: doSearch', () => {
		wrapper.vm.doSearch()
		let textSearch = wrapper.vm.searchText
		expect(mockStore.dispatch).toHaveBeenCalledWith('searchOrder', textSearch)
	})
	
	test('methods: doFilter', () => {
		wrapper.vm.doFilter()
		let dateNow = wrapper.vm.date
		let payload = {
			date: moment(dateNow).format(''),
			status: wrapper.vm.status
		}
		expect(mockStore.dispatch).toHaveBeenCalledWith('filterOrder', payload)
	})
	
	test('watch: searchText', () => {
		const doSearch = jest.fn()
		wrapper = shallowMount(SearchOrder, {
			methods: {
				doSearch
			}
		})
		wrapper.vm.$options.watch.searchText.call(wrapper.vm, '')
		expect(doSearch).toBeCalled()
	})
	
	test('watch: filter', () => {
		const doFilter = jest.fn()
		wrapper = shallowMount(SearchOrder, {
			methods: {
				doFilter
			}
		})
		wrapper.vm.$options.watch.filter.call(wrapper.vm, '')
		expect(doFilter).toBeCalled()
	})
	
})