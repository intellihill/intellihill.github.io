---
layout: post
tags: [jekyll, pagination, blog]
image: /assets/images/octojekyll.png
---
# Jekyll Blog에서 Paginator 구현하기

**생성일**: 2025-10-16
**태그**: #jekyll #pagination #jekyll-plugin #seo

## 핵심 내용
`Jekyll`의 `jekyll-paginate`는 포스트 목록을 여러 페이지로 나누는 기능이다
- index.html에서 작동한다
- **단일 컬렉션**(posts)만 페이지네이션 
- **단일 경로**만 지원 (보통 홈페이지) 
- 심플함을 추구하는 설계

```
전체 포스트 20개 → per_page: 5 설정 
→ 페이지 1: 포스트 1-5 
→ 페이지 2: 포스트 6-10 
→ 페이지 3: 포스트 11-15
```
### 기본 설정

```ruby
# Gemfile
...
group :jekyll_plugins do
	gem "jekyll-paginate"
	...
end
```

```bash
bundle install
```

```yaml
# _config.yml
plugins:
	- jekyll-paginate
# 페이지당 포스트 개수
paginate: 5
# URL 패턴
paginate_path: "/page/:num/"
```


### `Paginator` 변수

```
<!-- 현재 페이지의 포스트 목록 --> 
paginator.posts 
<!-- 현재 페이지 번호 --> 
paginator.page 
<!-- 전체 페이지 수 --> 
paginator.total_pages
<!-- 전체 포스트 수 --> 
paginator.total_posts 
<!-- 페이지당 포스트 수 --> 
paginator.per_page 
<!-- 이전 페이지 번호 (없으면 nil) --> 
paginator.previous_page 
<!-- 이전 페이지 경로 --> 
paginator.previous_page_path 
<!-- 다음 페이지 번호 (없으면 nil) --> 
paginator.next_page 
<!-- 다음 페이지 경로 --> 
paginator.next_page_path 
```