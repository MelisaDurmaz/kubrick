import { shallowMount } from '@vue/test-utils'
import Component from '@/components/KubrickField.vue'

describe('KubrickField', () => {
  const wrapper = shallowMount(Component, {
    stubs: {
      'kubrick-button': true,
      'kubrick-paragraph': true,
    },
  })

  it('Renders the default class', () => {
    expect(wrapper.classes('kb-field')).toBe(true)
  })

  it('Renders the input placeholder text when item is in edit mode', () => {
    const wrapper = shallowMount(Component, {
      stubs: {
        'kubrick-button': true,
        'kubrick-paragraph': true,
      },
      propsData: { placeholder: 'eg. Kubrick' },
      data() {
        return {
          itemEdit: true,
        }
      },
    })
    const input = wrapper.find('input')
    expect(input.attributes().placeholder).toBe('eg. Kubrick')
  })
})
