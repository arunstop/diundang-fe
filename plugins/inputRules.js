export default ({ $axios }, inject) => {

    const isRequired = (label, v) => !!v || `${label} is required`
    const minChar = (label, min, v) => (v && v.length > min) || `${label} requires ${min} or more characters`
    const maxChar = (label, max, v) => (v && v.length < max) || `${label} requires maximum of ${max} characters`


    inject('inputRules', {
        required: (label='Field') => v => isRequired(label, v),
        email: (label = 'Email') => [
            v => isRequired(label, v),
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: (label = 'Password') => [
            v => isRequired(label, v),
            v => minChar(label, 8, v),
            v => maxChar(label, 36, v),
        ],
    })
}