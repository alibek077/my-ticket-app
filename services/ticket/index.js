// services/ticket/index.js

const fs = require('fs');
const path = require('path');

// Ensure that you are correctly referencing the path to the mock database
const ticketsPath = path.join(__dirname, '../../data/mock_db.json');
let tickets = JSON.parse(fs.readFileSync(ticketsPath, 'utf8')); // Read the file

const ticket_service = {
  getAll() {
    return tickets;
  },
  getById(id) {
    if (typeof id !== 'string') {
      throw new Error('The "id" argument must be of type string');
    }
    return tickets.find(t => t.id === id);
  },
  create(req) {
    const new_id = genRandId(4);
    const ticket = req.body;
    const new_ticket = { id: new_id, ticket };
    tickets.push(new_ticket);
    writeToFile(tickets);
    return new_ticket;
  },
  update(id, updateData) {
    const ticketIndex = tickets.findIndex(t => t.id === id);
    if (ticketIndex === -1) return null;
    tickets[ticketIndex].ticket = { ...tickets[ticketIndex].ticket, ...updateData };
    writeToFile(tickets);
    return tickets[ticketIndex];
  },
  delete(id) {
    const index = tickets.findIndex(t => t.id === id);
    if (index >= 0) {
      tickets.splice(index, 1);
      writeToFile(tickets);
    }
  }
};

// Helper functions
const writeToFile = (data) => {
  fs.writeFileSync(ticketsPath, JSON.stringify(data, null, 4), 'utf8');
};

const genRandId = (count) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < count; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

module.exports = ticket_service;
