// Crear una función constructora llamada User con las siguientes características:
// Debe tener las propiedades privadas, que deben ser recibidas al momento de crear el elemento:

// firstName String
// age Number
// isAdmin Boolean (Valor por defecto false)
// telephones Array (Valor por defecto Array vacío)


function User(firstName, age, isAdmin = false, telephones = []) {
  this.addPhone = function (phone) {
    telephones.push(phone)
  }
  this.show = function () {
    let stringTelephones = ''

    for (let i = 0; i < telephones.length; i++) {
      const tel = telephones[i].number
      stringTelephones = `${stringTelephones}, ${tel}`

      console.log(`Nombre: ${firstName}, age: ${age}, Teléfonos: ${stringTelephones}`)
    }

    this.showIsAdmin = function () {
      console.log(isAdmin)
    }
  }

  const student = new User('Barbara', 30, true, [{ number: 876876 }])

  student.addPhone({ number: 1177228833 })

  console.log(student.firstName)

  student.show()