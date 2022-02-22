<script>
export default {
  name: 'KubrickTitle',
  functional: true,
  props: {
    level: {
      default: 1,
      type: Number,
    },
  },
  // Created a functional component - holds no state and no instance - makes the application faster (mostly for bigger projects)
  render(createElement, ctx) {
    return createElement(
      `h${ctx.props.level}`,
      Object.assign({}, ctx.data, { class: 'kb-title' }),
      ctx.children,
      ctx.slots().default
    )
  },
}
</script>

<style lang="scss">
.kb-title {
  margin: 0;
  font-size: $fs-xl;
  line-height: #{$fs-xl + $sp-line-h};

  @at-root h2#{&} {
    font-size: $fs-md;
    line-height: #{$fs-md + $sp-line-h};
  }

  @at-root h3#{&} {
    font-size: $fs-sm;
    line-height: #{$fs-sm + $sp-line-h};
  }

  @at-root h4#{&} {
    font-size: $fs-xs;
    line-height: #{$fs-xs + $sp-line-h};
  }
}
</style>
