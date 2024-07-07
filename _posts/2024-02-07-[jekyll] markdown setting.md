---
layout: post
tag: jekyll
---
***

출처
[markdown-guide](https://www.markdownguide.org/tools/jekyll/)
[jekyll-markdown](https://jekyllrb.com/docs/configuration/markdown/)
[GitHub Flavored Markdown (GFM) processor](https://github.com/kramdown/parser-gfm)

기본적으로, jekyll에 gem 관련 설정을 인식시키고싶다면 jekyll 설정에서 요구하는 종속성이 설치되어 있어야한다. kramdown의 종속성을 글로벌로 설치하는 방법도 있으나, 여기서는 해당 블로그 프로젝트에 직접 추가하도록 하겠다.

<br>
```Gemfile
gem 'kramdown'
gem 'kramdown-syntax-coderay'
```
<br>
```terminlCommand
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```


<br>
By default, Jekyll uses the [kramdown](https://kramdown.gettalong.org/) Markdown processor with stock settings.
GFM supports a couple additional Kramdown options, documented by [kramdown-parser-gfm](https://github.com/kramdown/parser-gfm)
These options can be used directly in your Kramdown Jekyll config, like this:
<br>
-  _config.yml

```
kramdown: gfm_quirks: [paragraph_end]
```
<br>
- _config.yml

```
markdown: kramdown
kramdown:
  syntax_highlighter: coderay
  coderay_line_numbers: nil // coderay line number delete
```
<br>
[coderay-linenumber](https://github.com/jekyll/jekyll/issues/359) 지우는 법

coderay 강조구문이 들어가서 코드구문을 쓸 수 있지만 default값이 투명하기 때문에 강조구문 블럭이 보이지는 않는다. 강조구문이 보이게 하기위해선 위의 syntax_highlighter: coderay로 설정하고 그 값에 따른 css-class를 선언해주면 된다
<br>
```
.highlighter-coderay {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
}
```
