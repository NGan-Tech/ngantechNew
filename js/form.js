let open = false;
const modalElement = document.getElementById('modal')
const success = document.querySelector('.notification_success')
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const telephoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
const thread_id = ''
let text;


// function showSuccess() {
//     success.style.display = 'flex'
//     console.log('qwe')
//     setTimeout(() => {
//         success.style.display = 'none'
//         console.log('123')
//     }, 3000)
// }

const borderRed = "2px solid red"
const borderNormal = "2px solid #0af9fa"

function sendMessage() {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("telephone").value;
    const message = document.getElementById("message").value;
    const company = document.getElementById("company").value;
    const money = document.getElementById("money").value;
    const file = document.getElementById("file").files[0];
    const chatId = '';
    const messageText = `Имя: ${name} \n Email: ${email} \n Телефон: ${tel} \n Компания: ${company} \n Бюджет: ${money} \n Сообщение: ${message}`;
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('message_thread_id', thread_id);
    formData.append('caption', messageText);

    if (name.trim().length === 0 || email.trim().length === 0 || tel.trim().length === 0 || message.trim().length === 0 || company.trim().length === 0 || !money) {
        if (name.trim().length === 0) {
            document.getElementById("name").style.border = borderRed
        } else {
            document.getElementById("name").style.border = borderNormal
        }
        if (email.trim().length === 0) {
            document.getElementById("email").style.border = borderRed
        } else {
            document.getElementById("email").style.border = borderNormal
        }
        if (tel.trim().length === 0) {
            document.getElementById("telephone").style.border = borderRed
        } else {
            document.getElementById("telephone").style.border = borderNormal
        }
        if (message.trim().length === 0) {
            document.getElementById("message").style.border = borderRed
        } else {
            document.getElementById("message").style.border = borderNormal
        }
        if (company.trim().length === 0) {
            document.getElementById("company").style.border = borderRed
        } else {
            document.getElementById("company").style.border = borderNormal
        }
        if (!money) {
            document.getElementById("selectHeader").style.border = borderRed
        } else {
            document.getElementById("selectHeader").style.border = borderNormal
        }
        return;
    } else if (!EMAIL_REGEXP.test(email) || !telephoneReg.test(tel)) {
        if (!EMAIL_REGEXP.test(email)) {
            document.getElementById("email").style.border = borderRed

        } else {
            document.getElementById("email").style.border = borderNormal
        }
        if (!telephoneReg.test(tel)) {
            document.getElementById("telephone").style.border = borderRed
        } else {
            document.getElementById("telephone").style.border = borderNormal
        }
        return;
    }


    if (file !== undefined && file !== null) {
        formData.append('document', file);
        axios.post(`https://api.telegram.org/bot/sendDocument`, formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        axios.get(`https://api.telegram.org/bot/sendMessage?chat_id=${chatId}&message_thread_id=${thread_id}&text=${messageText}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
