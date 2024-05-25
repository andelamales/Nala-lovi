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
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {

  if (GAME.activeWorldMap.name == "MapaNala")
    MapaNala();

  GAME.update();

};

function MapaNala() {

  //kretanje nala
  if (SENSING.right.active) {
    Postavke.nala.moveRight();
  }

  if (SENSING.left.active) {
    Postavke.nala.moveLeft();
  }

  if (SENSING.up.active) {
    for( let index = 0; index < Postavke.Trampulin.length; index++) {
      if(Postavke.nala.touching(Postavke.Trampulin[index])) {
        Postavke.nala.jump(30);
      }
    }

    Postavke.nala.jump();
  }
  //kretanje nala

  //kretanje metka
  if ( Postavke.nala.y < 18 * 16 ) {
    Postavke.blob.invisible();
  }
  else if( Postavke.nala.y >= 18 * 16 && Postavke.nala.y <= 24 * 16 ) {
    Postavke.blob.makeVisible();
    if ( Postavke.blob.x >= 24 * 16)
      Postavke.blob.start(8 * 16, 21 * 16);
    else
      Postavke.blob.jump();
  }
  else if ( Postavke.nala.y > 24 * 16 ) {
    Postavke.blob.invisible();
  }
  //kretanje metka

  //kretanje skejta
  if( Postavke.skejt.x <= 16.5 * 16 ) {
    Postavke.skejt.direction = 90;
  }
  else if( Postavke.skejt.x >= 22 * 16 ) {
    Postavke.skejt.direction = 270;
  }

  if( Postavke.skejt.direction == 90 ) {
    Postavke.skejt.moveRight();
  }
  else if( Postavke.skejt.direction == 270 ) {
    Postavke.skejt.moveLeft();
  }
  //kretanje skejta

  //kretanje kosilice
  if( Postavke.kosilica.x <= 12.5 * 16 ) {
    Postavke.kosilica.direction = 90;
  }
  else if( Postavke.kosilica.x >= 16.5 * 16 ) {
    Postavke.kosilica.direction = 270;
  }

  if( Postavke.kosilica.direction == 90 ) {
    Postavke.kosilica.moveRight();
  }
  else if( Postavke.kosilica.direction == 270 ) {
    Postavke.kosilica.moveLeft();
  }
  //kretanje kosilice

  //prolazenje kroz vrata
  for( let index = 0; index < Postavke.Vrata.length; index++) {
    if ( Postavke.nala.touching(Postavke.Vrata[index]) ) {
      Postavke.nala.calculateFloor(index);

      if( index % 2 == 0)                                       //kad ide na iduci kat
        Postavke.nala.reposition(Postavke.Vrata[index+1].x + 20, Postavke.Vrata[index+1].y + 21);

      else                                                      //kad se vraca nazad
        Postavke.nala.reposition(Postavke.Vrata[index-1].x - 20, Postavke.Vrata[index-1].y + 21);
    }
  }
  //prolazenje kroz vrata

  //sakupljanje i postavljanje boostera
  if( Postavke.nala.touching(Postavke.meso) ) {
    Postavke.nala.armorOn();

    if ( Postavke.nala.pozMeso.length > 0 ) {
      let x = Postavke.nala.pozMeso[ Postavke.nala.pozMeso.length - 2];
      let y = Postavke.nala.pozMeso[ Postavke.nala.pozMeso.length - 1];
      Postavke.meso.position(x, y);
      Postavke.nala.pozMeso.pop();
      Postavke.nala.pozMeso.pop();
    }
    else
      Postavke.meso.invisible();

    GameSettings.output("Imate štit.");
  }

  if( Postavke.nala.touching(Postavke.poslastica) ) {
    Postavke.nala.gainPoints(20);

    if ( Postavke.nala.pozPoslastica.length > 0 ) {
      let x = Postavke.nala.pozPoslastica[ Postavke.nala.pozPoslastica.length - 2];
      let y = Postavke.nala.pozPoslastica[ Postavke.nala.pozPoslastica.length - 1];
      Postavke.poslastica.position(x, y);
      Postavke.nala.pozPoslastica.pop();
      Postavke.nala.pozPoslastica.pop();
    }
    else
      Postavke.poslastica.invisible();

    GameSettings.output("Sakupili ste 20 bodova. Ukupno: " + Postavke.nala.points);
  }
  //sakupljanje i postavljanje boostera

  //sudar s neprijateljem - gubljenje bodova
  for (let index = 0; index < Postavke.Biljka.length; index++) {
    if(Postavke.nala.touching(Postavke.Biljka[index])){

      Postavke.nala.losePoints(5);
      GameSettings.output("Izgubili ste 5 bodova. Preostalo: " + Postavke.nala.points);

      switch (index) {                                          //na koja vrata se vraca
        case 0:
          Postavke.nala.start()
          break;

        case 1:
          Postavke.nala.reposition(Postavke.Vrata[index].x + 20, Postavke.Vrata[index].y + 21);
          break;
      
        default:
          Postavke.nala.reposition(Postavke.Vrata[3].x + 20, Postavke.Vrata[3].y + 21);
          break;
      }
    }
  }

  if( Postavke.nala.touching(Postavke.blob) ) {
    Postavke.blob.start(8 * 16, 21 * 16);
    Postavke.nala.losePoints(10);
    GameSettings.output("Izgubili ste 10 bodova. Preostalo: " + Postavke.nala.points);
  }
  //sudar s neprijateljem - gubljenje bodova

  //sudar s neprijateljem - gubljenje zivota
  let cntr = 0;
  if( Postavke.nala.touching(Postavke.skejt) )                    //kojeg neprijatelja je dotakla
    cntr = 1;
  else if ( Postavke.nala.touching(Postavke.kosilica) )
    cntr = 2;
  else if ( Postavke.nala.touching(Postavke.smece1) )
    cntr = 3;
  else if ( Postavke.nala.touching(Postavke.smece2) )
    cntr = 4;

  if( cntr != 0 ) {
    if( Postavke.nala.armor == true ) {                           //obrana stitom
      Postavke.nala.armorOff();
      GameSettings.output("Potrošili ste štit.");

      switch (cntr) {                                             //unistenje neprijatelja
        case 1:
          Postavke.skejt.invisible();
          break;
        case 2:
          Postavke.kosilica.invisible();
          break;
        case 3:
          Postavke.smece1.invisible();
          break;
        case 4:
          Postavke.smece2.invisible();
          break;

        default:
          break;
      }
    }

    else {                                                        //gubljenje zivota  
      Postavke.nala.loseLife();
      Postavke.Zivot[Postavke.nala.lives].visible = false;
      GameSettings.output("Izgubili ste život. Preostalo: " + Postavke.nala.lives);
      Postavke.nala.start();
    }
  }
  //sudar s neprijateljem - gubljenje zivota

  //game over
  if( Postavke.nala.lives == 0 ) {
    btnStop_click();
    alert("Game over  :(");
  }
  //game over

  //pobjeda
  if( Postavke.nala.touching(Postavke.izlaz) ) {
    btnStop_click();
    alert("Prešli ste nivo s " + Postavke.nala.points + " bodova i " + Postavke.nala.lives + " preostalih života,   čestitamo! :D");
  }
  //pobjeda

}
