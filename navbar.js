var timeout = 100;
var closeTimer = null;

function showDropMenu()
{
	cancelCloseTime();
	$('.dropMenu').css('display', 'block');
	
	$('.dropMenuHeader').css('color', '#fcfcfc');
	$('.dropMenuHeader').css('background-color', '#ff0000');
	$('.dropMenuHeader').css('background-image', 'url("images/nav-gradient-hover.png")');
}

function hideDropMenu()
{
	$('.dropMenu').css('display', 'none');
	
	if ($('.dropMenuHeader').hasClass('selected')) {
		$('.dropMenuHeader').css('color', '#fcfcfc');
		$('.dropMenuHeader').css('background-color', '#4c4c4c');
	} else {
		$('.dropMenuHeader').css('color', '#0c0c0c');
		$('.dropMenuHeader').css('background-color', '#fcfcfc');
	}
	
	$('.dropMenuHeader').css('background-image', 'url("images/nav-gradient.png")');
}

function closeTime()
{
	closeTimer = window.setTimeout(hideDropMenu, timeout);
}

function cancelCloseTime()
{
	if (closeTimer)
	{
		window.clearTimeout(closeTimer);
		closeTimer = null;
	}
}