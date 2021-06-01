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
    //meineAuswahl
    let gesamtAuswahl;

    //blenderDateiName
    let path = "halfter";

    // Add your code here matching the playground format
    const createScene = function (engine, canvas) {
        const scene = new BABYLON.Scene(engine);

        //lade model
        BABYLON.SceneLoader.ImportMeshAsync("", "./", "assets/models/" + path + ".babylon")
            .then(function (result) {

                //zoom min. max. definieren
                scene.activeCamera.lowerRadiusLimit = 4;
                scene.activeCamera.upperRadiusLimit = 10;
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
                stoffueberzug = result.meshes[1];
                polsterung = result.meshes[2];
                metallteile = result.meshes[0];


                //start Textur 
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

    function myAuswahl() {

        var node = document.createElement("LI");
        var auswahlStoff = document.getElementById("stoffueberzug").value;
        var auswahlPolster = document.getElementById("polsterung").value;
        var auswahlMetall = document.getElementById("metallteile").value;
        gesamtAuswahl = document.createTextNode(auswahlStoff + " - " + auswahlPolster + " - " + auswahlMetall);
        node.appendChild(gesamtAuswahl);
        document.getElementById("meineAuswahl").appendChild(node);

        console.log(gesamtAuswahl);
    }


    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }

    function ready() {
        var removeCartItemButtons = document.getElementsByClassName('btn-danger')
        for (var i = 0; i < removeCartItemButtons.length; i++) {
            var button = removeCartItemButtons[i]
            button.addEventListener('click', removeCartItem)
        }

        var quantityInputs = document.getElementsByClassName('cart-quantity-input')
        for (var i = 0; i < quantityInputs.length; i++) {
            var input = quantityInputs[i]
            input.addEventListener('change', quantityChanged)
        }

        var addToCartButtons = document.getElementsByClassName('shop-item-button')
        for (var i = 0; i < addToCartButtons.length; i++) {
            var button = addToCartButtons[i]
            button.addEventListener('click', addToCartClicked)
        }

        document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    }

    function purchaseClicked() {
        alert('Danke für Ihren Auftrag')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
    }

    function removeCartItem(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }

    function quantityChanged(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }



    function addToCartClicked(event) {
        var button = event.target
        var shopItem = button.parentElement.parentElement


        //var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        // gesamtAuswahl
        var title = gesamtAuswahl.length;


        var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText

        addItemToCart(title, price)
        updateCartTotal()
    }

    function addItemToCart(title, price, imageSrc) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerText == title) {
                alert('Diese Auswahl ist schon vorhanden!')
                return
            }
        }
        var cartRowContents = `
            <div class="cart-item cart-column">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">LÖSCHEN</button>
            </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    }

    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            var price = parseFloat(priceElement.innerText.replace('€', ''))
            var quantity = quantityElement.value
            total = total + (price * quantity)
        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total
    }