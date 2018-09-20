const url = process.env.CIENT_URL
const fromEmail = process.env.FORM_EMAIL

module.export.welcomeEmail = function (email, user) {
    const text =
    `Hi,
    Thank you for choosing Enable!
    You are just one click away from completing your account registration.
    Confirm your email:\n
    ${url}/signup/${user.id}`

    return {
        to : `${email}`,
        form:{
            address: fromEmail,
            name: 'Enable'
        },
        subject: 'Please Complete your Registration',
        text
    }

}
