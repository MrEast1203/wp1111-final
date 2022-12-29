import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    img: { type: String },
    description: { type: String },
    buff: {
      buff_type: { type: String },
      value: { type: Number },
    },
  },
  {
    collection: 'item',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const exportSchema = mongoose.model('item', ItemSchema);

export default exportSchema;
