import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HeroSchema = Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    life: { type: Number, required: true },
    atk: { type: Number, required: true },
    item: [{ type: Number }],
    achieve: [{ type: Boolean }],
    turn: { type: Number },
    money: { type: Number },
    max_life: { type: Number },
    battle_card: { type: Number },
  },
  {
    collection: 'hero',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const exportSchema = mongoose.model('hero', HeroSchema);

export default exportSchema;
