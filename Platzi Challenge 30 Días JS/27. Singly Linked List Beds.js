class Node {
  constructor(name, age, bedNumber) {
    this.name = name;
    this.age = age;
    this.bedNumber = bedNumber;
    this.next = null;
  }
}

class PatientList {
  constructor(beds) {
    this.head = null;
    this.tail = null;
    this.beds = [];
    for (let i = 0; i < beds; i++) {
      this.beds[i] = i + 1;
    }
  }

  bedAbiable() {
    return this.beds[0] ?? null;
  }

  addPatient(name, age) {
    const bed = this.bedAbiable();
    if (!bed) {
      throw new Error("No hay camas disponibles");
    }
    const newNode = new Node(name, age, bed);
    this.beds.shift();

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.lastBed++;
  }

  freeABed(bed) {
    this.beds.push(bed);
    this.beds.sort((a, b) => a - b);
  }

  removePatient(name) {
    if (this.head.name === name) {
      // Liberar la cama
      this.freeABed(this.head.bedNumber);

      // Asignar el nuevo head
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.name === name) {
        // Liberar la cama
        this.freeABed(currentNode.next.bedNumber);

        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
    throw new Error("Paciente no encontrado");
  }

  getPatient(name) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.name === name) {
        return {
          name: currentNode.name,
          age: currentNode.age,
          bedNumber: currentNode.bedNumber,
        };
      }
      currentNode = currentNode.next;
    }
    throw new Error("Paciente no encontrado");
  }

  getPatientList() {
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push({
        name: currentNode.name,
        age: currentNode.age,
        bedNumber: currentNode.bedNumber,
      });
      currentNode = currentNode.next;
    }
    return values;
  }

  getAvailableBeds() {
    console.log("\ncantidad:", this.beds.length);
    console.log("camas disponibles:", this.beds, "\n");
    return this.beds.length;
  }
}

const list = new PatientList(3);
list.addPatient("Paciente 1", 20);
list.addPatient("Paciente 2", 20);
list.addPatient("Paciente 3", 20);

console.log("lista:", list.getPatientList());

console.log("borrado==>");
list.removePatient("Paciente 2");

console.log(list.getAvailableBeds());

// list.getPatientList();
