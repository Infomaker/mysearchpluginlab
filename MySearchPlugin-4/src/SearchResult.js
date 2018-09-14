import {Component} from 'substance'

class SearchResult extends Component {
    render($$) {
        if (!this.props.items || this.props.items.length === 0) {
            return $$('div')
        }


        const itemsWithImages = this.props.items.filter(item => { return item.urlToImage })
        const el = $$('div')

        itemsWithImages.forEach(item => {
            el.append(
                $$('img')
                    .css({display: 'inline-block', width: '45%', margin: '0 0 4% 4%'})
                    .attr({
                        src: item.urlToImage,
                        draggable: true
                    })
                    .on('dragstart', this._onDragStart)
            )
        })

        return el
    }

    _onDragStart(e) {
        e.stopPropagation()

        e.dataTransfer.setData(
            'text/uri-list',
            e.target.src
        )
    }
}

export {SearchResult}
