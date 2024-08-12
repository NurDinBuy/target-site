const form = document.querySelector('#form')
console.log(form);

const token = "7361419781:AAFA2cUrMOkMbIB2v7yl0GloXvaDbZXFRmk";
const chat_id = "@target_chat_100";
const URL_API = `https://api.telegram.org/bot${token}/sendMessage`;

form.addEventListener('submit', async (event) => {
    event.preventDefault()
  
    const {name, phone} = Object.fromEntries(new FormData(event.target).entries())
  
    const text = `Новая заявка на таргет:\n\nимя: ${name}\nномер: ${phone}`
  
    await fetch(URL_API, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        chat_id: chat_id,
        text
      })
    })
  })