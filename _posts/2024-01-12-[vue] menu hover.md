---
layout: post
tag: vue
---
***

### Menu - hover
<br>
#### 기능설명
- 기본 메뉴 에서 hovering을 하였을 때 하단에 menulist가 뜨도록 만들고 싶었다.
- 처음 페이지 로딩시 menu와 menulist는 상위 컴퍼넌트에서 가져온다.

<br>

```
<v-btn size="large" v-for="item in menuItems" :key="item.text">
	{ item.text }
</v-btn>
```

<br>
- 가지고온 데이타를 화면에 뿌려주기위한 v-for문을 이용한 메뉴 elements
<br>

```
	<template v-slot:activator="{ props }">
		<v-btnv-bind="props">
			{ v.text }
		</v-btn>
	</template>
	
	<v-list>
		<v-list-item v-for="a in v.items">
			<v-btn>{ a.text }</v-btn>
		</v-list-item>
	</v-list>
</v-menu>
```
<br>

메뉴 밑의 하위 구조를 버튼으로 나타나게 하는데 애를 먹었다   

방법은 간단하다.  

v-menu에서 menuItems에 대한 v값을 메뉴 리스트를 화면에 뿌려지는데  
v에 대한 v-for로 메뉴 하위구조를 만들면 된다  
메뉴 하위구조에 대하여 v-for의 위치에 따라 하위 리스트가 다르게 표현되니 이 점을 주의해야함  