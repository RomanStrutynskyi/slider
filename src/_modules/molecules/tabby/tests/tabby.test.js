'use strict';

import Tabby from '../tabby';

describe('Tabby View', function() {

  beforeEach(() => {
    this.tabby = new Tabby();
  });

  it('Should run a few assertions', () => {
    expect(this.tabby);
  });

});
