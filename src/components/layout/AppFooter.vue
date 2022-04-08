<template>
    <v-footer color="primary lighten-2" padless>
        <v-row justify="center" no-gutters>
            <v-card flat tile class="primary lighten-2 white--text">
                <v-col class="white--text py-4" cols="12">
                    <v-card-text>
                        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </v-card-text>
                </v-col>

                <v-divider></v-divider>

                <v-col class="primary lighten-1 py-2 white--text" cols="12">
                    <v-card-text class="white--text">
                        © {{ new Date().getFullYear() }} Green Your Look
                    </v-card-text>

                    <v-card-text >
                      <v-btn text small color="white">Conditions Générales</v-btn>
                      <v-btn text small color="white">Confidentialité et cookies</v-btn>
                      <v-btn text small color="white">Mentions légales</v-btn>
                    </v-card-text>
                </v-col>
            </v-card>
        </v-row>
    </v-footer>


  <!-- <v-footer dark padless>
    <v-card flat tile class="primary lighten-2 white--text">
      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider style="border-width: 2px"></v-divider>
      <v-card-text class="white--text">
       <strong>© {{ new Date().getFullYear() }} Green Your Look</strong>
      </v-card-text>
    </v-card>
  </v-footer> -->

</template>

<script>
	export default {
		name: "AppFooter",
    }
</script>
