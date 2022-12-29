import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AchieveSchema = Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String },
  },
  {
    collection: 'achieve',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const exportSchema = mongoose.model('achieve', AchieveSchema);

export default exportSchema;
