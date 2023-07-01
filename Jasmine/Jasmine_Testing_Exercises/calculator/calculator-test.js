
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount: 10000, years: 5, rate: 2.5};
  
  expect(calculateMonthlyPayment(values)).toBe('177.47')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 10000, years: 8, rate: 5.501};
  
  expect(calculateMonthlyPayment(values)).toBe('129.00')

});

/// etc
it("should handle high interest rates", function() {
  // ..
  const values = {amount: 10000, years: 8, rate: 99};
  
  expect(calculateMonthlyPayment(values)).toEqual('825.41')

});