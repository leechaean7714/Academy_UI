function test() {
	window.alert("외부작성 방식!!!");
}


window.onload=function(){
	/* window.onload같은 경우 전체 페이지의 모든 외부리소스와 
	 * 이미지가 브라우저에 불리워진 이후에 작동을 하게 되어 */
	 

	alert("윈도우 로드 됨");
}