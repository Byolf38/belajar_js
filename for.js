// LOGIC 1
for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 10; y++) {
    if (x == y) {
      document.write(" * ");
    } else document.write(" _ ");
  }
  document.write("<br/>");
}
// LOGIC 2
for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 10; y++) {
    if (x + y == 9) {
      document.write(" * ");
    } else document.write(" _ ");
  }
  document.write("<br/>");
}
// LOGIC 3
for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 10; y++) {
    if (x == y || x + y == 9) {
      document.write(" * ");
    } else document.write(" _ ");
  }
  document.write("<br/>");
}
// LOGIC 4
for (var x = 1; x < 10; x++) {
  for (var y = 1; y < 10; y++) {
    if (y == x || x + y == 10 || (x == y) == 5 || y == 5) {
      document.write(" * ");
    } else document.write(" _ ");
  }
  document.write("<br/>");
}

// LOGIC 5
for (var x = 1; x < 10; x++) {
  for (var y = 1; y < 10; y++) {
    if ((x && y == 5) || (y && x == 5)) {
      document.write(" * ");
    } else document.write(" _ ");
  }
  document.write("<br/>");
}
