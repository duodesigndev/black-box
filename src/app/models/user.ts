import { UserData } from './user-data'

export class User {

  id:              string
  displayName:     string
  email:           string
  isEmailVerified: boolean
  photoUrl:        string
  crmId:           number
  userData:        UserData[]
  isAdmin:         boolean

  constructor(model: any = null) {
    if(model) {
      this.id              = model.id
      this.displayName     = model.displayName
      this.email           = model.email
      this.isEmailVerified = model.isEmailVerified
      this.photoUrl        = model.photoUrl
      this.crmId           = model.crmId
      this.userData        = (model.userData || []).map(item => new UserData(item))
      this.isAdmin         = model.isAdmin
    }
  }

}

export class Admin extends User {

  roles: string[]

  constructor(model: any = null) {
    super(model)
    if(model) {
      this.roles = model.roles
    }
  }

}

export class Authenticate {
  username: string;
  password: string;
}
