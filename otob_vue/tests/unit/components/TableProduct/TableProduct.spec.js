import { createLocalVue,  shallowMount, mount } from '@vue/test-utils'
import TableProduct from '@/components/TableProduct/index.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe ('TableProduct', () => {
    it('renders tr for each listProduct in props.listProduct', () => {
      const listProduct = [
        {
          name: 'Product name',
          description: 'Product description',
          listPrice: 'Product listPrice',
          offerPrice: 'Product offerPrice',
          stock: 'Product stock'
        },
        {
          name: 'Product name',
          description: 'Product description',
          listPrice: 'Product listPrice',
          offerPrice: 'Product offerPrice',
          stock: 'Product stock'
        }
      ]
      const wrapper= shallowMount(TableProduct, {
        localVue,
        propsData: { listProduct }
      })
      expect(wrapper.findAll('tr')).toHaveLength(listProduct.length)
    })
})