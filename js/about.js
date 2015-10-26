$(document).ready(function(){
	$('button').click(function(){
		$.ajax({
			data:{
				id:$('input').val()
			},
			url:'do',
			success:function(data){
				$('#mm').text(data);
			}
		});
		$('#mm').html('loading');
	});

	$('.member1').click(function(){
		$('per1').fadeIn('fast',1);
	});
});