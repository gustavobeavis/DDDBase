/* global  describe, it,request */
describe('HTTP - Health route', () => {
  it('should return api status 200', done => {
    request
      .get('/status')
      .expect(200)
      .end((err, res) => {
        done(err)
      })
  })
})
