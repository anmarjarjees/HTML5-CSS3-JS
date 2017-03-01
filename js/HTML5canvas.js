
// create our draw function to start drawing on the screen
function draw() {
    // Create a variable reference to the canvas.
    // TO DO HERE


    // Canvas elements have a "graphics context", 
    // a special object that encapsulate all the drawing methods:
    // TO DO HERE

    /*
    context.drawMethod(method's parameters)
    // TO DO HERE
    two main drawing functions(methods):
    - fill
    - stroke
    */
    // fillStyle: for coloring the filled-in areas (like rectangles)
    // TO DO HERE

    // fillStyle values: color, hex, rgba, gradient, pattern
    // fillRect (x,y,width,height), if width=height ==> a sequare
    // TO DO HERE

    // adding stroke to the above rectange, give it the same coordinate:
    // notice the same method is used to create an empty rectangle
    // we can specify the line width by using the context's lineWidth attribute
    // TO DO HERE

    // to clear the Rect shape: clearRect (x,y,width,height)
    // context.clearRect(0, 0, 100, 100); // try it
    /*
    More complex shapes are drawn with a mechanism called "paths", 
    which are a series of line-drawing instructions
    */

    /*
    Gradients:
    ==========
    */
    // build a liner gradient:
    // createLinearGradient: accepts 4 parameters that define a line (x1,y1,x2,y2)
    // TO DO HERE

    // addColorStop (position, "color")
    // position: 0 - 1
    // TO DO HERE

    /*
    At minimum, Gradient needs two color stops, 
    one for the beginning and one for the end
    */
    // TO DO HERE

    // -----------------------------------------------------
    // build a radial gradient:
    // draw a series of circular color bands instead of a straight line
    /*
       createRadialGradient(beginX, beginY, beginRadius, endX, endY, endRadius)
       beginX, beginY: the starting X and Y positions (often center of the shape)
       beginRadius: Radius of the circle center (0 or larger value)
       endX, endY: the ending X and Y positions (typically same as beginX and beginY)
    */
    // before use the simple commands for the rectangle:
    // try below first:
    /*
    context.fillStyle =
    context.fillRect();
    */
    // TO DO HERE


    /*
    Patterns:
    ==========
    */
    // pattern is used to define an image to be used as a fill or stroke 

    // create a JavaScript image object to serve as the basis of the pattern
    // TO DO HERE


    // create the pattern variable using createPattern method of graphics context
    // createPattern(imageObject,"repeat|repeat-x|repeat-y|no-repeat");
    // TO DO HERE


    // apply the pattern variable to fillStyle or strokeStyle
    // TO DO HERE

    // you can use fillStyle = "red"; // for a simple color
    // TO DO HERE


    /*
    Drawing Text:
    =============
    */
    /*
    The font shorthand property sets all the font properties in one declaration.
    
    The properties that can be set, 
    are (in order): "font-style font-variant font-weight font-size/line-height font-family"
    
    The font-size and font-family values are required. 
    If one of the other values are missing, the default values will be inserted, if any.
    */
    // choose the font using the context's font attribute:
    // TO DO HERE


    // you can use different fill for the text instead of the same pattern:
    // context.fillStyle = "red";

    // display the text by using fillText() method
    // fillText("your text",X position, Y position);
    // TO DO HERE


    // you can stroke line to the text using the same text 
    // with customizing the stroke size:
    // TO DO HERE


    /*
    Drawing Complex Shapes Using Path:
    ==================================
    */
    // before start using path's methods, we need to set the following attributes:
    // strokeStyle, fillStyle (optional), lineWidth (optional)
    // creating different shapes using pen motions:

    // Start with beginPath() method
    // TO DO HERE

    // use moveTo(x,y) just to define the starting point of the path
    // TO DO HERE

    // use lintTo(x,y) to draw a line the current x,y destination
    // TO DO HERE

    // use closePath() to indicate that path is finished:
    // TO DO HERE

    // the path will not be displayed without using the stroke() method
    // TO DO HERE

    // you can use fill() to fill the path
    // TO DO HERE

    /*
    Notice that the stroke() and fill() methods will use the recent values;
    */

    // ------------------------------------------------------------
    // Making arcs and circles:
    // ------------------------------------------------------------
    // arc and circle are part of the path mechanism and are both created with arc() method
    // set the stroke or fill style if you want to change it

    // Start with beginPath();
    // TO DO HERE

    /*
    use arc() method
    (X-coord circle center, Y-coord cricle center, radius, starting Angle, ending Angle, true for counter-clockwise or flase for clockwise ) method
    Tip: To create a circle with arc(): Set start angle to 0 and end angle to 2*Math.PI.
    Tip: Use the stroke() or the fill() method to actually draw the arc on the canvas.
    The starting angle: in radians (0 is at the 3 o'clock position of the arc's circle)
    The ending angle: the ending angle in radians
    */
    // TO DO HERE

    // OR:
    // TO DO HERE

    // OR:
    // TO DO HERE

    // OR:
    // TO DO HERE

    // OR:
    // TO DO HERE

    //context.closePath(); // we can ommit the close path

    /*
    Manipulating Images with Transformations:
    ====================
    */

    /*
    translation: Moves a particular amount in X and Y
    rotation: Rotates around a particular point
    scale: Changes the size of the object in X and Y
    */

    // create a JavaScript image object
    // TO DO HERE

    /*
    using drawImage() method

    Position the image on the canvas:
    context.drawImage(img,x,y);

    Position the image on the canvas, and specify width and height of the image:
    context.drawImage(img,x,y,width,height);

    Clip the image and position the clipped part on the canvas:
    context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    */
    // TO DO HERE

    // -------------------------------------------------------------
    // Translate:
    // The translate() method remaps the (0,0) position on the canvas.

    // drawing the same image using different starting point:
    // TO DO HERE


    // -------------------------------------------------------------
    // Scale:
    // The scale() method scales the current drawing, bigger or smaller.
    /*
    Note: If you scale a drawing, all future drawings will also be scaled. 
    The positioning will also be scaled. 
    If you scale(2,2); drawings will be positioned twice as far from the left and top of the canvas as you specify.

    context.scale(scalewidth,scaleheight);
    
    scalewidth:
    Scales the width of the current drawing (1=100%, 0.5=50%, 2=200%, etc.)

    scaleheight:
    Scales the height of the current drawing (1=100%, 0.5=50%, 2=200%, etc.)
    */
    // TO DO HERE


    // -------------------------------------------------------------
    // Translate:
    // The rotate() method rotates the current drawing.
    /*
    Note: The rotation will only affect drawings made AFTER the rotation is done

    context.rotate(angle);
    angle:
    The rotation angle, in radians.
    
    To calculate from degrees to radians: degrees*Math.PI/180.
    Example: to rotate 5 degrees, specify the following: 5*Math.PI/180
    */
    // TO DO HERE

} // end function draw

// Don't forget to call your function:
