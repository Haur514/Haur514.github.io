
import { basePath } from "../../next.config.js";
const BASE_PATH = basePath ? basePath: "";

export class Back{
    static async fetch_yaml(filename){
        let tmp;
        
        await fetch(BASE_PATH+filename)
        .then(res => res.blob())
        .then(blob => blob.text())
        .then(yamlAsString => {
            tmp = yamlAsString;
        })
        .catch(err => {
            console.log(err)
            return "NaN";
        });
    
        const jsYaml = require('js-yaml');
        return jsYaml.load(tmp);
    }

    static async fetch_md(filename) {
        let tmp = "";
        
        await fetch(BASE_PATH+filename)
        .then((m) => {
            return m.text()
        })
        .then((md) => {
            tmp = md;
        })
        return tmp;
    }
}
