var _ = require('lodash');
var images = [
    require('../../images/1.jpg'),
    require('../../images/2.jpg'),
    require('../../images/3.jpg'),
    require('../../images/4.jpg'),
    require('../../images/5.jpg'),
    require('../../images/6.jpg'),
    require('../../images/7.jpg'),
    require('../../images/8.jpg'),
    require('../../images/9.jpg'),
    require('../../images/10.jpg')
    ];

var _tiles = [];

function generateTiles() {
    images = images.concat(images);
    images = _.shuffle(images);
    for (var i = 0; i < images.length; i++) {
        _tiles.push({
             id: i,
             image: images[i],
             flipped: false,
             matched: false
        });
    }
}

generateTiles();

const TileStore = () => {
    return {
        getAll() {
            return _tiles;
        },

        tileFlipped(tileIndex) {
            _tiles[tileIndex].flipped = true;
        },

        getFirstFlipIndex() {

            var firstFlipIndex = null;

            for (var id in _tiles) {
                if (_tiles[id].flipped === true && _tiles[id].matched === false) {
                    firstFlipIndex = id;
                }
            }

            return firstFlipIndex;
        },

        matchCheck() {
            var flippedTiles = [];

            for (var id in _tiles) {
                if (_tiles[id].flipped === true && _tiles[id].matched === false) {
                    flippedTiles.push(id);
                }
            }

            if(_tiles[flippedTiles[0]].image === _tiles[flippedTiles[1]].image) {
                _tiles[flippedTiles[0]].matched = true;
                _tiles[flippedTiles[1]].matched = true;
            } else {
                _tiles[flippedTiles[0]].flipped = false;
                _tiles[flippedTiles[1]].flipped = false;
            }
        }
    }
};

export default TileStore();
