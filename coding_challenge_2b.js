// Coding Challenge 00

unitCost = 12.99
itemname = "gum"
currentStock = 59
reorderLevel = 75
targetStock = 100
weeklyDemand = 75
supplierLeadTimeWeeks = "2 week"
weeksOfCover = (weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity), round = 2
stockDeficit = Math.max(0, targetStock - currentStock)
reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
estimatedReorderCost = reorderQuantity * unitCost.tofixed(2)
reorderNow = "REORDER NOW", currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

console.log (itemname)
console.log (weeksOfCover)
console.log (reorderNow)
console.log (reorderQuantity)
console.log ("estimated cost")(estimatedReorderCost)