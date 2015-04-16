describe('User', function() {

  var user = new User;

  it('initialises with an empty array of visits', function() {
    expect(user.visitsData).toEqual([]); 
  })

  it('can add a new visit', function() {
    visit = { 'beacon1': { distance: 0.1 } }
    user.addVisitData(visit)
    expect(user.visitsData).toEqual([{ 'beacon1': { distance: 0.1 } }])
  });

  it('initialises with an empty array of purchases', function() {
    expect(user.purchaseData).toEqual([]);
  });

  it('can add a new purchase', function() {
    purchase = { value: 14.99, area: 1 }
    user.addPurchaseData(purchase)
    expect(user.purchaseData).toEqual([{ value: 14.99, area: 1 }])
  });

})