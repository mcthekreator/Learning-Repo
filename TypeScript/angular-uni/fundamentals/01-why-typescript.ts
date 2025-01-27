
const newCourseName = "Typescript bootcamp";

PrintCourseName(newCourseName);

PrintCourseName(100);
PrintCourseName([0, 1, 2]);

function PrintCourseName(name: string) {
  console.log(`Course Name: ${name}`);
}
