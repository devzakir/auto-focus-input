<template>
  <div>
    <vue-simple-suggest
      v-model="chosen"
      mode="input"
      display-attribute="name"
      value-attribute="id"
      placeholder="Search location or hotel name..."
      :list="getList"
      :max-suggestions="10"
      :min-length="3"
      :filter-by-query="false"
      @select="onSuggestSelect"
    >
      <div slot="suggestion-item" slot-scope="{ suggestion }">
        {{ suggestion.name }} {{ suggestion.type }}
      </div>
    </vue-simple-suggest>
  </div>
</template>

<script>
import VueSimpleSuggest from "vue-simple-suggest";
import "vue-simple-suggest/dist/styles.css";

export default {
  components: {
    VueSimpleSuggest,
  },
  data() {
    return {
      chosen: "",
      selected: null,
    };
  },

  methods: {
    getList(inputValue) {
      return new Promise((resolve, reject) => {
        let url = `https://7y3n67ruo0.execute-api.eu-west-2.amazonaws.com/beta/?term=${inputValue}`;
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              reject();
            }
            response
              .json()
              .then((json) => {
                resolve(json.data.regions.concat(json.data.hotels));
              })
              .catch((e) => {
                console.log("rej 1: ", e);
                reject(e);
              });
          })
          .catch((error) => {
            console.log("rej 2");
            this.loading = false;
            reject(error);
          });
      });
    },

    onSuggestSelect(suggest) {
      if (!suggest) return;
      this.selected = suggest;
      console.log(suggest.name);
      let modal = document.getElementById("search-modal");
      modal.checked = false;
    },
  },
};
</script>

<style>
.vue-simple-suggest.designed .input-wrapper input {
  @apply !important w-full input input-primary input-bordered placeholder-gray-700 font-bold;
}
</style>