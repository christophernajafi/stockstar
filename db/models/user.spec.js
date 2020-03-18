const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      const aUser

      beforeEach(async () => {
        aUser = await User.create({
          firstName: 'Steve',
          lastName: 'Jobs',
          email: 'steve@email.com',
          password: 'password'
        })
      })

      it('returns true if the password is correct', () => {
        expect(aUser.correctPassword('password')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(aUser.correctPassword('wrongPassword')).to.be.equal(false)
      })
    })
  })
})
