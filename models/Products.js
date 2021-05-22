const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductsSchema = new Schema(
  {
    id: Number,
    name: String,
    conflicts: Array,
    category: String,
    goals: Array,
    tags: Array,
    image: String,
    ingredients: Array,
    expirationPeriod: String,
    time: Array,
    url: String,
    refrigeration: Boolean,
    packaging: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Products", ProductsSchema);
