import Twitter from 'twitter'
 
const client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
})

const data = require('fs').readFileSync('BTC-JPY.png');

client.post('media/upload', { media: data }, (error, media, response) => {
  if (!error) {
    console.log(media);

    var status = {
      status: '',
      media_ids: media.media_id_string
    }

    client.post('statuses/update', status, (error, tweet, response) => {
      if (!error) {
        console.log(tweet)
      }
    })

  }
})
