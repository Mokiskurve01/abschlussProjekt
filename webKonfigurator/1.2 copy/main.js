    
// Add your code here matching the playground format
const createScene = function (engine, canvas) {
const scene = new BABYLON.Scene(engine);  

                
    //Load models
    BABYLON.SceneLoader.ImportMeshAsync("", "./", "assets/models/T-Stueck_Ring.babylon")
    .then(function (result) {

        //Zoom to adjust
        scene.activeCamera.lowerRadiusLimit = 0;
        scene.activeCamera.upperRadiusLimit = 20;
        scene.activeCamera.useBouncingBehavior = true;

        //Texture to material
        const gold = new BABYLON.StandardMaterial("Gold", scene);
        gold.diffuseTexture = new BABYLON.Texture("assets/images/gold.jpg", scene);

        const silber = new BABYLON.StandardMaterial("Silber", scene);
        silber.diffuseTexture = new BABYLON.Texture("assets/images/silber.jpg", scene);

        const bronze = new BABYLON.StandardMaterial("Bronze", scene);
        bronze.diffuseTexture = new BABYLON.Texture("assets/images/bronze.jpg", scene);

        const rosegold = new BABYLON.StandardMaterial("Rosegold", scene);
        rosegold.diffuseTexture = new BABYLON.Texture("assets/images/rosegold.jpg", scene);

        //Mesh to solid
        var cube = result.meshes[0];
        var sphere = result.meshes[1];
        var torus = result.meshes[2];

        //Texture to solid
        cube.material = gold;
        sphere.material = gold;
        torus.material = gold;
                            
        return scene;
    });
                
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    return scene;
};

window.onload = function(){            
    console.log("Hello World!!!");
    const canvas = document.getElementById("renderCanvas"); // Get the canvas element
    const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
    const scene = createScene(engine, canvas); //Call the createScene function
    
    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
    scene.render();
    });
    
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
    engine.resize();
    });
};
        
