// <reference path='./babylon.d.ts' />

// get our canvas(konstante Leinwand)
const canvas = document.getElementById('renderCanvas');

// create a BabylonJS engine
const engine = new BABYLON.Engine(canvas, true);

function createScene() {
    // create a scene
    const scene = new BABYLON.Scene(engine);

    //create a camera
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -5), scene);
    camera.attachControll(canvas, true); 

    //create a light
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0),scene);

    //create a box
    const box = BABYLON.MeshBuilder.CreateBox('box', {
        size: 1
    },scene);

    //create a sphere
    const sphere = BABYLONMeshBuilder.CreateSphere('sphere', {
     segments: 32,
     diameter: 2,   
    }, scene);
    sphere.position = new BABYLON.Vector3(3, 0, 0);

    //create a plane
    const plane = BABYLONMeshBuilder.CreatePlane('plane', {}, scene);
    plane.position = new BABYLON.Vector3(-3, 0, 0);

    // create a material
    const material = new BABYLON.StandardMaterial('material', scene);
    material.diffuseColor = new BABYLON.Color3(1, 0, 0);
    material.emissiveColor = new BABYLON.Color3(0, 1, 0);

    box.material = material;

    const material2 = new BABYLON.StandardMaterial('material2', scene);
    material2.diffuseTexure = new BABYLON.Texure('assets/images/xxx.jpg', scene);


    return scene;
}

// create our scene
const scene = createScene();

engine.runRenderLoop (() => {
    scene.render();
});