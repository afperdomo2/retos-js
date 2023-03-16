function hotelSystem(rooms) {
  let reservations = [];
  return {
    searchReservation: function (id) {
      const reservation = reservations.find((res) => res.id === id);
      if (!reservation) {
        throw new Error("La reservación no fue encontrada");
      }
      return reservation;
    },

    getSortReservations: function () {
      return [...reservations].sort((a, b) => {
        return this.getDate(a.checkIn) - this.getDate(b.checkIn);
      });
    },

    addReservation: function (reservation) {
      const reservedRoom = reservations
        .filter(({ roomNumber }) => roomNumber === reservation.roomNumber)
        .some(
          ({ checkIn }) =>
            this.getDate(checkIn) >= this.getDate(reservation.checkIn) &&
            this.getDate(checkIn) <= this.getDate(reservation.checkOut)
        );
      if (reservedRoom) {
        throw new Error("La habitación no está disponible");
      }
      reservations.push(reservation);
      return "Success";
    },

    removeReservation: function (id) {
      const index = reservations.findIndex((res) => res.id === id);
      if (index == -1) {
        throw new Error("La reservación que se busca remover no existe");
      }
      const deleted = reservations[index];
      reservations.splice(index, 1);
      return deleted;
    },

    getReservations: function () {
      return reservations;
    },

    getAvailableRooms: function (checkIn, checkOut) {
      checkIn = this.getDate(checkIn);
      checkOut = this.getDate(checkOut);

      let roomsReserved = [];
      reservations.map((res) => {
        const checkInRes = this.getDate(res.checkIn);
        const checkOutRes = this.getDate(res.checkOut);
        if (
          (checkInRes >= checkIn && checkInRes <= checkOut) ||
          (checkOutRes >= checkIn && checkOutRes <= checkOut)
        ) {
          if (!roomsReserved.includes(res.roomNumber)) {
            roomsReserved.push(res.roomNumber);
          }
        }
      });
      const roomsAvailable = [];
      for (let i = 1; i <= rooms; i++) {
        if (!roomsReserved.includes(i)) {
          roomsAvailable.push(i);
        }
      }
      return roomsAvailable;
    },

    getDate: function (dateString) {
      const month = dateString.substring(3, 5);
      const day = dateString.substring(0, 2);
      const date = `${month}/${day}`;
      return new Date(date);
    },
  };
}

const hotel = hotelSystem(10);
hotel.addReservation({
  id: 1,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 1,
});
hotel.addReservation({
  id: 2,
  name: "Pepe Doe",
  checkIn: "03/05",
  checkOut: "04/05",
  roomNumber: 2,
});
hotel.addReservation({
  id: 3,
  name: "Pepe Doe",
  checkIn: "01/01",
  checkOut: "02/01",
  roomNumber: 3,
});

console.log(hotel.getSortReservations());
