<template>
  <div class="kb-index">
    <div class="kb-index__wrapper">
      <kubrick-title class="kb-index__header">
        My <span>Interests </span>
      </kubrick-title>
      <form class="kb-index__form">
        <kubrick-field
          v-model="fullName"
          name="fullName"
          required
          placeholder="Your Name"
          @input.native="fullName = $event.target.value"
        >
          Full Name
        </kubrick-field>
        <kubrick-field
          v-model="favMovie"
          name="favMovie"
          placeholder="Your favorite movie"
          @input.native="favMovie = $event.target.value"
        >
          Favorite movie
        </kubrick-field>
        <kubrick-field
          v-model="favBook"
          name="favBook"
          placeholder="Your favorite book"
          @input.native="favBook = $event.target.value"
        >
          Favorite book
        </kubrick-field>

        <div class="kb-index__submit">
          <template v-if="submitting">
            <kubrick-loader />
          </template>
          <template v-else>
            <kubrick-button
              :disabled="!fullName"
              @click.native.prevent="submitData"
            >
              Submit
            </kubrick-button>
          </template>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      fullName: '',
      favMovie: 'Jumanji (1995)',
      favBook: 'Mavi saçlı kız',
      submitting: false,
    }
  },
  methods: {
    submitData() {
      // Using a setTimeout to display the loader as I have no api response - logging the data to console.
      this.submitting = true
      // eslint-disable-next-line
      console.log('Submitting Form Details', {
        fullName: this.fullName,
        favMovie: this.favMovie,
        favBook: this.favBook,
      })
      setTimeout(() => {
        this.submitting = false
      }, 800)
    },
  },
}
</script>

<style lang="scss">
// Custom Vars
$sc-lg: 50vw;
$sc-sm: 80vw;
$sc-lg-fs: 8vw;
$sc-sm-fs: 15vw;

.kb-index {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__wrapper {
    border: 1px solid transparentize($black, 0.8);
    border-radius: $br-sm;
    padding: $sp-md;
    width: $sc-sm;

    @media (min-width: $screen-sm) {
      width: $sc-lg;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;

    span {
      color: $dusty-pink;
      font-size: $sc-sm-fs;
      line-height: $sc-sm-fs + 2vw;

      @media (min-width: $screen-sm) {
        font-size: $sc-lg-fs;
        line-height: $sc-lg-fs + 2vw;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;

    [type='submit'] {
      margin-top: $sp-sm;
    }

    .kb-field {
      &:not(:last-of-type) {
        padding-bottom: $sp-sm;
        margin-bottom: $sp-md;
        border-bottom: 1px solid transparentize($black, 0.8);
      }
    }
  }

  &__submit {
    display: flex;
    align-items: center;
    height: $loader-h-w;
  }
}
</style>
