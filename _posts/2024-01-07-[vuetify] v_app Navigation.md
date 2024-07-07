---
layout: post
tag: vuetify
---
***
<br>
사이트를 만들다보니 네비게이션 바를 각 페이지의 렌더링에 올리는게 아니라
<br>
가장 상위컴포넌트의 App.vue로 옮기는게 좋을거 같다는 판단이 들었다
<br>

```
<template>
  <v-app>
    <NavigationBar />
  </v-app>
</template>

```
<br>
home/default.vue에 위치해있던 navigationBar를
<br>
root디렉토리의 App.vue로 옮기는 중 오류가 발생한다.
<br>

```
<template>
  <JejuroBarVue />
  <router-view />
</template>
```
<br>
Uncaught Error: [Vuetify] Could not find injected layout 에러가 뜬다.
<br>
이 에러는 Vuetify에서 레이아웃이 주입되지 않았다는 내용이다.

Vuetify는 애플리케이션의 구조를 정의하기 위해 레이아웃을 사용한다.
<br>
Vuetify에서는 v-app 컴포넌트가 애플리케이션의 루트 레이아웃을 정의하는 역할을 한다.
<br>
따라서 최상위 템플릿에서 v-app 컴포넌트로 앱을 감싸주어야 한다.
<br>

```
<template>
  <v-app>
	<JejuroBarVue />
	<router-view />
  </v-app>
</template>
```
<br>
이제 문제 없이 돌아간다.
nice