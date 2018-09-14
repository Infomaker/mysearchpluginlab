import './scss/index.scss'
import {DevKitComponent} from './DevKitComponent'
import {MySearchPluginDropHandler} from './MySearchPluginDropHandler'

export default {
    name: 'mysearchplugin',
    id: 'se.infomaker.mysearchplugin',

    // The configure() is called by the writer when it wants the
    // plugin to initalize itself and its different parts.
    configure: function(config, pluginConfig) {

        // Add plugin to main sidebar (can be overriden in plugin config)
        config.addToSidebar('main', pluginConfig, DevKitComponent)

        config.addDropHandler(new MySearchPluginDropHandler)
        
        // Add translations for the plugin
        config.addLabel('Devkit plugin loaded', {
            en: 'Devkit plugin loaded',
            sv: 'Devkit plugin inläst'
        })

        config.addLabel('Click me', {
            en: 'Click me',
            sv: 'Klicka här'
        })

        config.addLabel('Number of clicks', {
            en: 'Number of clicks',
            sv: 'Antal klick'
        })
    }
}
