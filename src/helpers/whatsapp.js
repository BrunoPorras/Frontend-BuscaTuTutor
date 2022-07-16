//Enviar al chat de whatsapp del tutor
const wsp = num => {
    return `https://api.whatsapp.com/send?phone=51${num}&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20contactarme%20con%20usted`
}

module.exports = { wsp }