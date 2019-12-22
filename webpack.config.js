const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const podcastRSSUrl = 'http://feeds.soundcloud.com/users/soundcloud:users:12398941/sounds.rss';
const contentBase = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    path: contentBase,
    filename: 'bundle.js'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/i,
        use: ['url-loader?limit=100000']
      },
      {
        test: /\.vue$/i,
        use: ['vue-loader']
      }
    ],
  },
  devServer: {
    contentBase,
    compress: true,
    port: 9000,
    before: (app, server, compiler) => {
      app.use(cors());

      app.get('/podcast/rss', (req, res) => {
        //res.set('Content-Type', 'text/xml');
        res.type('application/xml');

        fetch(podcastRSSUrl)
          .then(response => response.text())
          .then(body => res.send(body));
      });

      app.get('/podcast/json', (req, res) => {
        //res.set('Content-Type', 'text/xml');
        res.type('application/json');

        fetch('https://api-v2.soundcloud.com/users/12398941/tracks?representation=&client_id=vSW0IjOgX590JQk5rmZdDXn4yg30QKZA&limit=20&offset=0&linked_partitioning=1&app_version=1563180860&app_locale=en', {
          'credentials': 'include',
          'headers': {
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'authorization': 'OAuth 1-290036-12398941-6784b32fe71fd0',
            'sec-ch-ua': 'Google Chrome 75',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site'
          },
          'referrer': 'https://soundcloud.com/',
          'referrerPolicy': 'origin',
          'body': null,
          'method': 'GET',
          'mode': 'cors'
        })
          .then(response => response.text())
          .then(body => res.send(body));
      });
    }
  }
};
