    //blenderDateiName
    let path = "halfter3";

    // playground-Format 
    const createScene = function (engine, canvas) {
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color4(0.0, 0.0, 0.0, 0.0);

        //lade model
        BABYLON.SceneLoader.ImportMeshAsync("", "./", "assets/models/" + path + ".babylon")
            .then(function (result) {

                //mesh to objekt
                stoffueberzug = result.meshes[0];
                polsterung = result.meshes[1];
                metallteile = result.meshes[2];

                //zoom min. max. definieren
                scene.activeCamera.lowerRadiusLimit = 2.5;
                scene.activeCamera.upperRadiusLimit = 2.5;
                scene.activeCamera.useBouncingBehavior = true;

                //texture zu material
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
                jeans = new BABYLON.StandardMaterial("jeans", scene);
                jeans.diffuseTexture = new BABYLON.Texture("assets/images/stoffueberzug/jeans.jpg", scene);
                rosa = new BABYLON.StandardMaterial("rosa", scene);
                rosa.diffuseTexture = new BABYLON.Texture("assets/images/stoffueberzug/rosa.jpg", scene);


                rot = new BABYLON.StandardMaterial("rot", scene);
                rot.diffuseTexture = new BABYLON.Texture("assets/images/polsterung/rot.jpg", scene);
                weiss = new BABYLON.StandardMaterial("weiss", scene);
                weiss.diffuseTexture = new BABYLON.Texture("assets/images/polsterung/weiss.jpg", scene);
                beige = new BABYLON.StandardMaterial("beige", scene);
                beige.diffuseTexture = new BABYLON.Texture("assets/images/polsterung/beige.jpg", scene);

                bronze = new BABYLON.StandardMaterial("bronze", scene);
                bronze.diffuseTexture = new BABYLON.Texture("assets/images/metallteile/bronze.jpg", scene);
                gold = new BABYLON.StandardMaterial("gold", scene);
                gold.diffuseTexture = new BABYLON.Texture("assets/images/metallteile/gold.jpg", scene);
                rosegold = new BABYLON.StandardMaterial("rosegold", scene);
                rosegold.diffuseTexture = new BABYLON.Texture("assets/images/metallteile/rosegold.jpg", scene);
                silber = new BABYLON.StandardMaterial("silber", scene);
                silber.diffuseTexture = new BABYLON.Texture("assets/images/metallteile/silber.jpg", scene);

                return scene;
            });
        //camera pos
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        //light pos
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, -2));
       
        return scene;
    };

    function reloadScene() {
        //Holt das Leinwand-Element
        const canvas = document.getElementById("renderCanvas"); 
        //Generiere die BABYLON 3D-Engine
        const engine = new BABYLON.Engine(canvas, true); 
        //Rufen Sie die createScene-Funktion auf
        const scene = createScene(engine, canvas); 

        //Registrieren Sie eine Renderschleife, um die Szene wiederholt zu rendern
        engine.runRenderLoop(function () {
            scene.render();
        });

        //Achtet auf Browser-/Leinwand-Größenänderungsereignisse
        window.addEventListener("resize", function () {
            engine.resize();
        });
    };

    window.onload = reloadScene;

    //auswahl
    function waehleStoffueberzug(material) {
        const gewaehlterStoffueberzug = material ?? document.getElementById("stoffueberzug").value;
        switch (gewaehlterStoffueberzug) {
            case "Candy":
                stoffueberzug.material = candy;
                break;
            case "Dirndel":
                stoffueberzug.material = dirndel;
                break;
            case "Holz":
                stoffueberzug.material = holz;
                break;
            case "Kork":
                stoffueberzug.material = kork;
                break;
            case "Okt":
                stoffueberzug.material = okt;
                break;
            case "Ozelot":
                stoffueberzug.material = ozelot;
                break;
            case "Rinde":
                stoffueberzug.material = rinde;
                break;
            case "Jeans":
                    stoffueberzug.material = jeans;
                    break;
            case "Rosa":
                stoffueberzug.material = rosa;
                break;
        }
    }

    function waehlePolsterung(material) {
        const gewaehltePolsterung = material ?? document.getElementById("polsterung").value;
        switch (gewaehltePolsterung) {
            case "Rot":
                polsterung.material = rot;
                break;
            case "Weiss":
                polsterung.material = weiss;
                break;
            case "Beige":
                polsterung.material = weiss;
                break;
        }
    }

    function waehleMetallteile(material) {
        const gewaehkteMetallteile = material ?? document.getElementById("metallteile").value;
        switch (gewaehkteMetallteile) {
            case "Bronze":
                metallteile.material = bronze;
                break;
            case "Gold":
                metallteile.material = gold;
                break;
            case "Rosegold":
                metallteile.material = rosegold;
                break;
            case "Silber":
                metallteile.material = silber;
                break;
        }
    }

    
