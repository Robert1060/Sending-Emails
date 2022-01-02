const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')
const emailAdressats = require('../adresaci-maili')

const sendEmail = async (req,res) => {
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: emailAdressats,
        from:'robertaugustyniak106@gmail.com',
        subject:'Love ur boooty',
        html:'<strong><ins>shake that ass bby</ins></strong>'
    }
    const info = await sgMail.send(msg)
    res.json(info)
}


module.exports = sendEmail