import { shallowMount } from '@vue/test-utils'
import ProductCustomer from '@/pages/product/ProductCustomer.vue'
import TableCart from '@/components/TableCart/index.vue'
import TableProductCustomer from '@/components/TableProductCustomer'

describe('ProductCustomer', () => {
    it('renders child component: TableCart', () => {
        const wrapper = shallowMount(ProductCustomer)
        expect(wrapper.find(TableCart).exists()).toBe(true)
    })

    it('renders child component: TableProductCustomer', () => {
        const wrapper = shallowMount(ProductCustomer)
        expect(wrapper.find(TableProductCustomer).exists()).toBe(true)
    })
})