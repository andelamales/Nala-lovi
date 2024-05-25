//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion
/// <reference path="kod_01-likovi.js"/>

// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

function setup() {

  GAME.clearSprites();

  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  switch (odabrana) {
    case "MapaNala":
      setupMapaNala();
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}

/* LEVELS */
function setupMapaNala() {
  GAME.clearSprites();

  GAME.activeWorldMap.setCollisions("platforme");

  Postavke.nala = new Nala(0, 0, GAME.getSpriteLayer("nala"));
  GAME.addSprite(Postavke.nala);
  Postavke.nala.start();

  //postavljanje vrata
  let vrata = ["vrata1", "vrata2", "vrata3", "vrata4", "vrata5", "vrata6", "vrata7", "vrata8"];

  for(let i = 0; i < vrata.length; i++){
    let newobject = new Collectable(GAME.getSpriteLayer(vrata[i]));
    GAME.addSprite(newobject);
    Postavke.Vrata.push(newobject);
  }
  //postavljanje vrata

  let trampulin = ["krevet1", "krevet2", "kauc1", "kauc2", "stolica1", "stolica2", "stolica3"];

  for(let i = 0; i < trampulin.length; i++){
    let newobject = new Collectable(GAME.getSpriteLayer(trampulin[i]));
    GAME.addSprite(newobject);
    Postavke.Trampulin.push(newobject);
  }

  let biljka = ["biljka1", "biljka2", "biljka3", "kaktus1", "kaktus2"];

  for(let i = 0; i < biljka.length; i++){
    let newobject = new Collectable(GAME.getSpriteLayer(biljka[i]));
    GAME.addSprite(newobject);
    Postavke.Biljka.push(newobject);
  }

  //postavljanje neprijatelja
  Postavke.smece1 = new Collectable(GAME.getSpriteLayer("smece1"));
  GAME.addSprite(Postavke.smece1);

  Postavke.smece2 = new Collectable(GAME.getSpriteLayer("smece2"));
  GAME.addSprite(Postavke.smece2);

  Postavke.blob = new Bullet(GAME.getSpriteLayer("blob"));
  GAME.addSprite(Postavke.blob);
  Postavke.blob.start(8 * 16, 21 * 16);

  Postavke.skejt = new PokretniNeprijatelj(0, 0, GAME.getSpriteLayer("skejt"));
  GAME.addSprite(Postavke.skejt);
  Postavke.skejt.start(17*16, 5*16);

  Postavke.kosilica = new Kosilica(0, 0, GAME.getSpriteLayer("kosilica"));
  GAME.addSprite(Postavke.kosilica);
  Postavke.kosilica.start(13*16, 29*16);
  //postavljanje neprijatelja

  //postavljanje boostera
  Postavke.meso = new Booster(GAME.getSpriteLayer("meso"));
  GAME.addSprite(Postavke.meso);
  Postavke.meso.position(9 * 16, 1 * 16);
  
  Postavke.poslastica = new Booster(GAME.getSpriteLayer("poslastica"));
  GAME.addSprite(Postavke.poslastica);
  Postavke.poslastica.position(5 * 16, 3 * 16);

  Postavke.izlaz = new Collectable(GAME.getSpriteLayer("izlaz"));
  GAME.addSprite(Postavke.izlaz);  
  //postavljanje boostera

  //postavljanje zivota
  let zivot = ["zivot1", "zivot2", "zivot3"];

  for(let i = 0; i < zivot.length; i++){
    let newobject = new Box(GAME.getSpriteLayer(zivot[i]));
    GAME.addSprite(newobject);
    newobject.okvir = false;
    Postavke.Zivot.push(newobject);
  }
  //postavljanje zivota

}
