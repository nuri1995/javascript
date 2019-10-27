export default function plantarArbol(inEspecie, inFruta) {
  if (typeof inEspecie === 'string' && typeof inFruta === 'string') {
    var arbol = {
      especie: inEspecie,
      fruta: inFruta,
      obtenerFruta() {
        return this.fruta;
      },
      obtenerEspecie() {
        return this.especie;
      },
      definirFruta: function(string) {
        if (typeof string === 'string') {
          this.fruta = string;
        }
      },
      definirEspecie: function(string) {
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
