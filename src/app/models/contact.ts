import { Address } from './address'

export class Contact {

  firstName: string
  lastName:  string
  dob:       Date
  phone:     string // TODO: define regex
  fax:       string // TODO: define regex
  mobile:    string // TODO: define regex
  address:   Address[]

  constructor(model: any = null) {
    if(model) {
      this.firstName = model.firstName
      this.lastName  = model.lastName
      this.dob       = model.dob
      this.phone     = model.phone
      this.fax       = model.fax
      this.mobile    = model.mobile
      this.address   = (model.address || []).map(item => new Address(item))
    }
  }

}
