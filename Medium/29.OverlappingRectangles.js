// Using the JavaScript language, have the function OverlappingRectangles(strArr) read the strArr parameter being passed 
// which will represent two rectangles on a Cartesian coordinate plane and will contain 8 coordinates 
// with the first 4 making up rectangle 1 and the last 4 making up rectange 2. 
// It will be in the following format: ["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"] 
// Your program should determine the area of the space where the two rectangles overlap, 
// and then output the number of times this overlapping region can fit into the first rectangle. 
// For the above example, the overlapping region makes up a rectangle of area 2, 
// and the first rectangle (the first 4 coordinates) makes up a rectangle of area 4, so your program should output 2. 
// The coordinates will all be integers. If there's no overlap between the two rectangles return 0. 

function OverlappingRectangles(strArr) {
  var str = strArr[0];
  var arr = str.split("),").join("").split(/[\(\)]/).slice(1,-1);
  var s1arr = arr.slice(0,4).map(function(e) {return e.split(",");});
  var s2arr = arr.slice(4,8).map(function(e) {return e.split(",");});
 
  var s1 = {val:"s1"};
  var s2 = {val:"s2"};
  var overlap = 0;


  s1.highest = +(s1arr.sort(function(pairA, pairB) {return +pairA[1] < +pairB[1];})[0][1]); 
  s1.rightest = +(s1arr.sort(function(pairA, pairB) {return +pairA[0] < +pairB[0];})[0][0]); 
  s1.lowest = +(s1arr.sort(function(pairA, pairB) {return +pairA[1] > +pairB[1];})[0][1]); 
  s1.leftest = +(s1arr.sort(function(pairA, pairB) {return +pairA[0] > +pairB[0];})[0][0]); 
  
  s2.highest = +(s2arr.sort(function(pairA, pairB) {return +pairA[1] < +pairB[1];})[0][1]); 
  s2.rightest = +(s2arr.sort(function(pairA, pairB) {return +pairA[0] < +pairB[0];})[0][0]); 
  s2.lowest = +(s2arr.sort(function(pairA, pairB) {return +pairA[1] > +pairB[1];})[0][1]); 
  s2.leftest = +(s2arr.sort(function(pairA, pairB) {return +pairA[0] > +pairB[0];})[0][0]); 
  
  s1.area = (s1.highest - s1.lowest) * (s1.rightest - s1.leftest);
  s2.area = (s2.highest - s2.lowest) * (s2.rightest - s2.leftest);

  // return 0 if no x overlap or no y overlap 
  if (s1.lowest > s2.highest || s2.lowest > s1.highest || s1.rightest < s2.leftest || s2.rightest < s1.leftest) {
    return 0;
  }
  
  // check if s2 is totally inside s1
  if (s2.highest <= s1.highest && s2.lowest >= s1.lowest && s2.rightest <= s1.rightest && s2.leftest >= s1.leftest) {
    overlap = s2.area;
  } else if (s1.highest <= s2.highest && s1.lowest >= s2.lowest && s1.rightest <= s2.rightest && s1.leftest >= s2.leftest) {
    // check if s1 is totally inside s2
    overlap = s1.area;
  } else {
    // (highest bottom - lowest top) * (highest left - lowest right) 
    overlap = (Math.max(s1.lowest, s2.lowest) - Math.min(s1.highest, s2.highest)) * (Math.max(s1.leftest, s2.leftest) - Math.min(s1.rightest, s2.rightest));
  }

  return  s1.area / overlap;

}

