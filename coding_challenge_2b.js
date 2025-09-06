// Coding Challenge 00

unitCost = 12.99
itemname = "gum"
currentStock = 59
reorderLevel = 75
targetStock = 100
weeklyDemand = 75
supplierLeadTimeWeeks = "2 week"
weeksOfCover = (weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity)
stockDeficit = Math.max(0, targetStock - currentStock)
reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
estimatedReorderCost = reorderQuantity * unitCost
reorderNow = "REORDER NOW", currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

console.log (itemname)
console.log (weeksOfCover), round = 2
console.log (reorderNow)
console.log (reorderQuantity)
console.log (estimatedReorderCost)