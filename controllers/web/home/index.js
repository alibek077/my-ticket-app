const ticket_service = require('../../../services/ticket');

const home_controller = {
  index: async (req, res) => {
    // Get all tickets using the service
    const tickets = ticket_service.getAll();
    
    // Render the home page with the tickets data
    res.render('home/index', { tickets });
  },
  add: async (req, res) => {
    res.render('home/add_update', { mode: 'Add' });
  },
  update: async (req, res) => {
    const eventData = ticket_service.getById(req.params.id);
    res.render('home/add_update', { mode: 'Update', eventData });
  }
};

module.exports = home_controller;
