const remoteURL = "http://localhost:8088"

export const getEmployeeById = (employeeId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/employee/${employeeId}?_expand=name&_expand=job`)
  .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees`)
  .then(res => res.json())
}
