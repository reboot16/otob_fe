import {createLocalVue, shallowMount} from '@vue/test-utils'
import TableAdmin from '@/components/ListTableProductAdmin/index.vue'
import CustomModal from '@/components/CustomComponents/CustomModal.vue'
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
const index = 1

describe('TableAdmin', () => {
	let wrapper
	
	beforeEach (() => {
		wrapper = shallowMount( TableAdmin, {
			localVue,
			mocks: {
				$store: mockStore
			},
			stubs: {
				'b-form': {
					render: () => {},
					methods: {
						reset: () => {}
					}
				}
			}
		})
	})
	
	test('methods: onShowModal', () => {
		wrapper.vm.onShowModal(product, index)
		expect(wrapper.vm.showModalUpd).toEqual(true)
		expect(wrapper.vm.form).toEqual(product)
		expect(wrapper.vm.form.index).toEqual(index)
	})
	
	test('methods: onHandleSubmit', () => {
		wrapper.vm.onHandleSubmit()
		let form = wrapper.vm.form
		expect(wrapper.vm.showModalUpd).toEqual(false)
		expect(mockStore.dispatch).toHaveBeenCalledWith('updateProduct', form)
	})
	
	test('methods: onConfirmDelete', () => {
		wrapper.vm.onConfirmDelete(product, index)
		expect(wrapper.vm.showModalAlert).toEqual(true)
		expect(wrapper.vm.deletedProduct).toEqual(product)
		expect(wrapper.vm.deletedProduct.index).toEqual(index)
	})
	
	test('methods: continueDelete', () => {
		wrapper.vm.continueDelete()
		let deletedProduct = wrapper.vm.deletedProduct
		expect(mockStore.dispatch).toHaveBeenCalledWith('deleteProduct', deletedProduct)
	})
	
	test('methods: onReset', () => {
		wrapper.vm.onReset()
	})
	
	test('methods: resetForm', () => {
		wrapper.vm.resetForm()
		expect(wrapper.vm.form).toEqual('')
	})
})