export class UserData {

  provider: string
  email:    string
  idToken:  string

  constructor(model: any = null) {
    if(model) {
      this.provider = model.provider
      this.email    = model.email
      this.idToken  = model.idToken
    }
  }

}
