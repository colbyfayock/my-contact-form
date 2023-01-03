const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body);

  const message = `
    Name: ${body.name}rn
    Email: ${body.email}rn
    Message: ${body.message}
  `;

  await mail.send({
    to: process.env.MAIL_TO,
    from: process.env.MAIL_FROM,
    subject: `New Message from ${body.name}!`,
    text: message,
    html: message.replace(/rn/g, '<br>'),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success!' }),
  };
};