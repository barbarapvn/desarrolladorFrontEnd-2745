class User {
  constructor (firstName, lastName, dni, isAdmin = false, telephones = []) {
    this._firstName = firstName
    this._lastName = lastName
    this._dni = dni
    this._telephones = telephones
  }

  showCompleteName () {
    // acá podría ir un get, modificar
    console.log(`Soy ${this._firstName} ${this._lastName}`)
  }

  showDni () {
    console.log(`Soy ${this._dni}`)
  }

  addPhone (phone) {
    if (phone.indexOf('+549') !== -1) {
      this._telephones.push({ number: phone, isMobile: true })
    } else {
      this._telephones.push({ number: phone, isMobile: false })
    }
  }

  showPhones () {
    console.log(JSON.stringify(this._telephones, null, 2))
  }

  set phone (phone) {
    this._telephones = phone
  }
}

const user = new User('Barbara', 'Pavan', 32974094, true, [ { number: 1537033892, isMobile: true } ])

user.showCompleteName()

user.addPhone('8974594856')
