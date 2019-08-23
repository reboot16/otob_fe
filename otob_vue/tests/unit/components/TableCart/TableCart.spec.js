import { createLocalVue, shallowMount } from '@vue/test-utils'
import TableCart from '@/components/TableCart/index.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const mockStore = {
  dispatch: jest.fn(),
  getters: {
    CARTS: () => [],
    getCurrentOrder: () => []
  }
}
const $route = {
  path: '/some/path'
}

describe('TableCart', () => {
  beforeEach (() => {
    wrapper = shallowMount(TableCart, {
      localVue,
      mocks: {
        $store: mockStore,
        $route
      },
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
  
  
  test('props: set listItemCart', () => {
    // const listItemCart = []
    //
    // const wrapper = shallowMount(TableCart, {
    //   propsData: {
    //     listItemCart
    //   }
    // })
    // const list = wrapper.findAll('tr').at(1)
    // expect(list).toHaveLength(listItemCart)
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
    // expect(wrapper).toHaveRouteName('Thanks')
  })
  
})