const rp = require('request-promise')
const {StartGameMessage, PlayAgainMessage, DogMultipleChoiceQuestion} = require('./messager')
const {postMessageWithText} = require('./messager-utils')

async function events(req, res) {
    // TODO: Implement
}

async function actions(req, res) {
    // TODO: Implement
}

async function handlePayload(payload) {
    // TODO: Implement
}

async function sendDogMultipleChoiceQuestion(channelID) {
    // TODO: Implement
}

async function getDogs() {
    // TODO: Implement
}

module.exports = { actions, events }