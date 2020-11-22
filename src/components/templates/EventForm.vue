<template>
  <v-container>
    <v-row justify="center">
      <v-card :loading="loading" class="px-3" width="512px">
        <v-form ref="form" v-model="valid" @submit.prevent="submit">
          <v-card-title class="pt-3 px-2">
            <h1>イベントを{{ formType }}</h1>
          </v-card-title>

          <v-card-text class="mt-3">
            <v-row justify="center" class="px-2">
              <v-col xs6 class="py-0 pr-2 pl-0">
                <v-menu
                  :disabled="loading"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="event.date"
                      label="日付"
                      prepend-icon="event"
                      background-color="grey lighten-5"
                      filled
                      readonly
                      v-on="on"
                    />
                  </template>
                  <v-date-picker v-model="event.date"/>
                </v-menu>
              </v-col>
              <v-col xs6 class="py-0 pr-0 pl-2">
                <v-menu
                  :disabled="loading"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="event.time"
                      label="時間"
                      prepend-icon="access_time"
                      background-color="grey lighten-5"
                      filled
                      readonly
                      v-on="on"
                    />
                  </template>
                  <v-time-picker v-model="event.time" format="24hr"/>
                </v-menu>
              </v-col>
            </v-row>

            <v-row justify="center" class="px-2">
              <v-text-field
                v-model="event.title"
                label="タイトル"
                maxlength="30"
                :disabled="loading"
                :rules="[v => !!v || 'タイトルを入力してください']"
                color="primary"
                background-color="grey lighten-5"
                filled
                required
              />
            </v-row>

            <v-row justify="center" class="px-2">
              <v-text-field
                v-model="event.place"
                label="場所"
                maxlength="30"
                :disabled="loading"
                color="primary"
                background-color="grey lighten-5"
                filled
              />
            </v-row>

            <v-row justify="center" class="px-2">
              <v-textarea
                v-model="event.text"
                label="詳細"
                maxlength="2000"
                :disabled="loading"
                color="primary"
                background-color="grey lighten-5"
                filled
              />
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
              type="submit"
              :disabled="!valid"
              color="primary"
              block
            >{{ formType }}</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EventForm',
  props: {
    loading: Boolean,
    event: {},
    errors: {},
    formType: {}
  },
  data: () => ({
    valid: true,
  }),
  methods: {
    submit: function () {
      if (this.$refs.form.validate()) {
        this.$emit('submit', this.event)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 512px) {
  .container {
    padding: 0;
  }
}
</style>
