---
layout: post
tag: vuetify
---
***
<br>
v-app-bar가 포함되어있는 navigation bar를 만들고 컴퍼넌트를 App.vue에 등록하였다.
<br>

[참조](https://vuetifyjs.com/en/components/grids/#usage)
<br>
Vuetify는 flexbox가 사용된 12point grid system을 사용한다.  

Grid는 application's content에서 특정 layouts을 만들기위해 사용된다.  
<br>
```
<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          One of three columns
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
```
<br>

### Sub-components

#### v-container
v-container provides the ability to center and horizontally pad your site’s contents.  
You can also use the fluid prop to fully extend the container across all viewport and device sizes.   
Maintains previous 1.x functionality in which props are passed through as classes on v-container  
allowing for the application of helper classes (such as ma-#/pa-#/fill-height) to easily be applied.


