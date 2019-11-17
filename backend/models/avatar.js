var mongoose = require('mongoose');

var avatarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    img_url: { // new field added in accordance to the add-up field of the input form
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzUVk9LkNTfyu0BNjGlR_5Nw_5rtVT1oYF96NQnV3_YtEfY1_&s"
    },
    description:{ // new field added in accordance to the add-up field of the input form
        type: String,
        default: "None"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var AvatarModule = mongoose.model('Avatar', avatarSchema);

module.exports = AvatarModule;