<template>
  <div style="width: 100%">
    <h1>Mon compte</h1>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="Prénom" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="Nom" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="E-mail" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Date de naissance"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field label="Mot de passe" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Confirmation mot de passe"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn class="mr-4">
        Validate
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>