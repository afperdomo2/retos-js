function validateForm(formData, registeredUsers) {
  const required = ["name", "lastname", "email", "password"];
  const missingFields = [];
  required.map((field) => {
    if (formData[field] == undefined) {
      missingFields.push(field);
    }
  });
  if (missingFields.length) {
    throw new Error(
      `Faltan los siguientes campos: ${missingFields.join(", ")}`
    );
  }
  if (registeredUsers.some(({ email }) => email === formData.email)) {
    throw new Error(`Email duplicado: ${formData.email}`);
  }
  delete formData.password;
  registeredUsers.push(formData);

  return `Tu registro fue exitoso ${formData.name} ${formData.lastname}`;
}

const formData = {
  name: "Juan",
  lastname: "Perez",
  email: "pedro2@example.com",
  password: "123456",
};

const registeredUsers = [
  { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
  { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
];

validateForm(formData, registeredUsers);
