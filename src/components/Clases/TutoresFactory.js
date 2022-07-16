// constructor de Tutores Favoritos
class TutorFavorito {
    constructor(id) {
        this.id = id;
        this.etiqueta = 'Eliminar de Favoritos';
    }
}
   
// constructor de Tutores No Favoritos
class TutorNoFavorito {
    constructor(id) {
        this.id = id;
        this.etiqueta = 'Agregar a Favoritos';
    }
}
   
// Enumeración de tipos de tutores
const BRANDS = {
    favorito: 1,
    nofavorito: 2
}
   
  /**
     * Fábrica de tutores
   */
class TutorFactory {
    constructor() {
        this.create = function (brand, id) {
            switch (brand) {
                case BRANDS.favorito:
                    return new TutorFavorito(id);
                case BRANDS.nofavorito:
                    return new TutorNoFavorito(id);
                default:
                    break;
            }
        };
    }
}

export default {TutorFactory, TutorFavorito, TutorNoFavorito}