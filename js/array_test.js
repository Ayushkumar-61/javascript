// ---- two types of array you get in javascript ---
     // continous, Holey //


 // ----- javascript does three types of optimization ---- //
 // SMI (small integer)
 // PACKED element
 // DOUBLE (float, string, function)


 const arrTwo = [1, 2, 3, 4, 5]
 // PACKED_SMI_ELEMENTS

 arrTwo.push(6.0)
 // PACKED_DOUBLE_ELEMENTS
 
 
 arrTwo.push('7')
 // PACKED ELEMENTS

 arrTwo[10] = 11
 // HOLY ELEMENTS

 console.log(arrTwo)
 console.log(arrTwo.length)
 console.log(arrTwo[9]);


 // bound check
 // hasOwnproperty(arrtwo, 9)
  // hasOwnproperty(arrtwo.prototype, 10)
 // hasownproperty(object.prototype, 10)


 // holes are very expensive in javascript


 const arrThree = [1, 2, 3, 4, 5]
 console.log(arrThree[2])


 // SMI > DOUBLE > PACKED ---continious ones are there ---
 // H_SMI > H_DOUBLE > H_PACKED --holy ones


 const arrfour = new Array[3]
 // just 3 holes. HOLY_SMI_ELEMENTS


 arrfour[0] = '1' //HOLY ELEMENTS
 arrfour[1] = '2' //HOLY ELEMENTS
 arrfour[2] = '3' //HOLY ELEMENTS


 const arrFive = []
 arrFive.push('1') //PACKED_ELEMENTS
 arrFive.push('2') // PACKED ELEMENTS
 arrFive.push('3') // PACKED ELEMENTS


 const arrSix = [1, 2, 3, 4, 5]

 arrSix.push(NaN) // packed double


 // for, for-of, foreach ---always use default loops in javascript---