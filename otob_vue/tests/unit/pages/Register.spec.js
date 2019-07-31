import { createLocalVue,  shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Register from '@/pages/main/Register.vue'
import CustomForm from '@/components/CustomForm/index.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

const wrapper = mount(Register, {
  localVue,
  slots:{
    default: [ CustomForm ]
  }
})

describe('Login', () => {
  it('onRegister: ev.preventDefault', () => {
    const onRegister = jest.fn()
    const wrapper = mount(Register, {
      methods: {
        onRegister
      }
    })
    wrapper.find('form').trigger('submit')
    expect(event.preventDefault()).toBeCalled()
  })
})