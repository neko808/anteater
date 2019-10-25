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

        try {
            await sgMail.send(msg);
        } catch( error ) {
            console.log(error);
            res.status(400).send({
                message: error.response.body.errors.map(x => x.message)
            })
        }

        return res.send({
            status: 'OK',
            message: `Thanks for writing. We will contact you soon!`
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: `${error.name}: ${error.message}`,
        })
    }
}