import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EventSchema = Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: [{ type: String }],
    options: [{ type: String }],
    item_get: [{ type: Number }],
  },
  {
    collection: 'event',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const exportSchema = mongoose.model('event', EventSchema);

export default exportSchema;
