import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import SearchProduct from '@/components/SearchProduct/index.vue'

describe('SearchProduct', () => {
  test('sets the correct default data', () => {
    const defaultData = SearchProduct.data()
    expect(defaultData.searchText).toBe('')
  })
  
  test('methods: onSearch when button is clicked', () => {
    const mockStore = {
      dispatch: jest.fn()
    }
    const wrapper = shallowMount(SearchProduct, {
      mocks: {
        $store: mockStore
      }
    })
    wrapper.find('button').trigger('click')
    expect(mockStore.dispatch).toHaveBeenCalledWith('searchProduct', '')
  })
  
  test('watch: onSearch when searchText is changes', () => {
    const onSearch = jest.fn()
    const wrapper = shallowMount(SearchProduct, {
      methods: {
        onSearch
      }
    })
    wrapper.vm.$options.watch.searchText.call(wrapper.vm, '')
    expect(onSearch).toBeCalled()
  })
})