<template>
  <form @submit.prevent="$emit('submit')">
    <div v-if="errors.length !== 0">
      <ul v-for="e in errors" :key="e">
        <li><span style="color: red; ">{{ e }}</span></li>
      </ul>
    </div>

    <div>
      <label>日時</label>
      <v-date-picker/>
      <v-time-picker/>
    </div>

    <div>
      <label>タイトル</label>
      <input type="text">
    </div>

    <div>
      <label>場所</label>
      <input type="text">
    </div>

    <div>
      <label>説明</label>
      <input type="text">
    </div>

    <v-btn :disabled="!valid" color="primary" type="submit">作成</v-btn>
  </form>
</template>

<script>
export default {
  name: 'EventForm',
  props: {
    event: {},
    errors: {}
  },
  data: () => {
    return {
      valid: true
    }
  },
  updated () {
    if (this.$refs.form) {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
