import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HeroSchema = Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    img_idle: { type: String },
    img_atk: { type: String },
    img_takeHit: { type: String },
    img_dead: { type: String },
    img_defence: { type: String },
    Life: { type: Number, required: true },
    Atk: { type: Number, required: true },
    item: [{ type: Boolean }],
    achieve: [{ type: Boolean }],
  },
  {
    collection: 'hero',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const exportSchema = mongoose.model('hero', HeroSchema);

export default exportSchema;
