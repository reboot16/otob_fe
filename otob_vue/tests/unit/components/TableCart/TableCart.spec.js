import {createLocalVue, shallowMount} from '@vue/test-utils'
import TableCart from '@/components/TableCart/index.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(BootstrapVue)

const mockStore = {
  dispatch: jest.fn(),
  getters: {
    CARTS: () => []
  }
}

describe('TableCart', () => {
  let wrapper
  
  beforeEach (() => {
    wrapper = shallowMount( TableCart, {
      localVue,
      mocks: {
        $store: mockStore
      },
      router,
      computed: {
        listItemCart: function () {
          return [
            {
              name: 'sfdgs',
              description: 'gsdh',
              listPrice: '132',
              offerPrice: '131',
              stock: '5'
            }
          ]
        }
      },
      methods: {
        formatCurrency: () => jest.fn()
      }
    })
  })
  
  test('methods: dispatchCart', () => {
    wrapper.vm.dispatchCart()
    expect(mockStore.dispatch).toHaveBeenCalledWith('getCart')
  })
  
  test('methods: onOrder', () => {
    wrapper.vm.onOrder()
    expect(wrapper.vm.showModalAlert).toEqual(true)
  })
  
  test('methods: continueCheckout', () => {
    wrapper.vm.continueCheckout()
    expect(mockStore.dispatch).toHaveBeenCalledWith('checkout')
    expect(wrapper).toHaveRouteName('Thanks')
  })
  
})