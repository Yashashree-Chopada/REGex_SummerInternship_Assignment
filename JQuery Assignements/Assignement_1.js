
	var count=0;
	$(document).ready(function() {
	showDiv();
	});
	function showDiv()
	{
		$(".img").hide();
		$(".img:eq("+count+")").show();
	}

	
	function ShowNext()
	{
		if(count==$(".img").length-1)
		{
			count = 0;
		
		}
		else
		{
			count++;
		}
		showDiv();
	
	}
	function ShowPrev()
	{
		if(count== 0)
		{
			count = $(".img").length-1;
		
		}
		else
		{
			count--;
		}
		showDiv();
	}