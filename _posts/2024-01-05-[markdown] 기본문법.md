---
layout: post
tag: markdown
---
***
<br>
chapter.section.sub-section
<br>
### 1. 마크다운

[마크다운가이드](https://www.markdownguide.org/)
<br><br>

#### 1.1 장점  
- 간결하다.
- 별도의 도구없이 작성가능하다.
- 다양한 형태로 변환이 가능하다.
- 텍스트(Text)로 저장되기 때문에 용량이 적어 보관이 용이하다.
- 텍스트파일이기 때문에 버전관리시스템을 이용하여 변경이력을 관리할 수 있다.
- 지원하는 프로그램과 플랫폼이 다양하다.
<br><br>

#### 1.2 단점  
- 표준이 없다.
- 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 다르다.
- 모든 HTML 마크업을 대신하지 못한다.
<br><br>

### 2. 마크다운 Syntax
[마크다운문법](https://www.markdownguide.org/basic-syntax/)
<br><br>

#### 2.1 Header
<br>
```
# this is a H1
## this is a H2
### this is a H3
#### this is a H4
##### this is a H5
###### this is a H6
```
<br>

#### 2.2 Bold
```
I just love **bold text**
```
<br>

#### 2.3 Italic
```
A *cat* meow
```
<br>

#### 2.4 Bold and Italic
```
really ***very*** important text.
```
<br>

#### 2.5 Lists
```
// Ordered Lists
1. First item
2. Second item
3. Third item

// Unordered Lists
- First item
- Second item
- Third item
```
<br>

#### 2.6 CodeBlock

[Syntax highlighting](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting)
<br><br>
<pre><code>
```
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
</code></pre>
<br>

#### 2.7 Formatting Links

기본기능은 아니고 kramdown Markdown 프로서세에서 coderay를 사용하여 강조하는것 이다.
<br><br>
```
[Title](link)
[github](https://github.com/intellihill)
```
[github](https://github.com/intellihill)
<br>
<br>
#### 2.8 Linking images
<br><br>
```
![title](/assets/images/brewInstall.png)
```
<br>
![title](/assets/images/brewInstall.png){: width="100%" height="100%"}

