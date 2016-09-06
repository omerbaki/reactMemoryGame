import * as ActionTypes from './actionsTypes';

export function tileClicked(tileId){
    return { type: ActionTypes.TILE_CLICK,  tileId };
}