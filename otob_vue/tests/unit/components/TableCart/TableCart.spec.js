import { createLocalVue, shallowMount } from '@vue/test-utils'
import TableCart from '@/components/TableCart/index.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
describe('TableCart', () => {
  it('props: set listItemCart', () => {
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
  
  it('methods: onDelete', () => {
    const onDelete = jest.fn()
    const mockStore = {
      dispatch: jest.fn()
    }
    const products = {
      name: 'Product name',
      description: 'Product description',
      listPrice: 'Product listPrice',
      offerPrice: 'Product offerPrice',
      stock: 'Product stock'
    }
    
    const wrapper = shallowMount(TableCart, {
      localVue,
      methods: {
        onDelete
      },
      mocks: {
<<<<<<< Updated upstream
        $store: mockStore
=======
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
>>>>>>> Stashed changes
      }
    })
    wrapper.vm.confirmDelete = true
    expect(mockStore.dispatch).toHaveBeenCalledWith('deleteItemCart', products)
  })
<<<<<<< Updated upstream
=======
  
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
  
>>>>>>> Stashed changes
})