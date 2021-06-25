const fs = require('fs');
const SpotifyWebApi = require('spotify-web-api-node');
const token="BQDf2z9lXAmd-ui9ht40g2tSTZO9BQ_7h0aVxaElTHkqt-UcZcHTo8EBVdpIif2sDg9HVzKPqJve8mdhfoppitv0lWZ9vdapTiKGu5F7w1tMSPaZXOM-TrvFtxmGW0-0nY__Pprmhcn8alFUzK5p2NG9LbR0-UR3-jwyNRSice6qa_Fp47I8PrN1BHOGVZEXWqE33KAtQjZGxOWJR3M4bHthatjYe7OcJebBai_kM-C8cQjg3o_16GXeL_rsG--3ZLd_MxQnJQrju-B7DLnH0GCba0_2OoLSFA";
const express = require('express');
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);


const getMyDataID=()=>{
    (async () =>{
        const me = await spotifyApi.getMe();
        console.log(me.body.id);
        const aboutMeID = me.body.id;
        return aboutMeID;
        
    })().catch(e=>{
        console.error(e);
    });
}

function myTopTracks() {
let tracks = [];
spotifyApi.getMyTopTracks()
  .then(function(data) {
    for(let track of data.body.items){
        console.log(track.name);
        console.log(track.href);
        tracks.push(track.name);
        
    }

  }, function(err) {
    console.log('Something went wrong!', err);
  });
}


module.exports = myTopTracks();