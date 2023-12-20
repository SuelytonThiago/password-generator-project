const generatePasswordBtn = document.querySelector("#generate-password");
const generatedPassword = document.querySelector("#generated-password");
const openMenuBtn = document.querySelector("#open-generate-password");
const generatedPasswordContiner = document.querySelector("#generate-options");
const lenghtInput = document.querySelector("#lenght");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbol");
const copyPassword = document.querySelector("#copy-password");

const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSimbols = () => {
    const symbols = "(){}[]<>?!@#$%¨%¨&*'-+*/"
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = 
(getLetterLowerCase,getLetterUpperCase,getNumber,getSimbols) => {
    let password = "";
    const passwordLength = +lenghtInput.value;

    const generators =[];

    if(lettersInput.checked) {
        generators.push(getLetterLowerCase,getLetterUpperCase);
    }
    if(numbersInput.checked) {
        generators.push(getNumber);
    }
    if(symbolInput.checked) {
        generators.push(getSimbols);
    }

    console.log(generators.length)

    if(generators.length === 0){
        return
    }

    for(i = 0; i < passwordLength; i = i + generators.length){
        generators.forEach(() => {
            const randomValue = 
            generators[Math.floor(Math.random() * generators.length)]();
        
            password += randomValue;
        });
    }

    password = password.slice(0, passwordLength);

    generatedPassword.style.display = "block";
    generatedPassword.querySelector("h4").innerText = password;
};

generatePasswordBtn.addEventListener("click", () =>{
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSimbols
    );
});

openMenuBtn.addEventListener("click", () =>{
    generatedPasswordContiner.classList.toggle("hide");
})

copyPassword.addEventListener("click",() =>{
    
    const pass = generatedPassword.querySelector("h4").innerText;

    navigator.clipboard.writeText(pass).then(() =>{
        copyPassword.innerText = "Copiado!"

        setTimeout(() => {
            copyPassword.innerText = "Copiar"
        }, 2000);
    })

    
})