"use strict"

const map = require("lodash.map")

module.exports = (array, value) => map(array, () => value)
