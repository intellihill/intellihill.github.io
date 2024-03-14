---
layout: post
tag: vue
---
***
### 조건에 따른 버튼 비활성화

- emailTest값이 비어있을 떄 disable  

<br>

```
const emailTest = ref()
```
<br>
```
<q-btn
	v-bind:disable="emailTest == ''"
>
</q-btn>
```