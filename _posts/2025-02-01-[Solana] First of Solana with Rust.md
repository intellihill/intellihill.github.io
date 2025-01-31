---
layout: post
tag: Solana
---
***
<br>


## 깃 설치
<br>

Github에서 Clone한 후 
```
$ cargo build
```
<br>
cargo build를 통해서 의존성을 설치하는 중 첫번째 에러가 발견되었다.

<br>

```
error: failed to run custom build command for etcd-client v0.11.1
```
<br>
etcd-client v0.11.1의 커스텀 빌드 명령이 실패했다는 내용이다.

protoc가 맥북에 설치되어있지 않아 해당 에러가 노출되고 있다.

etcd-client는 Protocol Buffers를 사용하여 빌드가되고 이를 위해서 protoc 컴파일러가 필요하다.

맥북인 경우 brew를 통해 protobuf를 설치하여 준다.
<br>
```
brew install protobuf
```
<br>

설치 후 의존성이 잘 설치되는걸 확인할 수 있다.

