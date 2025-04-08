// controllers/api/ticket/index.js

const ticket_service = require('../../../services/ticket');

const ticket_controller = {
  getAll(req, res) {
    res.json(ticket_service.getAll());
  },
  create(req, res) {
    const newTicket = ticket_service.create(req);
    res.status(201).json(newTicket);
  },
  update(req, res) {
    const updatedTicket = ticket_service.update(req.params.id, req.body);
    if (updatedTicket) {
      res.json(updatedTicket);
    } else {
      res.status(404).send('Ticket not found');
    }
  },
  delete(req, res) {
    const ticket = ticket_service.getById(req.params.id);
    if (ticket) {
      ticket_service.delete(req.params.id);
      res.status(204).send('Ticket deleted successfully');
    } else {
      res.status(404).send('Ticket not found');
    }
  }
};

module.exports = ticket_controller;
