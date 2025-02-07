const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const User = require('../models/User');
require('dotenv').config();

// Create Transaction
router.post('/', async (req, res) => {
  try {
    const { senderId, receiverId, amount, description } = req.body;

    // Validate users
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);
    if (!sender || !receiver) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check sender balance
    if (sender.balance < amount) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    // Update balances
    sender.balance -= amount;
    receiver.balance += amount;
    await sender.save();
    await receiver.save();

    // Save transaction
    const newTransaction = new Transaction({
      sender: senderId,
      receiver: receiverId,
      amount,
      description,
    });
    await newTransaction.save();

    res.status(201).json({ message: 'Transaction successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Transaction History
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const transactions = await Transaction.find({
      $or: [{ sender: userId }, { receiver: userId }],
    }).populate('sender', 'username').populate('receiver', 'username');
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
