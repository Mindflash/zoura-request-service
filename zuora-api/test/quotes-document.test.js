/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('quotes document', function() {
  let requestOptionsStub;
  let requestStub;
  let quotes;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = {value: 'somevalue'};

    quotes = proxyquire('../quotes-document', {
      './proxied-request': requestStub
    });
  });

  it('document calls proxy request with the correct paramaters', function() {
    quotes.document(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'quotes/document', requestOptionsStub);
  });
});
