const path = require('path');
const router = require('express').Router();
const express = require('express');

const publicDir = path.join(__dirname, 'public');

router.get(express.static(publicDir));