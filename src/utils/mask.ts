export function maskCPF(cpf: string) {
  cpf = cpf.replace(/\D/g, "")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
  return cpf
}

export function maskPhoneNumber(number: string) {
  number = number.replace(/\D/g, "")
  const isTelephoneWith9Digit = number.length === 11;
  if (isTelephoneWith9Digit) {
    number = number.replace(/(\d{2})(\d)/, "($1) $2")
    number = number.replace(/(\d{5})(\d)/, "$1-$2")
  } else {
    number = number.replace(/(\d{2})(\d)/, "($1) $2")
    number = number.replace(/(\d{4})(\d)/, "$1-$2")
  }
  return number
}

export function formatDate(date: string) {
  let dataArray = date.split('/')
  console.log(dataArray)
  return dataArray[2] + '-' + dataArray[1] + '-' + dataArray[0];

}