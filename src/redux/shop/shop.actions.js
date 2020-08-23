import {UPDATE_COLLECTIONS} from './shop.action.types'


export const updateCollections = (collectionsMap) => {
  return  {
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
  }
}
