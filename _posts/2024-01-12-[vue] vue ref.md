---
layout: post
tag: vue
---
***
vue menu(1) 글에서 만든 메뉴 가짜데이타를 axios를 통해 DB에서 가지고오도록 처리하던 과정에서
onMounted를 통해 값은 제대로 가지고오나
<br>

```
const menuItems = ref()

onMounted(async () => {
  try {
    const result = await apiRequest.menu.getList();
    menuItems = result
  } catch(e) {
    console.error('Error menu data : ' , e)
  }
})
```
이렇게 처리하였으나 해당 값이 넘어가지 않는 현상을 확인했다.  

ref는 Vue에서 반응형 데이터를 만들기 위해 사용되는 함수이다.   
ref로 생성된 객체는 value 속성을 가지고 있고, 해당 속성을 통해 실제 값을 읽거나 쓸 수 있다.  

예를 들어, 다음과 같이 ref로 변수를 생성하면:
<br>

```
import { ref } from 'vue';

const menuItems = ref();
```
<br>

menuItems는 실제 데이터가 담긴 객체를 감싸고 있다. 
실제 값을 읽거나 쓰려면 .value 속성을 사용해야 한다.

menuItems의 .value에 데이터가 할당됩니다. 따라서 .value를 사용하여 ref로 감싼 변수의 값을 읽거나 쓸 수 있다.

onMounted 훅 내에서 데이터를 가져오는 경우, 비동기적인 작업이 완료되면 해당 데이터를 menuItems.value에 할당해야 한다.
<br>

```
onMounted(async () => {
  try {
    const result = await apiRequest.menu.getList();
    menuItems.value = result;
  } catch (e) {
    console.error('Error menu data:', e);
  }
});
```

<br>

이렇게 하면 menuItems가 ref로 래핑된 변수이므로 .value를 사용하여 값을 할당 된다.  
이러한 구조는 Vue의 반응성 시스템을 통해 변경을 추적하고 UI를 업데이트하는 데 사용됩니다.