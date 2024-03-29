import plantarArbol from './kata9.4';
var arbol = plantarArbol('peral', 'pera');

describe('Kata 9.3#: plantarArbol', () => {
  test('incluye el método obtenerFruta', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('obtenerFruta');
  });
  test('incluye el método obtenerEspecie', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('obtenerEspecie');
  });
  test('incluye el método definirFruta', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('definirFruta');
  });
  test('incluye el método definirEspecie', () => {
    expect(plantarArbol('peral', 'pera')).toHaveProperty('definirEspecie');
  });

  test('Al invocar el método obtenerFruta nos devuelve el valor pera', () => {
    arbol.definirFruta(12);
    expect(arbol.obtenerFruta()).toBe('pera');
  });

  test('Al invocar el método obtenerFruta nos devuelve el valor manzana', () => {
    arbol.definirFruta('manzana');
    expect(arbol.obtenerFruta()).toBe('manzana');
  });
});
