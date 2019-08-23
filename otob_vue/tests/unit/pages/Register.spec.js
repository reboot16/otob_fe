import {createLocalVue, shallowMount} from '@vue/test-utils'
import Register from '@/pages/CustomPages/RegisterPage.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

const mockStore = {
  dispatch: jest.fn()
}

describe('Register', () => {
  let wrapper
  
  beforeEach (() => {
    wrapper = shallowMount( Register, {
      localVue,
      mocks: {
        $store: mockStore
      }
    })
  })
  
  test('methods: onRegister', () => {
    wrapper.vm.onRegister()
    let form = wrapper.vm.form
    expect(mockStore.dispatch).toHaveBeenCalledWith('registerCustomer', form)
  })
})