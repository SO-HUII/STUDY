// 전역 스코프, 지역 스코프
var x = 'global x';
var y = 'global y';

function outer() {
    var z = "outer's local z";
    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        var x = "inner's local x";

        console.log(x);
        console.log(y);
        console.log(z);
    }
}

outer();
// inner() 사용 > error

// 스코프 체인

/* 
    전역 스코프 <- outer의 지역 스코프 <- inner 지역 스코프
    모든 스코프는 하나의 계층적 구조로 연결되며
    모든 지역 스코프의 최상위 스코프는 전역 스코프이다.
    
    변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의
    스코프에서 시작하여 상위 스코프 반향으로 이동하며 선언된 변수를 검색한다.
    따라서 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만
    하위 스코프에서 유효한 변수를 상위 스코프에서는 참조할 수 없다.
*/