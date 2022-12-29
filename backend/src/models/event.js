import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EventSchema = Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: [{ type: String }],
  },
  {
    collection: 'event',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const exportSchema = mongoose.model('event', EventSchema);

export default exportSchema;
