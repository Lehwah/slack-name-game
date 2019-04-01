const {postMessageWithBlocks} = require('./messager-utils.js')
const { Section, Text, Image, Button, Action } = require('./message-components.js')

const ConfirmationMessage = (message, blockID, channelID) => {
    // TODO: Implement
}

const MultipleChoiceQuestion = (config) => {
    // TODO: Implement
}

const StartGameMessage = (channelID) => {
    // TODO: Implement
}

const PlayAgainMessage = (channelID) => {
    // TODO: Implement
}

const defaultDogNames = ['boxer', 'corgi', 'shitzu', 'weiner']
const defaultDog = {
    url: "https://images.dog.ceo/breeds/boxer/n02108089_6008.jpg", 
    breed: "boxer"
}

const DogMultipleChoiceQuestion = (config) => {
    // TODO: Implement
}
    
module.exports = {
    StartGameMessage,
    PlayAgainMessage,
    DogMultipleChoiceQuestion,
}