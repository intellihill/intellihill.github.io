---
layout: post
tags: [jekyll, blog]
image: /assets/images/octojekyll.png
---

# Jekyll Blog 처음부터 구현하기

**생성일**: 2025-10-19
**태그**: #jekyll #blog

## 핵심 내용
`Jekyll`은 `Ruby`로 개발된 Static Site이다.
- `Markdown`지원을 통해 콘텐츠 작성을 쉽게하고 홈페이지 페이지로 변환할 수 있다.
- **GitHub Pages**로 무료 호스팅이 지원된다.
- 내 생각에는 기술 블로그에 가장 적합하다.

### 완전 처음부터 만들기
- `Ruby`가 설치되어있다는 가정하에 진행(3.1.4 Version)

```bash
# 완전히 비어있는 jekyll 프로젝트 생성
jekyll new blog --blank
```

### 기본 설정

```bash
# _config.yml
title: Jekyll 블로그
...
# Build settings
markdown: kramdown

```

```bash
bundle install
```

### Gemfile 생성
- 프로젝트 root directory에 `Gemfile`생성

```bash
# Gemfile 생성
touch Gemfile
```

```ruby
# Gemfile
source "https://rubygems.org"

gem "jekyll", "~> 4.3"

group :jekyll_plugins do
	gem "jekyll-feed"
	gem "jekyll-seo-tag"
end
```

## Command

### 의존성 설치

```bash
bunndle install
```
### 서버 실행

```bash
bundle exec jekyll serve
```

## Problem
- `webrick`gem이 없어서 발생하는 에러
- `Ruby`3.0 이상에서는 `webrick`이 기본으로 포함되지 않는다.

### Gemfile에 추가

```ruby
# 이 줄 추가
gem "webrick", "~> 1.8"
```

```bash
bundle install
bundle exec jekyll serve
```

## 연결 노트
- [[jekyll-pagination]]