$(document).ready(function(){
	$('button').click(function(){
		$.ajax({
			data:{
				id:$('input').val()
			},
			url:'../do.php',
			success:function(data){
				$('.talktext').text(data);
			}
		});
		$('.talktext').html('loading');
	});

	$('.member1').click(function(){
		$('per1').fadeIn('fast',1);
	});
});