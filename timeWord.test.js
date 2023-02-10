const {timeword} = require('./timeWord');
const {timeWord} = require('./timeWord');

describe('#timeword', () => {
  it('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('checking special times',()=>{
  it('checks noon',()=>{
    except(timeword('00:00')).toBe('noon')
  })
  it('Checks midnight', ()=>{
    except(timeword('12:00')).toBe('midnight')
  })
})

describe('checking some times',()=>{
  it('checks noon',()=>{
    except(timeword('01:13')).toBe('one thirteen am')
  })
  it('Checks midnight', ()=>{
    except(timeword('22:00')).toBe('twentytwo oclock pm')
  })
})
