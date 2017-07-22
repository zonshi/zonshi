
// Get the canvas element from our HTML above
var canvas = document.getElementById("renderCanvas");

// Load the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);


// This begins the creation of a function that we will 'call' just after it's built
var createScene = function () {

    // Now create a basic Babylon Scene object
    var scene = new BABYLON.Scene(engine);

    // Change the scene background color to green.
    scene.clearColor = new BABYLON.Color3(0, 255, 0);

    // This creates and positions a free camera
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(-10, 10, -10), scene);
    // camera.position.y = 20;

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

    // This creates a light, aiming 0,1,0 - to the sky.
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Dim the light a small amount
    light.intensity = .5;

    // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
    // var sphere = BABYLON.Mesh.CreateSphere("sphere1", 200, 2, scene);
    //
    // Move the sphere upward 1/2 its height
    // sphere.position.y = 2;

    // Let's try our built-in 'ground' shape.  Params: name, width, depth, subdivisions, scene
    // var ground = BABYLON.Mesh.CreateGround("ground1", 1000, 1000, 2, scene);
    // ground.clearColor = new BABYLON.Color3(0,0,255);

    // var box = BABYLON.Mesh.CreateBox("box", 6.0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    // box.position.y = 8;

    // var sphere = BABYLON.Mesh.CreateSphere("sphere", 30.0, 10.0, scene, false,  BABYLON.Mesh.DEFAULTSIDE);

    // var plane = BABYLON.Mesh.CreatePlane("plane", 10.0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    //
    // plane.position.y = 5;
    // plane.position.z = 5;

    // var disc = BABYLON.Mesh.CreateDisc("disc", 5, 45, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    // disc.position.y = 5;

    // var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    // cylinder.position.y = 6;

    // var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 50, scene, false, BABYLON.Mesh.DEFAULTSIDE);

    // var knot = BABYLON.Mesh.CreateTorusKnot("knot", 2, 0.5, 128, 64, 2, 3, scene, false, BABYLON.Mesh.DEFAULTSIDE);

    // var lines = BABYLON.Mesh.CreateLines("lines", [
    //     new BABYLON.Vector3(-10, 0, 0),
    //     new BABYLON.Vector3(10, 0, 0),
    //     new BABYLON.Vector3(0, 0, -10),
    //     new BABYLON.Vector3(0, 0, 10)
    // ], scene);

    // var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    // groundMaterial.diffuseTexture = new BABYLON.Texture("heightmap.jpg", scene);
    //
    // var groundPlane = BABYLON.Mesh.CreatePlane("groundPlane", 200.0, scene);
    // groundPlane.material = groundMaterial;

    // var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "heightmap.jpg", 200, 200, 250, 0, 10, scene, false, successCallback);
    // ground.material = groundMaterial;
    //
    // var camerasBorderFunction = function () {
    //     //Angle
    //     if (camera.beta < 0.1)
    //         camera.beta = 0.1;
    //     else if (camera.beta > (Math.PI / 2) * 0.9)
    //         camera.beta = (Math.PI / 2) * 0.9;
    //
    //     //Zoom
    //     if (camera.radius > 150)
    //         camera.radius = 150;
    //
    //     if (camera.radius < 30)
    //         camera.radius = 30;
    // };

    // scene.registerBeforeRender(camerasBorderFunction);


    // var precision = {
    //     "w" : 2,
    //     "h" : 2
    // };
    // var subdivisions = {
    //     'h' : 8,
    //     'w' : 8
    // };
    // var tiledGround = BABYLON.Mesh.CreateTiledGround("Tiled Ground", -3, -3, 3, 3, subdivisions, precision, scene, false);

    // Ground
    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("earth.jpg", scene);

    var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "worldHeightMap.jpg", 200, 200, 250, 0, 10, scene, false);
    ground.material = groundMaterial;


    // Leave this function
    return scene;

};  // End of createScene function

// Now, call the createScene function that you just finished creating
var scene = createScene();

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});