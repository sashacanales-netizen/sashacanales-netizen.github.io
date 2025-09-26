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


    // TODO 2 - Create Platforms
    createPlatform(550,250,100,10);
    createPlatform(350,650,100,10);
    createPlatform(550,500,100,10);
    createPlatform(400,400,100,10);
    createPlatform(700,350,100,10);

    // TODO 3 - Create Collectables
    createCollectable("kennedi", 750, 300);
    createCollectable("steve", 350, 625);
    createCollectable("steve", 450, 350);

    // TODO 4 - Create Cannons
    createCannon("right",300,300);
    createCannon("top", 700,250);
    createCannon("left",400, 650);


    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
