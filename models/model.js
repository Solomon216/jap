import { Schema,model,models } from "mongoose";

var eventSchema = new Schema({
    id: Number,
    artist: String,
    name : String,
    date: String,
    price: String,
    location: String,
    image : String,
    showmedia: String
})

const Events = models.Events || model("Events",eventSchema)

export default Events;