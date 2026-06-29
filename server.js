
import app from "#app";
import { request, response } from "express";
const PORT = 3000;
const { getEmployees, getRandom, getId }
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get ("/", (request, response) => {
response.send("Hello employees!");
});

app.get ("/employees", (request, response) => {
   const employees = getEmployees()
response.send(employees)
})

app.get ("/employees/randomm", (request, response) => {
  const random = getRandom
  response.send(random)
})

app.get ("/employees/:id", (request, response) => {
  const { id } = request.params;
  const employee = getId(Number(id))
  if (!employee) {
    return response.status(404).send(`${id} doesn't cant be found.`)
  }
  response.send (employee);
})
