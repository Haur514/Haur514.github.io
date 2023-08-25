export class Back{
    static async fetch_yaml(filename){
        let tmp;
        
        await fetch(filename)
        .then(res => res.blob())
        .then(blob => blob.text())
        .then(yamlAsString => {
            tmp = yamlAsString;
        })
        .catch(err => console.log(err));
    
        const jsYaml = require('js-yaml');
        return jsYaml.load(tmp);
    }
}