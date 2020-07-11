import React, { Component } from 'react'

var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=0d511d31d86b4079a25af3509620ed13';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

class Newsfeed extends Component {
  render() {
    return <div> Newsfeed </div>
  }
}

export default Newsfeed

// API KEY - 0d511d31d86b4079a25af3509620ed13
