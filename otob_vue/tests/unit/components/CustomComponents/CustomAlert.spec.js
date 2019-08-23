import {createLocalVue, shallowMount} from '@vue/test-utils'
import CustomAlert from '@/components/CustomComponents/CustomAlert.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

const onCancel = jest.fn()

describe('CustomAlert', () => {
	let wrapper
	
	beforeEach (() => {
		wrapper = shallowMount( CustomAlert, {
			localVue,
			methods: {
				onCancel
			}
		})
	})
	
	test('methods: onCancel', () => {
		wrapper.vm.onCancel()
		wrapper.vm.$emit('close')
		expect(wrapper.emitted('close')).toBeTruthy()
	})
	
	test('methods: onContinue', () => {
		wrapper.vm.onContinue()
		expect(wrapper.emitted('continue')).toBeTruthy()
		expect(onCancel).toHaveBeenCalled()
	})
})