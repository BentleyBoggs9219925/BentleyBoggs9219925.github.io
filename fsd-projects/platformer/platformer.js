$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
createPlatform(300, 650, 250, 15);
createPlatform(500, 550, 300, 14);
createPlatform(400, 450, 250, 20);
createPlatform(800, 311, 250, 17);
createPlatform(100, 200, 250, 10);
createPlatform(600, 200, 250, 11);

    // TODO 2 - Create Platforms




    // TODO 3 - Create Collectables
 createCollectable("steve", 300, 100);
 createCollectable("max", 300, 500);
 createCollectable("grace", 1250, 500);
    
    // TODO 4 - Create Cannons
createCannon('bottom', 400, 1000, 100)
createCannon('left', 300, 1000);
createCannon('left', 150,1300);


//createCannon(“bottom” 400,200);



    //createCannon(“bottom”, 400,1500);
//createCannon(“locaction”, location on x or y, delay);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
