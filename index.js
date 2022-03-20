import { RawComponent, SensenElement } from "sensen-jutsu";
export default function SensenPluginElement($) {
    const config = {
        namespace: {
            prefix: 'plugin',
            attribute: 'plugin'
        }
    };
    const index = `plugin-${$.name}`;
    window.$SensenComponents[index] = RawComponent($, config);
    SensenElement.$use('plugin', $.name, window.$SensenComponents[index]);
    return window.$SensenComponents[index];
}
