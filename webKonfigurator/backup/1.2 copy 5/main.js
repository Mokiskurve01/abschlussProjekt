    let stoffueberzug;
    let polsterung;
    let metallteile;
   
    //gurtbandMat
    let candy; 
    let dirndel;
    let holz;
    let kork;
    let okt;
    let ozelot;
    let rinde;
    //polsterung
    let rot;
    let weiss;
    //metallteile
    let bronze;
    let gold;
    let rosegold;
    let silber;

    /*let myApp = {
        rot = '',
        weiss = ''
    }
         myApp.rot*/

    //model name
    let path =  "1";
    
    // Add your code here matching the playground format
    const createScene = function (engine, canvas) {
    const scene = new BABYLON.Scene(engine);

        //Load models
        BABYLON.SceneLoader.ImportMeshAsync("", "./","assets/models/"+path+".babylon")
            .then(function (result) {

                //Zoom to adjust
                scene.activeCamera.lowerRadiusLimit = 10;
                scene.activeCamera.upperRadiusLimit = 50;
                scene.activeCamera.useBouncingBehavior = true;

                //Texture to material
                candy = new BABYLON.StandardMaterial("candy", scene);
                candy.diffuseTexture = new BABYLON.Texture("assets/images/stoffueberzug/candy.jpg", scene);
                dirndel = new BABYLON.StandardMaterial("dirndel", scene);
                dirndel.diffuseTexture = new BABYLON.Texture("assets/images/stoffueberzug/dirndel.jpg", scene);
                holz = new BABYLON.StandardMaterial("holz", scene);
                holz.diffuseTexture = new BABYLON.Texture("assets/images/stoffueberzug/holz.jpg", scene);
                kork = new BABYLON.StandardMaterial("kork", scene);
                kork.diffuseTexture = new BABYLON.Texture("assets/images/stoffueberzug/kork.jpg", scene);
                okt = new BABYLON.StandardMaterial("okt", scene);
                okt.diffuseTexture = new BABYLON.Texture("assets/images/stoffueberzug/okt.jpg", scene);
                ozelot = new BABYLON.StandardMaterial("ozelot", scene);
                ozelot.diffuseTexture = new BABYLON.Texture("assets/images/stoffueberzug/ozelot.jpg", scene);
                rinde = new BABYLON.StandardMaterial("rinde", scene);
                rinde.diffuseTexture = new BABYLON.Texture("assets/images/stoffueberzug/rinde.jpg", scene);

                rot = new BABYLON.StandardMaterial("rot", scene);
                rot.diffuseTexture = new BABYLON.Texture("assets/images/polsterung/rot.jpg", scene);
                weiss = new BABYLON.StandardMaterial("weiss", scene);
                weiss.diffuseTexture = new BABYLON.Texture("assets/images/polsterung/weiss.jpg", scene);

                bronze = new BABYLON.StandardMaterial("bronze", scene);
                bronze.diffuseTexture = new BABYLON.Texture("assets/images/metallteile/bronze.jpg", scene);
                gold = new BABYLON.StandardMaterial("gold", scene);
                gold.diffuseTexture = new BABYLON.Texture("assets/images/metallteile/gold.jpg", scene);
                rosegold = new BABYLON.StandardMaterial("rosegold", scene);
                rosegold.diffuseTexture = new BABYLON.Texture("assets/images/metallteile/rosegold.jpg", scene);
                silber = new BABYLON.StandardMaterial("silber", scene);
                silber.diffuseTexture = new BABYLON.Texture("assets/images/metallteile/silber.jpg", scene);

                //Mesh to solid
                stoffueberzug = result.meshes[0];
                polsterung = result.meshes[1];
                metallteile = result.meshes[2];
                

                //Texture to solid
                //gurtband.material = candy;
               

                return scene;
            });

        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

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

    function changeStoffueberzug() {
        const selectedStoffueberzug = document.getElementById("stoffueberzug").value;
        switch (selectedStoffueberzug) {

            case "candy":
                stoffueberzug.material = candy;
                break;

            case "dirndel":
                stoffueberzug.material = dirndel;
                break;

            case "holz":
                stoffueberzug.material = holz;
                break;

            case "kork":
                stoffueberzug.material = kork;
                break;

            case "okt":
                stoffueberzug.material = okt;
                break;

            case "ozelot":
                stoffueberzug.material = ozelot;
                break;

            case "rinde":
                stoffueberzug.material = rinde;
                break;
        }
    }

    function changePolsterung() {
        const selectedPolsterung = document.getElementById("polsterung").value;
        switch (selectedPolsterung) {

            case "rot":
                polsterung.material = rot;
                break;

            case "weiss":
                polsterung.material = weiss;
                break;
        }
    }

    function changeMetallteile() {
        const selectedMetallteile = document.getElementById("metallteile").value;
        switch (selectedMetallteile) {

            case "bronze":
                metallteile.material = bronze;
                break;

            case "gold":
                metallteile.material = gold;
                break;

            case "rosegold":
                metallteile.material = rosegold;
                break;
    
            case "silber":
                metallteile.material = silber;
                break;
        }
    }

    