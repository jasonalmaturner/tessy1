import axios from 'axios';
import assert from 'assert';

import '../lib/server.js';

// Need to write different tests for tessel?

describe('First get', () => {
  it('should return \'it\'s working!\'', done => {
    axios.get('http://127.0.0.1:9001/api/test').then(res => {
      assert.equal('it\'s working!', res.data);
      done();
    }).catch(err => {
      console.log('Something bad happened', err);
    });
  });
});
