/* JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts 
purchase price as the first argument (price), payment as the second argument 
(cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status 
key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less 
than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for 
the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins 
and bills, sorted in highest to lowest order, as the value of the change key. */

function checkCashRegister(price, cash, cid) {
    // Calculate the change owed
    var oChange = cash - price;
    var change = cash - price;
    var array = [];
    var myObj;
    var flipIt = false;

    // Calculate the max currency unit

    // array of currency unit values
    var units = [['PENNY', .01], ['NICKEL', .05], ['DIME', .1], ['QUARTER', 0.25], ['ONE', 1], ['FIVE', 5], ['TEN', 10], ['TWENTY', 20], ['ONE HUNDRED', 100]];
    
    var maxUnitFromChangeOwed = function(array, change, array2) {
      var myArr = [];

      array.forEach(function(item, index) {
          if (change >= item[1] && array2[index][1] > 0) {
             myArr.push(item);
            //  console.log("Yo "  + item);
            //  console.log("Yo " + array2[index]);

          }
          
      });

      var max = myArr[myArr.length - 1];
      
      return max;
  }
    // 
    
   // console.log(maxUnitChange);

   // Find the matching array
   var findUnitArray = function(unitArr, targetArr) {
     
    var myArr = [];

    targetArr.forEach(function(item, index, arr) {
        if (item[0] === unitArr[0]) {
          //  console.log(item);
            myArr.push(item);
            myArr.push(index);
        }

    });

    return myArr;
  }

  var addUnits = function(num, change, drawChange) {
    var sum = 0;
    while ((change - sum) >= num && (drawChange - sum) >= num) {
        // console.log((change - sum));
        // console.log((drawChange - sum));
        sum = Math.round((sum + num) * 100) / 100;
        
    }
      return Math.round(sum * 100) / 100;
  }

  var changeInDraw = function(thisArray) {
    var sum = 0;
      thisArray.forEach(function(item, index) {
          sum += item[1];
      });
      return Math.round(sum * 100) / 100;
  }

 
  while(change > 0 && changeInDraw(cid) >= change) {
    var arrscope = [];

        var myArr = [];
        var maxUnitChange = maxUnitFromChangeOwed(units, change, cid);
        console.log("The max unit is " + maxUnitChange[1]);
        var drawChange = findUnitArray(maxUnitChange, cid);
       console.log(maxUnitChange[1], change, drawChange[0][1]);
        var sum = addUnits(maxUnitChange[1], change, drawChange[0][1]);
       console.log("The sum is " + sum);
        
        arrscope.push(maxUnitChange[0]);
        arrscope.push(sum);
        change = Math.round((change - sum) * 100) / 100;
        console.log("Change is " + change);
        console.log(arrscope);
        array.push(arrscope);

        units.forEach(function(item, index) {
            if (item[0] !== maxUnitChange[0]) {
              myArr.push(item);
            }
        });
        if (sum === 0) {
          myObj = {status: "INSUFFICIENT_FUNDS", change: []};
          flipIt = true;
          break;
        } else {
          units = [...myArr];
        }
      
        
      }
    //  console.log(array);


    
     

       cid.forEach(function(item, index) {
          if (item[1] === 0) {
              array.push(item);
          }
        });

        // console.log("The change in Draw is " + changeInDraw(cid));
        // console.log("The change is " + change);

      
      if (changeInDraw(cid) > oChange && flipIt === false) {
        myObj = {status: "OPEN", change: array};
      } else if (changeInDraw(cid) === oChange & flipIt === false) {
        myObj = {status: "CLOSED", change: array};
      } else {
        myObj = {status: "INSUFFICIENT_FUNDS", change: []};
      }
    
       

     return myObj;

  }

 

  
  //  return [];

  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}).