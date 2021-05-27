    let cube = null;
    let sphere = null;
    let torus = null;
    let gold = null;
    let silber = null;
    let bronze = null;
    let rosegold = null;
    
    // Add your code here matching the playground format
    const createScene = function (engine, canvas) {
    const scene = new BABYLON.Scene(engine);

        //Load models
        BABYLON.SceneLoader.ImportMeshAsync("", "./", "assets/models/dna.babylon")
            .then(function (result) {

                //Zoom to adjust
                scene.activeCamera.lowerRadiusLimit = 0;
                scene.activeCamera.upperRadiusLimit = 20;
                scene.activeCamera.useBouncingBehavior = true;

                //Texture to material
                gold = new BABYLON.StandardMaterial("Gold", scene);
                gold.diffuseTexture = new BABYLON.Texture("assets/images/gold.jpg", scene);

                silber = new BABYLON.StandardMaterial("Silber", scene);
                silber.diffuseTexture = new BABYLON.Texture("assets/images/silber.jpg", scene);

                bronze = new BABYLON.StandardMaterial("Bronze", scene);
                bronze.diffuseTexture = new BABYLON.Texture("assets/images/bronze.jpg", scene);

                rosegold = new BABYLON.StandardMaterial("Rosegold", scene);
                rosegold.diffuseTexture = new BABYLON.Texture("assets/images/rosegold.jpg", scene);

                //Mesh to solid
                cube = result.meshes[0];
                sphere = result.meshes[1];
                torus = result.meshes[2];

                //Texture to solid
                cube.material = gold;
                sphere.material = gold;
                torus.material = gold;

                return scene;
            });

        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 1));
        return scene;
    };


    function reloadScene() {
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

    window.onload = reloadScene;

    function changeColor1() {
        const selectedColor = document.getElementById("selectMaterial1").value;
        switch (selectedColor) {

            case "gold":
                cube.material = gold;
                break;

            case "silber":
                cube.material = silber;
                break;

            case "bronze":
                cube.material = bronze;
                break;

            case "rosegold":
                cube.material = rosegold;
                break;
        }
    }

    function changeColor2() {
        const selectedColor = document.getElementById("selectMaterial2").value;
        switch (selectedColor) {

            case "gold":
                sphere.material = gold;
                break;

            case "silber":
                sphere.material = silber;
                break;

            case "bronze":
                sphere.material = bronze;
                break;

            case "rosegold":
                sphere.material = rosegold;
                break;
        }
    }

    function changeColor3() {
        const selectedColor = document.getElementById("selectMaterial3").value;
        switch (selectedColor) {

            case "gold":
                torus.material = gold;
                break;

            case "silber":
                torus.material = silber;
                break;

            case "bronze":
                torus.material = bronze;
                break;

            case "rosegold":
                torus.material = rosegold;
                break;
        }
    }

    