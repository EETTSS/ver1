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

	$('#untro div').fade();

	$('.member1').click(functoin(){
		$('.per1').fadeIn(300,1);
	});
	$('.member2').click(functoin(){
		$('.per2').fadeIn(300,1);
	});
	$('.member3').click(functoin(){
		$('.per3').fadeIn(300,1);
	});
	$('.member4').click(functoin(){
		$('.per4').fadeIn(300,1);
	});
	$('.member5').click(functoin(){
		$('.per5').fadeIn(300,1);
	});
});