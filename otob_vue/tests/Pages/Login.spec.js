import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Login from '@/pages/main/Login.vue'
import CustomForm from '@/components/CustomForm/index.vue'

// beforeEach( () => {
//     const
// })
const wrapper = shallowMount(Login, {
    slots:{
        default: [CustomForm]

    }
})

describe('Login', () => {
  it('render a div', () => {
      const wrapper = shallowMount(Login)
      expect(wrapper.contains('div')).toBe(true)
  })


  it('slot title: renders a default title', () => {
      const title = 
    expect(typeof SearchProduct.data).toBe('function')
    const defaultData = SearchProduct.data()
    expect(defaultData.tempText).toBe('')
  })
})