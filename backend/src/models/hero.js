import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HeroSchema = Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    Life: { type: Number, required: true },
    Atk: { type: Number, required: true },
    item: [{ type: Number }],
    achieve: [{ type: Boolean }],
    turn: { type: Number },
    Money: { type: Number },
  },
  {
    collection: 'hero',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const exportSchema = mongoose.model('hero', HeroSchema);

export default exportSchema;
