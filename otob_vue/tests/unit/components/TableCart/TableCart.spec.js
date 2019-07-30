import { createLocalVue, shallowMount } from '@vue/test-utils'
import TableCart from '@/components/TableCart/index.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

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
    const wrapper = shallowMount(TableCart, {
      localVue,
      methods: {
        onDelete
      }
    })
    wrapper.trigger('clicked', {
      key: 'onDelete'
    })
    expect(wrapper.vm.product.index).toBe()
  })
})