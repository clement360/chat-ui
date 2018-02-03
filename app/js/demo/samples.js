import { $ } from 'utilities/shorthands'

let ChatUI

setTimeout(() => {
  ChatUI = $('chat-ui')

  $('#bot-send').addEventListener('click', e => {
    ChatUI.newMessage({
      mine: false,
      type: 'HTML',
      author: {
        name: '${bot_name}',
        avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
      },
      contents: $('#bot-says').value
    })

    $('#bot-says').value = ''
  })
}, 1000)

window.testCard = () => {
  // !api changing
  ChatUI.newMessage({
    mine: false, 
    type: 'Card',
    author: {
      name: '${bot_name}',
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
    },
    cards: [{
      image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png',
      text: 'test'
    }]
  })
}

window.testCards = () => {
  ChatUI.newMessage({
    mine: false, 
    type: 'Card',
    author: {
      name: '${bot_name}',
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
    },
    cards: [{
      image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png',
      text: 'test'
    },
    {
      image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png',
      text: 'test'
    },
    {
      image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png',
      text: 'test'
    }]
  })
}

window.testImage = () => {
  // !api changing
  ChatUI.newMessage({
    mine: false, 
    type: 'Image',
    author: {
      name: '${bot_name}',
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
    },
    image: 'http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png'
  })
}

window.testGallery = () => {
  // !api changing
  ChatUI.newMessage({
    mine: false, 
    type: 'Gallery',
    author: {
      name: '${bot_name}',
      avatar: 'https://cdn.dribbble.com/users/37530/screenshots/2937858/drib_blink_bot.gif'
    },
    images: [
      {src:"http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png"},
      {src:"http://8bitdecals.com/wp-content/uploads/2012/06/shop_tokyo_fullsize.png"}
    ]
  })
}