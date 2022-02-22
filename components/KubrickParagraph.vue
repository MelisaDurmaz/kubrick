<script>
export default {
  name: 'KubrickParagraph',
  functional: true,
  props: {
    size: {
      default: 'sm',
      type: String,
    },
    italic: {
      default: false,
      type: Boolean,
    },
  },
  // Created a functional component - holds no state and no instance - makes the application faster (mostly for bigger projects)
  render(createElement, ctx) {
    // Default Class Name
    const className = 'kb-paragraph'
    let classList = `${className}`

    // Default Class Name + Variants (e.g kb-paragraph--italic)
    if (ctx.props?.italic) {
      classList += ` ${className}--italic`
    }

    if (ctx.props?.size?.match(/xs|sm|md/)) {
      classList += ` ${className}--${ctx.props.size}`
    }

    return createElement(
      'p',
      Object.assign({}, ctx.data, { class: classList }),
      ctx.children,
      ctx.slots().default
    )
  },
}
</script>

<style lang="scss">
.kb-paragraph {
  // Variants
  &--italic {
    font-style: italic;
  }

  &--xs {
    font-size: $fs-xs;
    line-height: #{$fs-xs + $sp-line-h};
  }

  &--sm {
    font-size: $fs-sm;
    line-height: #{$fs-sm + $sp-line-h};
  }

  &--md {
    font-size: $fs-md;
    line-height: #{$fs-md + $sp-line-h};
  }
}
</style>
