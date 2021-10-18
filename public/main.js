const student = document.getElementById("studentName");
const submitStudent = document.getElementById("submit");

// console.log(student);
submitStudent.addEventListener("click", () => {
  //   event.preventDefault;
  console.log(student.value);
  const body = { name: student.value };
  console.log(body);
  axios
    .post("http://localhost:4000/api/add-student", body)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
});
