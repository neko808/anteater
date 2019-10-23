import mustache from 'mustache';
import fs from 'fs';

export class TemplateService {
    constructor(firebase) {
        this.firebase = firebase;
    }

    async getTemplate(name, payload) {
        try {
            const path = `${__dirname}/templates/${name}`; 
            const template = fs.readFileSync(path, 'utf8');
            return mustache.render(template, payload);
        } catch (error) {
            throw new Error(`No se pudo encontrar el template ${path}`);
        }
    }
}