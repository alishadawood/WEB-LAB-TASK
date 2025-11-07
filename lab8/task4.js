let marks = [45, 70, 80, 95, 53, 78, 20];
let passStudents = marks.filter(function(mark) {
  return mark > 50;
});
console.log("students Marks greater than 50 are:", passStudents);
