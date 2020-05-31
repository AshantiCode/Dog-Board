<template>
  <v-container>
    <v-row>
      <v-col cols="10" sm="6" offset-md="3">
        <v-card>
          <v-card-title primary-title>
            <h4 class="primary--text">Roxy die schöne</h4>
          </v-card-title>
          <v-img :src="require('@/assets/dog-1.jpg')" height="400px"></v-img>
          <v-card-subtitle class="third--text"
            >4 years old | happy | friendly | beginner</v-card-subtitle
          >
          <v-card-text
            >She is a fluffy puffy dogg that is seeking for a Home! Dont wait to
            long!!</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="third white--text" class="pa-5"
              >Save To Favorite</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
