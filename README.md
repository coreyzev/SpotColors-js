# SpotColors.js

`Version: 0.0.1 Alpha` [![ProjectStatus](http://stillmaintained.com/andrew13/Laravel-4-Bootstrap-Starter-Site.png)](http://stillmaintained.com/andrew13/Laravel-4-Bootstrap-Starter-Site)

Using Pantone PMS # C names to define colors on a website. 

1) The first method was script based, you as a `<script>` tag to your page, inside it is code like

    $('h1').spotcolor("background-color","Process Yellow");

and it'd then insert the background-color: rgb for *Pantone PMS Process Yellow C* into your h1 tag.

2) The second method, and my current favorite, is using a `<style>` tag in your page, with formatting like so:

    h1 { background-color: Process Yellow; } 
    
Which gives you the benefit of writing in natural css, and also means it'll work over every "h1" element. I currently just replace the Pantone name with the hex code in the DOM, which the browser then automatically updates. But I could also insert the cssRule into the css file "stealthy like".


<!--
## Features
-->


## Issues

Currently very much in alpha, needs to be concatenated, organized, & simplified. 

See [github issue list](issues) for current list [Empty, add some].

-----

## Requirements

* jQuery

## How to Use

### Step 1: Link to files
*Note: still in beta so the files are broken up a bit, easier for me to work with.*

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" id="panCss" type="text/css" href="main.css">
    </head>
    <body>
        <div id="content">
            ...
        </div>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
        <script type="text/javascript" src="spotcolors.js"></script>
        <script type="text/javascript" src="findincss.js"></script>    
    </body>
</html>

```

* You'll see that i've added `id="panCss"` to the link tag. Copy that (for now).

### Step 2: Add your colors

## **ALL colors in the current database are PMS Coated**
*So you can leave off the "C" and other comment elements of the name*

#### Option 1: CSS Based

At the end of your `<head>` section add your `<style type="text/css">` section 

like this:

```html
    <style type="text/css" id="pantone-style">
	    h1 { color: Black 7;}
	    #nav { background-color: 186;}
	    h2 { background-color: 557;}
	    code {color: Neutral Black;}
	</style>
```

* The values inside of the CSS attribute are this part: Pantone PMS ***557*** C
* Everything else is natural CSS. White space is flexible. 
* Note the ID of the `<style>` tag. Yours should also be `id="pantone-style"`.


#### Option 2: Script Based

After your script links, right before `<body>` tag add your `<script type="text/javascript">` section 

like this:

```html
	<script type="text/javascript" id="pantone-script">
		$('h1').spotcolor("color","Black 7");
		$("#nav").spotcolor("background-color","186");
		$("h2").spotcolor("background-color","557");
		$("code").spotcolor("color","Neutral Black");
	</script>
```

* Use a jQuery selector as you're comfortable with. 
	* The first option is the css attribute. 
	* The second option is the pantone #/Name.
* Although jQuery usually just affects the first element used in a selector, this uses that selector and inserts it into your css file, so it'll still affect all elements which that selector apply to
* Note the ID of the `<script>` tag. Yours should also be `id="pantone-script"`.

#### Option 3: Inline in .css files

Still in development

-----
## License

This is free software distributed under the terms of the MIT license

## Additional information

Any questions, feel free to [contact me](http://about.me/coreyzev).
