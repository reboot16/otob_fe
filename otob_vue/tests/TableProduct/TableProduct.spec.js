import { shallowMount } from '@vue/test-utils'
import TableProduct from '@/components/TableProduct/index.vue'

describe ('TableProduct', () => {
    it('renders tr for each listProduct in props.listProduct', () => {
        const listProduct = [
            {
                name: 'Product name',
                description: 'Product description',
                listPrice: 'Product listPrice',
                offerPrice: 'Product offerPrice',
                stock: 'Product stock'
            }
        ]
        const wrapper= shallowMount(TableProduct, {
            propsData: { listProduct }
        })
        expect(wrapper.findAll('tr')).toHaveLength(listProduct.length)
    })
})