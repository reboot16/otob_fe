import {createLocalVue, shallowMount} from '@vue/test-utils'
import CustomPagination from '@/components/CustomComponents/CustomPagination.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

const mockStore = {
	dispatch: jest.fn()
}

describe('CustomPagination', () => {
	let wrapper
	
	beforeEach (() => {
		wrapper = shallowMount( CustomPagination, {
			localVue,
			mocks: {
				$store: mockStore
			},
		})
	})
	
	test('methods: onClickPaging size = 5', () => {
		let index = 1
		let size = 5
		
		wrapper.vm.onClickPaging(index, size)
		
		let payload = {
			page: index,
			size: size
		}
		
		expect(mockStore.dispatch).toHaveBeenCalledWith('getProductsPageable', payload)
	})
	
	test('methods: onClickPaging size = undefined', () => {
		let index = 1
		let size = undefined
		expect(wrapper.vm.onClickPaging(index, size)).toEqual(5)
	})
	
	test('methods: pagingDisable -> true', () => {
		let index = 1
		wrapper.vm.pagingDisable(index)
		wrapper.vm.currentPage = 1
		expect(wrapper.vm.pagingDisable(index)).toEqual(true)
	})
	
	test('methods: pagingDisable -> false', () => {
		let index = 1
		wrapper.vm.pagingDisable(index)
		wrapper.vm.currentPage = 2
		expect(wrapper.vm.pagingDisable(index)).toEqual(false)
	})
	
})