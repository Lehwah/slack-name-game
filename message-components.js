const addField = (object, key, value) => { 
    if (value) {
        object[key] = value
    }
    return object
}

const Section = (text, accessory, fields, block_id) => {
    const result = {type: 'section', text, addField}
    result
        .addField(result, "accessory", accessory)
        .addField(result, "fields", fields)
        .addField(result, "block_id", block_id)
    delete result.addField
    return result
}

const Text = (type, text, emoji, verbatim) => {
    const result = {type, text, addField}
    result
        .addField(result, "emoji", emoji)
        .addField(result, "verbatim", verbatim)
    delete result.addField
    return result
}

const Button = (value) => {
    return {
        type: 'button',
        text: {
            type: 'plain_text',
            text: value
        },
        value,
    }
}

const Action = (elements, block_id) => {
    const result = {type: 'actions', elements, addField}
    result.addField(result, "block_id", block_id)
    delete result.addField
    return result
}

const Divider = () => ({type: 'divider'})

const Image = (image_url, alt_text, title, block_id) => {
    const result = {type: 'image', image_url, alt_text, addField}
    result
        .addField(result, "title", title)
        .addField(result, "block_id", block_id)
    delete result.addField
    return result
}

const Context = (elements, block_id) => {
    const result = {type: 'context', elements, addField}
    result
        .addField(result, "block_id", block_id)
    delete result.addField
    return result
}

const Header = (text) => [Divider(), Section(text), Divider()]

module.exports = {
    Text,
    Image,
    Context,
    Divider,
    Section,
    Header,
    Button,
    Action
}


