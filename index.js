const mark = 40;
// Switch statement between  mark range %
// If statement to display description, using larger mark percentage range
// Print results
switch (true) {
  case mark <= 39: {
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
  default: {
      console.log("Please enter a valid mark.")
  }
}

if ( mark <= 39 ) {
    var desc = "fail";
} else if (mark <= 59) {
    var desc = "pass"
} else if (mark <= 74) {
    var desc = "pass with merit"
} else if (mark <= 100) {
    var desc = "pass with distinction"
}

if (mark <= 100) {
    console.log("Your mark is " + mark + " out of 100. You receieved a result of " + result + ". This means you " + desc + "." );
}
