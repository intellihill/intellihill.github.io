---
layout: post
tag: javascript
---
***

## 엑셀을 Json파일로 변형

### 이슈  
- 요청받은 엑셀파일을 Json형식으로 변형하여 dump data를 가지고 임시적으로 처리해야하는 생 Html 이벤트 페이지를 만들어야한다.
- 만들기에 앞서 엑셀파일을 Json형식으로 변형하는 로직을 만들어보았다.

## 소스

- 입력 버튼 만들기
<br>

```
<input type="file" id="excel-file-input" accept=".xlsx, .xls">
<button id="convert-btn">Excel to JSON</button>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"></script>
```
<br>

```
document.getElementById('convert-btn').addEventListener('click', async () => {
	const fileInput = document.getElementById('excel-file-input')
	const file = fileInput.files[0]
	if (!file) {
		alert('Please select an Excel file.')
	return;
	}

	const jsonData = await readExcelFile(file)
	if (jsonData) {
		const mergedData = mergeColumns(jsonData)
		downloadJson(mergedData, 'output.json')
	}
})
```

<br>

```
function readExcelFile(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			const data = new Uint8Array(e.target.result);
			const workbook = XLSX.read(data, { type: 'array' });
			const sheetName = workbook.SheetNames[0]; // 첫 번째 시트만 사용
			const worksheet = workbook.Sheets[sheetName];
			const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
			resolve(jsonData);
		};
		reader.onerror = (err) => {
			reject(err);
		};
		reader.readAsArrayBuffer(file);
	});
}
```

<br>

```
function mergeColumns(jsonData) {
	return jsonData.map(row => {
		const mergedValue = row['지역']+' '+row['학교명'];
		return { 'school': mergedValue };
	});
}
```

<br>

```
function downloadJson(jsonData, fileName) {
	const jsonString = JSON.stringify(jsonData, null, 2);
	const blob = new Blob([jsonString], { type: 'application/json' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
```