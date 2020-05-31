<template>
  <v-container>
    <v-row>
      <v-col col="10" md="8" offset-md="2" lg="6" offset-lg="3">
        <v-card class="secondary">
          <v-container fluid>
            <v-row>
              <v-col cols="5">
                <v-img :src="require('@/assets/dog-1.jpg')"></v-img>
              </v-col>
              <v-col cols="7">
                <v-card-title>
                  <div class="white--text">
                    <h2 class="mb-5">I am Roxy</h2>
                    <p>4 years old</p>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn class="pa-5" color="third white--text" to="/dog-listing/:id">
                    View Roxy
                    <v-icon class="arrow" right>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style  scoped>
.arrow:hover {
  transform: translateX(6px);
}
</style>
