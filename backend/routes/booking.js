const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create a new booking
router.post('/', async (req, res) => {
  console.log('[POST] /api/booking - Payload:', req.body);
  try {
    const { startDate, endDate, totalPrice, fullName, email, phone, imgUrl } = req.body;
    const booking = new Booking({
      startDate,
      endDate,
      totalPrice,
      fullName,
      email,
      phone,
      imgUrl
    });
    await booking.save();
    console.log('[POST] /api/booking - Booking created:', booking);
    res.status(201).json(booking);
  } catch (err) {
    console.error('[POST] /api/booking - Error:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// Get all bookings
router.get('/', async (req, res) => {
  console.log('[GET] /api/booking - Fetching all bookings');
  try {
    const bookings = await Booking.find();
    console.log('[GET] /api/booking - Bookings found:', bookings.length);
    res.json(bookings);
  } catch (err) {
    console.error('[GET] /api/booking - Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Get a single booking by ID
router.get('/:id', async (req, res) => {
  console.log(`[GET] /api/booking/${req.params.id} - Fetching booking`);
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      console.warn(`[GET] /api/booking/${req.params.id} - Booking not found`);
      return res.status(404).json({ error: 'Booking not found' });
    }
    console.log(`[GET] /api/booking/${req.params.id} - Booking found:`, booking);
    res.json(booking);
  } catch (err) {
    console.error(`[GET] /api/booking/${req.params.id} - Error:`, err.message);
    res.status(500).json({ error: err.message });
  }
});

// Update a booking by ID
router.put('/:id', async (req, res) => {
  console.log(`[PUT] /api/booking/${req.params.id} - Update payload:`, req.body);
  try {
    const { startDate, endDate, totalPrice, fullName, email, phone, imgUrl } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { startDate, endDate, totalPrice, fullName, email, phone, imgUrl },
      { new: true }
    );
    if (!booking) {
      console.warn(`[PUT] /api/booking/${req.params.id} - Booking not found`);
      return res.status(404).json({ error: 'Booking not found' });
    }
    console.log(`[PUT] /api/booking/${req.params.id} - Booking updated:`, booking);
    res.json(booking);
  } catch (err) {
    console.error(`[PUT] /api/booking/${req.params.id} - Error:`, err.message);
    res.status(400).json({ error: err.message });
  }
});

// Delete a booking by ID
router.delete('/:id', async (req, res) => {
  console.log(`[DELETE] /api/booking/${req.params.id} - Deleting booking`);
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      console.warn(`[DELETE] /api/booking/${req.params.id} - Booking not found`);
      return res.status(404).json({ error: 'Booking not found' });
    }
    console.log(`[DELETE] /api/booking/${req.params.id} - Booking deleted`);
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    console.error(`[DELETE] /api/booking/${req.params.id} - Error:`, err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
