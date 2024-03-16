---
layout: post
tag: vue
---
***

## 실시간 검색에 따른 리스트 불러오기 (1)
- (1)이라고 명명한 이유는 실시간 리스트로 가지고오기는 하지만 너무 통신하는 동안의 동작이 너무 느리다
- 이걸 이제 다듬으면서 좀 더 나은 방식으로 가꿀 예정이다


<!-- ## 해결방법

- 입력에 대한 학교 리스트를 실시간으로 가지고오기

<br>

```
<q-input
  class="inp-st1"
  filled
  v-model="test"
>
</q-input>
```
<br>
```
const { execute: checkTest } = useMutation(FIND_TEST)
const test = ref('')
const testList = ref<School[] | null>(null)

watch(test, async(newVal, oldVal) => {
  const result = await checkTest({ testValue: newVal})
  testList.value = [...result.data.findTest]
  console.log(testList.value)
})
``` -->
