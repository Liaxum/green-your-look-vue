<template>
  <v-container>
    <v-row align="center">
      <v-expansion-panels accordion focusable>
        <v-col
          cols="12"
          md="3"
          sm="6"
          xs="12"
          v-for="(lookF, l) in looksFemmes"
          :key="l"
        >
          <v-expansion-panel style="max-width: 220px">
            <v-expansion-panel-header expand-icon="" style="padding: 0">
              <v-card max-width="220">
                <v-img src="@/assets/femmes/basique.png" alt="look"></v-img>
                <v-card-title>
                  {{ lookF.name }}
                  <v-spacer></v-spacer>
                  <span>{{ lookF.price }}</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-item-group style="display: flex; justify-content: center">
                  <v-item
                    v-for="(lab, i) in lookF.label"
                    :key="i"
                    class="mx-2 my-4"
                  >
                    <v-img
                      :src="require('@/assets/icons/' + lab + '.png')"
                      alt="bio"
                      max-width="30"
                    ></v-img>
                  </v-item>
                </v-item-group>
              </v-card>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ lookF.name }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-col>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "LookCard",
  data() {
    return {
      looksFemmes: [
        { name: "Look 1", img: "", price: "36 €", label: ["bio", "recycle"] },
        {
          name: "Look 2",
          img: "",
          price: "36 €",
          label: ["bio", "europe", "vegan"],
        },
        { name: "Look 3", img: "", price: "36 €", label: ["bio"] },
        { name: "Look 4", img: "", price: "36 €", label: ["bio", "recycle"] },
        { name: "Look 5", img: "", price: "36 €", label: ["bio", "recycle"] },
        {
          name: "Look 6",
          img: "",
          price: "36 €",
          label: ["bio", "europe", "vegan"],
        },
        { name: "Look 7", img: "", price: "36 €", label: ["bio"] },
        { name: "Look 8", img: "", price: "36 €", label: ["bio", "recycle"] },
      ],
    };
  },
};
</script>

<style scoped>
</style>