import {DragAndDropHandler} from 'substance'
import {idGenerator, api} from 'writer'

class MySearchPluginDropHandler extends DragAndDropHandler {

    match(params) {
        return params.uri && params.uri.includes('https://s2.reutersmedia.net')
    }

    drop(tx, params) {
        const nodeId = idGenerator()

        const imageFileNode = {
            parentNodeId: nodeId,
            type: 'npfile',
            imType: 'x-im/image',
            sourceUrl: params.uri
        }

        const imageNode = tx.create(imageFileNode)

        tx.insertBlockNode({
            id: nodeId,
            type: 'ximimage',
            imageFile: imageNode.id,
            caption: '',
            alttext: '',
            credit: '',
            alignment: '',
            width: 0,
            height: 0
        })

        tx.setSelection({
            type: 'node',
            containerId: tx.getSelection().containerId,
            nodeId: nodeId,
            mode: 'after'
        })

        setTimeout(() => {
            api.editorSession.fileManager.sync()
                .then(() => {
                    const imageNode = api.editorSession.getDocument().get(nodeId)
                    imageNode.emit('onImageUploaded')
                })
                .catch(() => {
                })
        }, 0)
    }
}

export {MySearchPluginDropHandler}
