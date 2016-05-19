# stick-it
add custom animated sticky header to your site

## Usage
- Include jQuery & jquery.stick-it.js
- Call StickIt function

```html
<script src="jquery.js"></script>
<script src="jquery.sticky.js"></script>
<script type="text/javascript" >
$(document).ready( function() {
    $('#header').stickIt({ 
		animation	: true,
		duration	: 400,
		opacity		: 0.5,
	});
});
</script>
```

## Default Options
	backGround	 : 'transparent',
	position	 : 'fixed',
	width		 : '100%',
	zIndex		 : '1',
	animation	 : false,
	opacity	 	 : '1',
	duration	 : '200'
