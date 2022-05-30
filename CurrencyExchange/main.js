// 1. 박스 2개 만들기
// 2. 드랍다운 리스트 만들기
// 2. 환율정보 들고오기
// 3. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜 
// 4. 금액을 입력하면 환전이 된다
// 5. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨 
// 6. 숫자를 한국어로 읽는 법
// 7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용된다


let currencyRatio = { // 객체타입 : 넣고싶은 값이 여러개일 경우 사용
    USD:{
        USD:1,
        KRW:1262.64,
        JPY:127.32,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00079,
        JPY:0.10,
        unit:"원"
    },
    JPY:{
        JPY:1,
        KRW:9.92,
        USD:0.0079,
        unit:"엔"
    }
}

let fromCurrency = "USD";
let toCurrency = "USD";

document.querySelectorAll('#from-currency-list a').forEach((menu) => menu.addEventListener('click',function(){
    // 1. 버튼을 가져온다
    // 2. 버튼에 값을 바꾼다
    document.getElementById('from-button').textContent = this.textContent;
    // 3. 선택된 currency값을 변수에 저장해준다
    fromCurrency = this.textContent;
    convert(); // 4,5번 해결부분
})
);

document.querySelectorAll('#to-currency-list a').forEach((menu) => menu.addEventListener('click',function(){
    document.getElementById('to-button').textContent = this.textContent;
    toCurrency = this.textContent;
    re_convert();
})
);

// 1. 키를 입력하는 순간
// 2. 환전이 되서
// 3. 환전된 값이 보인다.

function convert() {
    // 1.환전
    // 2.얼마를 환전? 가지고 있는 돈이 뭔지, 바꾸고자 하는 돈이 뭔지
    // 돈*환율 = 환전금액
    let amount = document.getElementById('from-input').value;
    let convertedAmout = amount * currencyRatio[fromCurrency][toCurrency];
    console.log(convertedAmout);
    document.getElementById('to-input').value = convertedAmout;
}

function re_convert() {
    // 1.환전
    // 2.얼마를 환전? 가지고 있는 돈이 뭔지, 바꾸고자 하는 돈이 뭔지
    // 돈*환율 = 환전금액
    let amount = document.getElementById('to-input').value;
    let convertedAmout = amount * currencyRatio[toCurrency][fromCurrency];
    console.log(convertedAmout);
    document.getElementById('from-input').value = convertedAmout;
}
// 소스코드 보고 부족한 부분 이해하고 css정리하기


// 1. 드랍다운 리스트에 값이 바뀔때마다
// 2. 환전을 다시한다.

function convert() {
    let amount = document.getElementById('from-input').value
    console.log('돈은', amount);
}
