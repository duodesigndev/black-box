import { Contact } from './contact'

export class UserProfile {

  userId: string
  contact: Contact

  constructor(model: any = null) {
    if(model) {
      this.userId = model.userId
      this.contact = new Contact(model.contact)
    }
  }

}
