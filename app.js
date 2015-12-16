var i = 0;

$(document).ready(function(){
	enable();

});

function enable() {
	$('.container').on('click', '.display-name', newContainer);
	$('.container').on('click', '.change-color', changeColor);
	$('.container').on('click', '.delete-container', deleteContainer);

}

function newContainer(){
	i++;
	$('.container').append('<div class=\'individual\'></div>');
	var $el = $('.container').children().last();

	$el.append('<p>' + i + '</p>');
	$el.append('<button class=\'change-color\'>Change</button>');
	$el.append('<button class=\'delete-container\'>Delete</button>');
}

function deleteContainer(){
	$(this).parent().remove();
}

function changeColor(){
		$(this).parent().toggleClass("fColor");
	


}





