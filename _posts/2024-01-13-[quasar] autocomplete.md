---
layout: post
tag: quasar
---
***
<br>

## 이슈
- quasar component를 이용한 이메일 입력란을 만들기
- 이메일을 입력하고 @를 누르면 이미존재하는 이메일 값인 whitelist를 입력한 이메일 값과 select리스트로 보여주기
- 보여준 이메일에서 @이후 이어서 이메일을 입력하면 이메일의 값이 똑같은것만 filter되어서 완성된 이메일로 보여주기

<br>

## 문제점
- quasar 2ver에서의 문제인지는 모르겠지만 <q-select>에서 use-input 옵션을 사용하면 v-model에 실시간 바인딩이 안된다.

<br>

[참고-quasar-select](https://quasar.dev/vue-components/select)

```
<q-select
  class="inp-st1"
  filled
  v-model="model"
  use-input
  hide-selected
  fill-input
  input-debounce="0"
  :options="options"
  @filter="filterFn"
  @input-value="setModel"
>
  <template v-slot:no-option>
    <q-item>
      <q-item-section>
        No results
      </q-item-section>
    </q-item>
  </template>
</q-select>
```
<br>

### QSelect API
- 사용한 API

#### Props
<br>
filled: Boolean
Use 'filled' design for the field
<br>
use-input: Bollean
Use an input tag where users can type
<br>
hide-selected: Boolean
Hids selection; Use the underlying input tag to hold the label(instead of showing it to the right of the input) of the selected option;
Only works for non 'multiple' Selects
<br>
fill-input: Boolean
Fills the input with current value; Useful along with 'hide-selected"; Does NOT works along withe 'multiple' selection
<br>
input-debounce: Number | String
Debounce the input model update with an amount of milliseconds (also affects the 'filter' event, if used)
<br>
options: Array
Abvailable options that the user can select from. For best performance freeze the list of options.
<br>
#### Events

@filter: (inputValue, doneFn, abortFn) => void
Emitted when user wants to filter a value

@input-value: (value) => void
Emitted when the value in the text input changes

<br>

## 해결방법

- v-model을 이용한 실시간 binding이 안되는 상황이다.
- v-model의 값을 @input-value를 통해서 직접 넣어주는 방식으로 바인딩을 살렸다.

[출처-mdn-Array.prototype.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)


- 초기값 빈배열 []을 가지고있는 reduce
<br>

```
const stringOptions = [
  'gmail.com', 'naver.com', 'kakao.com'
].reduce((acc:any, opt:string) => {
  acc.push(opt)
  return acc
}, [])
```
<br>
- stringOptions Array.reduce() 를 이용하여 map으로 options를 처리한다.
<br>

```
const options = ref(stringOptions);

options.value = stringOptions
  .filter((v:any) => v.toLowerCase().startsWith(postfix.toLowerCase()))
  .map((v:any) => `${prefix}@${v}`)

```



