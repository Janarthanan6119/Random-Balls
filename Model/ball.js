// object for the container 
const area = 
{
    element: document.getElementById('area'),
    width: 800,
    height: 500,
};
// initialize the width snd height as a pixel
// appendchild for adding the balls
  function initialize() 
  {
    area.element.style.width = area.width + 'px';
    area.element.style.height = area.height + 'px';
    document.body.appendChild(area.element);
  }
  // moveTo is for moving the ball
  function move(ball, x, y) 
  {
    ball.element.style.left = x + 'px';
    ball.element.style.top = y + 'px';
  }
// this function for reverse the ball when it touches the edge
  function changeDirection(ball, x, y) 
  {
    if (x < 0 || x > area.width - ball.width) 
    {
      ball.dx = -ball.dx;
    }
    if (y < 0 || y > area.height - ball.height) 
    {
      ball.dy = -ball.dy;
    }
  }
  // this function for creating a ball
  function create(color, dx, dy) 
  {
    const newBall = Object.create(this);
    //  set a newball width and height, x &y co-ordinates
        newBall.dx = dx;
        newBall.dy = dy;
        newBall.width = 50;
        newBall.height = 50;
    // create a new Html element "div"
    newBall.element = document.createElement("div")
    //set backgroundColor, width and height style properties for a div
    newBall.element.style.backgroundColor = color;
    newBall.element.style.width = newBall.width + 'px';
    newBall.element.style.height = newBall.height + 'px';  

    newBall.element.className += 'ball';
//convert float to an integer 
    newBall.width = parseInt(newBall.element.style.width);
    newBall.height = parseInt(newBall.element.style.height);

    area.element.appendChild(newBall.element);
    return newBall;
  }
  //this function is for updating the ball
  function update(ball, x, y) 
  {
    //moveTo() function to move the ball
        move(ball, x, y);
    // for 16microseconds once the ball will move
    setTimeout(function() 
    {
      changeDirection(ball,x,y); update(ball,x+ball.dx,y+ball.dy);},16);
     
  }
  
  //  Function calls
   initialize();

   const ball1 = create('green', 1, 6); //Giving colors to each ball
   const ball2 = create('red', 2, 7);
   const ball3 = create('blue', 5, 4);
   
   move(ball1, 1, 1);
   move(ball2, 10, 10);
   move(ball3, 20, 20);
  
   update(ball1, 70, 0);
   update(ball2, 20, 200);
   update(ball3, 30, 330); 

  