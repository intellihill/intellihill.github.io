---
layout: post
tag: vuetify
---
***
<br>
v-app-bar가 포함되어있는 navigation bar를 만들고 컴퍼넌트를 App.vue에 등록하였다.
<br>

```
// App.vue
  <v-app>
    <JejuroBarVue />
    <router-view></router-view>
  </v-app>
```
이렇게 선언하니 v-app-bar가 포함되어있는 jejuroBarVue컴퍼넌트는 각 페이지마다 공통으로 쓰게 되었다.
<br>
그런데 router-view로 가지고온 컴퍼넌트 위에 마운트되는것을 확인할 수 있었다.
<br>
이 문제를 풀기위하여 router-view가 올라가는 컴퍼넌트에 vuetify와 