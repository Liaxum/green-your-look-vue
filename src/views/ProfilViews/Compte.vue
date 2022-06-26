<template>
  <v-container>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-tabs vertical style="margin-top:50px">
      <v-card flat width="200px">
        <v-tab>Informations</v-tab>
        <v-tab>Réglages</v-tab>
        <v-tab>Commandes</v-tab>
      </v-card>
      <v-tab-item>
        <v-card flat>
          <v-card-content>
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
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(date)"
                        >
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
              <v-btn class="mr-4"> Validate </v-btn>
            </v-form>
          </v-card-content>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>réglages</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>commandes</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <v-btn style="position: absolute; bottom: 0; margin-bottom: 50px">
      Déconnexion
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Mon compte",
          disabled: true,
          href: "Compte",
        },
      ],
    };
  },
};
</script>

<style>
</style>