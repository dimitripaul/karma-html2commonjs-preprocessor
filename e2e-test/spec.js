describe('html transform', () => {
  it('should expose the templates to ', () => {
    var template = require('./template.html');
    expect(template).toBe('<div>HTML Text</div>');
  })
});