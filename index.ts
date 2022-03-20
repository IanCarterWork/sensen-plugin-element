import { RawComponent, SensenElement } from "sensen-jutsu";



export default function SensenPluginElement<

    State extends SensenPluginElementState
    
>($ : ComponentAttributes<State>) : SensenRawComponent<State>{

    const config : RawComponentConfig = {

        namespace: {
            
            prefix: 'plugin',

            attribute: 'plugin'
            
        }
        
    }

    const index = `plugin-${ $.name }`

    window.$SensenComponents[ index ] = RawComponent<State>($, config)

    SensenElement.$use('plugin', $.name, window.$SensenComponents[ index ] as CustomElementConstructor);
    
    return window.$SensenComponents[ index ] as SensenRawComponent<State>;
    
}



