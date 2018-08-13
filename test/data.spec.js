// Crea y ejecuta test
describe('visitorRegistration', () => {
  it('deberia ser un objeto', () => {
    // assert.equal prueba si dos valores son iguales
    assert.equal(typeof visitorRegistration, 'object');
    // typeof indica el tipo de operador
  });
  
  describe('visitorRegistration.loginAdmin', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof visitorRegistration.loginAdmin, 'function');
    });
  });
  
  describe('visitorRegistration.registerAdmin', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof visitorRegistration.registerAdmin, 'function');
    });
  });
  describe('visitorRegistration.signOut', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof visitorRegistration.signOut, 'function');
    });
  });
});
