<template>
  <div class="kb-field">
    <div class="kb-field__header" :required="required && !inputVal">
      <kubrick-paragraph size="md"><slot /></kubrick-paragraph>
      <kubrick-button size="xs" @click.native.prevent="itemEdit = !itemEdit">
        {{ itemEdit ? 'X' : 'Edit' }}
      </kubrick-button>
    </div>

    <template v-if="itemEdit">
      <input
        v-model="inputVal"
        type="text"
        :name="name"
        :disabled="disabled"
        :required="required"
        :placeholder="placeholder"
      />
    </template>
    <template v-else>
      <kubrick-paragraph :size="inputVal ? 'sm' : 'xs'" :italic="!inputVal">
        {{ inputVal ? inputVal : `Click 'Edit' to add item` }}
      </kubrick-paragraph>
    </template>
  </div>
</template>

<script>
export default {
  name: 'KubrickField',
  props: {
    name: {
      default: null,
      type: String,
    },
    value: {
      default: null,
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    required: {
      default: false,
      type: Boolean,
    },
    placeholder: {
      default: null,
      type: String,
    },
  },
  data() {
    return {
      inputVal: this.value,
      itemEdit: false,
    }
  },
  watch: {
    // Can't mutate props so I set a local variable to use in v-model
    value(newVal) {
      this.inputVal = newVal
    },
  },
}
</script>

<style lang="scss">
.kb-field {
  width: 100%;
  padding: $sp-xs 0;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: $sp-sm;

    &[required] {
      .kb-paragraph {
        display: flex;
        align-items: center;

        &:after {
          content: '(required)';
          margin-left: $sp-sm;
          color: $dusty-pink;
          font-size: $fs-xs;
        }
      }
    }
  }

  input {
    padding: $sp-md;
    border: none;
    border-radius: $br-xs;
    width: 100%;
    box-sizing: border-box;
    background-color: transparentize($dusty-pink, 0.8);
    color: $black;

    &::placeholder {
      font-size: $fs-xs;
      color: transparentize($dusty-pink, 0.3);
    }

    &::-moz-selection,
    &::selection {
      background-color: $dusty-pink;
      color: $black;
    }
  }
}
</style>
