export class Address {

  street1:    string
  street2:    string
  city:       string
  state:      string
  postalCode: string
  country:    string
  latitude:   number
  longitude:  number

  constructor(model: any = null) {
    if(model) {
      this.street1    = model.street1
      this.street2    = model.street2
      this.city       = model.city
      this.state      = model.state
      this.postalCode = model.postalCode
      this.country    = model.country
      this.latitude   = model.latitude
      this.longitude  = model.longitude
    }
  }

}
