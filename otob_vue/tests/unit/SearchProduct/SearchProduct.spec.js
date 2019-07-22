import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import SearchProduct from '@/components/SearchProduct/index.vue'

describe('SearchProduct', () => {
  it('sets the correct default data', () => {
    expect(typeof SearchProduct.data).toBe('function')
    const defaultData = SearchProduct.data()
    expect(defaultData.tempText).toBe('')
  })
})