import { Schema, model, models } from "mongoose";

const projectBuilderSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  typeProject: {
    type: String,
  },
  ownerName: {
    type: String,
  },
  ownerContact: {
    type: String,
  },
  description: String,
  features: {
    type: [String],
  },
  status: {
    type: String,
    enum: ['requested', 'review', "accepted", "developing", "refused"]
  }
});

export const ProjectBuilder =
  models.ProjectBuilder || model("ProjectBuilder", projectBuilderSchema);
