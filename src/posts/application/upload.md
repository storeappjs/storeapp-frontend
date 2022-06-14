---
title: 'Publish your Application'
---

> 번역이 아직 진행되지 않았습니다.

`Hello, World!`를 출력하는 간단한 어플리케이션을 만들어보겠습니다.

## 1. 프로젝트 생성

`@storeapp/init`를 이용하면 더욱 더 쉽게 프로젝트를 설정할 수 있습니다.

```bash
$ storeapp install storeapp-init
$ storeapp run storeapp-init
```

그 다음 `storeapp.config.json`를 수정해주시면 됩니다.

## 2. 메인 JS 파일 생성

이제 Hello, World를 출력하는 프로그램을 만들어보겠습니다.

```js
// main.js
console.log('Hello, World!');
```

그 다음 `storeapp.config.json` 파일의 `main` 값을 `main.js`로 바꿔주면 이제 어플리케이션이 완성되었습니다.

## 3. 업로드!

> (!) 아직 업로드는 지원하지 않습니다. [Github](https://github.com/storeappjs/storeapp)에 직접 업로드 요청을 해주세요.
