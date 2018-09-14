import {DragAndDropHandler} from 'substance'
import {idGenerator, api} from 'writer'

class MySearchPluginDropHandler extends DragAndDropHandler {

    match(params) {
        return params.uri && params.uri.includes('https://s2.reutersmedia.net')
    }

    drop(tx, params) {
        alert('Dropped stuff')
    }
}

export {MySearchPluginDropHandler}
