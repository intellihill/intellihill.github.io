---
layout: post
tag: vue
---
***
뷰 컴퍼넌트를 이용한 메뉴항목 띄우기

뷰 navigation bar에서 menu에 대한 데이타를 가데이타로 만들어서

해당 데이타를 menu 자식 컴퍼넌트에게 props 전달하고 그 데이타를 메뉴에 나타낸다  

```
// 부모컴퍼넌트

<template>
  <menu-button :menuItems="menuItems" :isMobile="isMobile"/>
</template>

<script setup>
  import menuButton from '../components/common/Menu.vue'

  const menuItems = ref([
    {
      id: 1,
      name: 'about',
      text: '소개'
    },
    {
      id: 2,
      name: 'search',
      text: '항공권 검색'
    },
    {
      id: 3,
      name: 'board',
      text: '게시판'
    }
  ])
</script>
```
위의 데이타를 부모 컴퍼넌트에서 생성하고 or 디비에서 가지고오고

그 값을 자식에게 전달한다

```
// 자식 컴퍼넌트

<template>
  <v-menu open-on-hover v-for="v in menuItems" :key="v.id">
    <template v-slot:activator="{ props }">
      <v-btn
        @click="move(v)"
        v-bind="props"
      >
        {{ v.text }}
      </v-btn>
    </template>
  </v-menu>
</template>

<script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    menuItems: Array
  })
</script>
```
<br>
이렇게하면 부모컴퍼넌트에서 가지고온 데이타를 array형식으로 자식컴퍼넌트에게 넘겨주고  
그 데이타를 사용하여 navigation bar에 메뉴를 나타낼 수 있다.  

심화과정으로 
이렇게 데이타 구조를 짜니까 메뉴밑에 2depth로도 나타낼 수 있었다.
<br>

```
  const menuItems = ref([
    {
      text : '소개',
      items :[
        { text : 'test1' },
        { text : 'test2' },
        { text : 'test3' }
      ]
    },
    {
      text : '항공권 검색',
      items :[
        { text : 'text1' },
        { text : 'text2' }
      ]
    },
    {
      text : '게시판',
      items :[
        { text : 'text1' },
        { text : 'text2' },
        { text : 'text3' },
        { text : 'text4' }
      ]
    }
  ])
```
