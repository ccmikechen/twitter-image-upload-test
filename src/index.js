import Twitter from 'twitter'
 
const client = new Twitter({
  consumer_key: 'QjhM882cOrkAgTdRdd85p4gD3',
  consumer_secret: 'gzxoJCVXsys7ZnA0jaSkWonOgnkIEwMIZfZuQUR0ezZeU2poHy',
  access_token_key: '1032570257645297664-ZB4yQhN7OsOkOxcXNSX8jkwrqirqxh',
  access_token_secret: 'BglaAnaizsMFONGUaVa3XI3xamCPLl6l5w3wrUgiILpS4'
})

const params = { screen_name: 'nodejs' }
client.get('statuses/user_timeline', params, (error, tweets, response) => {
  if (!error) {
    console.log(tweets)
  }
})
