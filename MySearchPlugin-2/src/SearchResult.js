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
                    .attr({src: item.urlToImage })
            )
        })

        return el
    }
}

export {SearchResult}
