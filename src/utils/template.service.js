import mustache from 'mustache';
import fs from 'fs';

export class TemplateService {
    constructor(firebase) {
        this.firebase = firebase;
    }

    async getTemplate(name, payload) {
        console.log(__dirname)
        const path = `${__dirname}/../../templates/${name}`; 
        try {
            const template = fs.readFileSync(path, 'utf8');
            return mustache.render(template, payload);
        } catch (error) {
            throw new Error(`Cannot find ${path} template`);
        }
    }
}