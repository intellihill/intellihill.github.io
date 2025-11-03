---
layout: post
tags: [claude]
image: /assets/images/claude.png
---

# Claude Multiple conversational turns

**생성일**: 2025-11-04
**태그**: #Cluade #MessagesAPI 

## 핵심 내용
`Claude Messages API`에서 `Multiple conversational turns`는 여러 차례의 대화를 이어가는 방식을 말한다. 단일 요청-응답이 아닌, 맥락을 유지하면서 연속적인 대화를 구현하는 방법이다.

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
	apiKey: process.env.ANTHROPIC_API_KEY,
});
// 메시지 타입 정의
type Message = {
	role: "user" | "assistant";
	content: string;
};

// 대화 히스토리 저장
const conversationHistory: Message[] = [];

async function chat(userMessage: string): Promise<string> {
	// 사용자 메시지 추가
	conversationHistory.push({
		role: "user",
		content: userMessage,
	});
	
	// API 호출
	const response = await client.messages.create({
		model: "claude-sonnet-4-5-20250929",
		max_token: 1024,
		messages: conversationHistory,
	});
	
	// Assistant 응답 추출 및 저장
	const assistantMessage = response.content[0].text;
	conversationHistory.push({
		role: "assistant",
		content: assistantMessage,
	});
	
	return assistantMessage;
}

async function main() {
	const response1 = await chat("안녕하세요, TypeScript에 대해 알려주세요.");
	const response2 = await chat("간단한 예제 코드를 보여주세요");
}

main():
```
### 주요 규칙

- 역할 교대: `user`와 `assistant`역할이 번갈아 나타나야 합니다
- 시작은 `user`로: 대화는 항상 `user`메시지로 시작해야 합니다.
- 끝도 `user`로: 마지막 메시지도 `user`역할이어야 합니다.

### 토큰 관리
- 대화가 길어질수록 입력 토큰이 증가하므로, 비용과 토큰 한도를 고려해야 한다.


## 연결 노트