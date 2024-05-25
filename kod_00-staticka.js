class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  /** @type {Nala} */
  static nala = null;

  /** @type {Collectable} */
  static Vrata = [];
  static Trampulin = [];
  static Biljka = [];
  static smece1 = null;
  static smece2 = null;
  static poslastica = null;
  static izlaz = null;

  /** @type {Box} */
  static Zivot = [];

  /** @type {Booster} */
  static meso = null;
  static poslastica = null;

  /** @type {Bullet} */ 
  static blob = null;

  /** @type {PokretniNeprijatelj} */
  static skejt = null;

  /** @type {Kosilica} */
  static kosilica = null;

  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}