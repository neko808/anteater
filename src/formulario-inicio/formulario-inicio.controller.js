import { TemplateService } from '../utils/template.service';

export const postFormulario = (firebase, sgMail) => async (req, res) => {
    try {
        const { name, email } = req.body;
        const templateServiceInstance = new TemplateService(firebase);
        const template = await templateServiceInstance.getTemplate('thanks.html', req.body);

        const msg = {
            to: email,
            from: process.env.ANTEATER_SENDER,
            subject: `Welcome ${name}!`,
            html: template
        }

        await sgMail.send(msg);
        return res.send({
            status: 'OK',
            message: `Thanks for writing. We will contact you soon!`
        })
    } catch (error) {
        res.status(500).send({
            message: `${error.name}: ${error.message}`,
        })
    }
}