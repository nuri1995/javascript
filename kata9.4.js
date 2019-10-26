export default function plantarArbol(inEspecie, inFruta) {
  if (typeof inEspecie === 'string' && typeof inFruta === 'string') {
    var arbol = {
      especie: inEspecie,
      fruta: inFruta,
      get obtenerFruta() {
        return this.fruta;
      },
      get obtenerEspecie() {
        return this.especie;
      },
      definirFruta: function set(string) {
        this.fruta = string;
      },
      definirEspecie: function set(string) {
        this.especie = string;
      }
    };

    return {
      definirEspecie: arbol.definirEspecie,
      definirFruta: arbol.definirFruta,
      obtenerEspecie: arbol.obtenerEspecie,
      obtenerFruta: arbol.obtenerFruta
    };
  } else {
    return null;
  }
}
