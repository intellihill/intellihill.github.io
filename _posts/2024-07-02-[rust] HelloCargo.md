---
layout: post
tag: rust
---
***

[공홈-Hello, cargo!](https://doc.rust-lang.org/book/ch01-03-hello-cargo.html)

## Hello, cargo!
<br>
### Cargo
<br>
- Cargo is Rust's build system and package manager.
<br>
Let’s recap what we’ve learned so far about Cargo:
<br>
- We can create a project using 'cargo new'.
- We can build a project using 'cargo build'.
- We can build and run a project in one step using 'cargo run'.
- We can build a project without producing a binary to check for errors using 'cargo check'.
- Instead of saving the result of the build in the same directory as our code, Cargo stores it in the _target/debug_ directory.
### Creating a Project with Cargo
<br>

```
$ cargo new hello_cargo
$ cd hello_cargo
```
<br>
### Building and Running a Cargo Project
<br>
#### Build
<br>

- This command creates an executable file in _target/debug/hello_cargo
<br>

```
$ cargo build
```
<br>
#### Run
<br>
- Using 'cargo run' is more convenient than having to remember to run `cargo build` and then use the whole path to the binary, so most developers use 'cargo run'
<br>

```
$ cargo run
```
<br>

#### Check
<br>
- Cargo also provides a command called 'cargo check'. This command quickly checks your code to make sure it compiles but doesn’t produce an executable
- 'cargo check' is much faster than 'cargo build' because it skips the step of producing an executable
<br>

```
$ cargo check
```


