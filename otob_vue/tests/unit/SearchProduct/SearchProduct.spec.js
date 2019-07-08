import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import MyComponent from '@/components/SearchProduct/index.vue'

describe('MyComponent', () => {
  it('sets the correct default data', () => {
    expect(typeof MyComponent.data).toBe('function')
    const defaultData = MyComponent.data()
    expect(defaultData.tempText).toBe('')
  })
})