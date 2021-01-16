$(function() {

	function makeTable(ele) {
		let table = $("<table border='1'>");

		for (let i = 0; i < 1; i++) {
			let tr = $("<tr>");
			for (let j = 0; j < ele.eq(0).children().length; j++) {
				let td = $("<td>").append(ele.eq(0).children().eq(j).prop("tagName"));
				tr.append(td);
			}
			table.append(tr);
		}

		for (let i = 0; i < ele.length; i++) {
              let tr = $("<tr>");
              for(let j =0;j<ele.eq(i).children().length;j++){
            	  let td = $("<td>").append(ele.eq(i).children().eq(j).text());
            	  tr.append(td);
              }
              table.append(tr)
		}

		 return table;
	}

	$("#emp_search").click(function() {

		$.ajax({
			url : "emplist.xml",
			dataType : "xml",
			success : function(data) {

				let empRowList = $(data).find("ROW");
				$("body").append(makeTable(empRowList));
			},
			error : function() {
				alert("통신실패");
			}
		});

	});
})