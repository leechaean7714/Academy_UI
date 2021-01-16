function makeTable(elem) { // elem = empRowList

	$table = $("<table border=1>");

	// 앞에 $가 붙어도 그냥 변수
	// 앞에 var가 안붙으면 호이스팅이라고 해서 변수만 선언하고 할당x(=초기화x)
	// : 변수를 사용은 할 수 있으니 초기화가 안되어있기 때문에 값을 출력하면 undefined로 표시된다.
	// 사용 이유 : jquery selector 혹은 새롭게 선언한 객체를 담아두고 변수를 통해 참조해야 하는 경우,
	// 변수명 앞에 $를 붙여서 jquery변수로 사용하면 보다 쉽게 객체 사용이 가능하다.

	for (var i = 0; i < 1; i++) {
		$tr = $("<tr>");
		for (var j = 0; j < elem.eq(0).children().length; j++) {

			$td = $("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
			console.log(elem.eq(0).children().eq(j).prop("tagName"));
			$tr.append($td);
		}
		$table.append($tr);
	}

	for (var i = 0; i < elem.length; i++) {

		$tr = $("<tr>");
		for (var j = 0; j < elem.eq(i).children().length; j++) {
			$td = $("<td>").append(elem.eq(i).children().eq(j).text());
			$tr.append($td);
		}
		$table.append($tr);

	}

	return $table;
}