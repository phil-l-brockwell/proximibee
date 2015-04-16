var User = function() {
  this.visitsData = [];
  this.purchaseData = [];
};

User.prototype.addVisitData = function(newVisit) {
  this.visitsData.push(newVisit);
};

User.prototype.addPurchaseData = function(newPurchase) {
  this.purchaseData.push(newPurchase);
}
