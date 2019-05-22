import { addBeer, removeBeer, addSandwich, removeSandwich, addChips, removeChips } from './lunchActions';

describe('ALL LUNCH ACTIONS', ()=>{
  it('can add a beer', ()=>{
    const object = addBeer('ipa');
    expect(object).toEqual({
      type: 'ADD_BEER',
      payload: 'ipa'
    });
  });
  it('can remove a beer', ()=>{
    const object = removeBeer('ipa');
    expect(object).toEqual({
      type: 'REMOVE_BEER',
      payload: 'ipa'
    });
  });
  it('can add a sandwich', ()=>{
    const object = addSandwich('pjb');
    expect(object).toEqual({
      type: 'ADD_SANDWICH',
      payload: 'pjb'
    });
  });
  it('can remove a sandwich', ()=>{
    const object = removeSandwich('pjb');
    expect(object).toEqual({
      type: 'REMOVE_SANDWICH',
      payload: 'pjb'
    });
  });
  it('can add chips', ()=>{
    const object = addChips('BBQ');
    expect(object).toEqual({
      type: 'ADD_CHIPS',
      payload: 'BBQ'
    });
  });
  it('can remove chips', ()=>{
    const object = removeChips('BBQ');
    expect(object).toEqual({
      type: 'REMOVE_CHIPS',
      payload: 'BBQ'
    });
  });
})
;
