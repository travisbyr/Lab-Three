const mark = 100;

//---------------------------------------------------

switch (true) {
  case mark <= 39: { // If result is less than the mark percentage, set variable result to the corresponding grade.
    var result = "E";
    break;
  }
  case mark <= 49: {
    var result = "D";
    break;
  }
  case mark <= 54: {
    var result = "C";
    break;
  }
  case mark <= 59: {
    var result = "C+";
    break;
  }
  case mark <= 64: {
    var result = "B-";
    break;
  }
  case mark <= 69: {
    var result = "B";
    break;
  }
  case mark <= 74: {
    var result = "B+";
    break;
  }
  case mark <= 79: {
    var result = "A-";
    break;
  }
  case mark <= 84: {
    var result = "A";
    break;
  }
  case mark <= 100: {
    var result = "A+";
    break;
  }
  default: { // If user chosen mark does not apply to the above case statements(greater than 100), request a valid mark.
      console.log("Please enter a valid mark.")
  }
}

//---------------------------------------------------

desc = mark <= 39 ? 'fail' : '';
desc = mark <= 59 ? 'pass' : '';
desc = mark <= 74 ? 'pass with merit' : '';
desc = mark <= 100 ? 'pass with distinction' : '';

/*
if ( mark <= 39 ) { // If mark is less than a mark percentage, set grade description variable to the corresponding description.
    var desc = "fail";
} else if (mark <= 59) {
    var desc = "pass"
} else if (mark <= 74) {
    var desc = "pass with merit"
} else if (mark <= 100) {
    var desc = "pass with distinction"
}
*/

//---------------------------------------------------

if (mark <= 100) { // If mark is less than 100, then its a valid mark, so print result/findings to user. 
    console.log("Your mark is " + mark + " out of 100. You receieved a result of " + result + ". This means you " + desc + "." );
}
