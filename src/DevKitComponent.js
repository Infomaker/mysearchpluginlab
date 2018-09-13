import {Component} from 'substance'
import {api, UIButton} from 'writer'

class DevKitComponent extends Component {

    getInitialState() {
        return {
            query: '',
            items: []
        }
    }

    render($$) {
        return $$('div')
            .append([
                $$('h2').append('News API Search'),
                $$('div').append([
                    $$('input').ref('query'),
                    $$(UIButton, { label: 'Search'})
                        .on('click', this._onSearch)
                ])
            ])
    }

    _onSearch() {
        const baseUrl = 'https://newsapi.org/v2/everything'
        const sources = 'reuters'
        const apikey = api.getConfigValue('se.infomaker.mysearchplugin', 'apikey')
        const query = this.refs['query'].val()

        const url = `${baseUrl}?apiKey=${apikey}&sources=${sources}&q=${query}`

        fetch(url)
            .then(result => {
                return result.json()
            })
            .then(json => {
                console.log(json)
            })
            .catch(ex => {
                console.error(ex.message)
            })
    }
}

export {DevKitComponent}
