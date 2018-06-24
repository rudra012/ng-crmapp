import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})

export class ContactCreateComponent implements OnInit {
  constructor(private  apiService:  ApiService) { }

  contact = new Contact(1, 'Home N 333 Apartment 300', 1, 'This is the third contact',
            'rudra@gmail.com', 'shailesh' , 'rudra', '123456789', true);

  submitted = false;

  onSubmit() {
      this.submitted = true;
      this.apiService.createContact(this.contact).subscribe((response) => {
        console.log(response);
    });
    }

  get contact_check() { return JSON.stringify(this.contact); }

  ngOnInit() {
  }

  createContact() {
    const contact = {
        account:  1,
        address:  'Home N 333 Apartment 300',
        createdBy:  1,
        description:  'This is the third contact',
        email:  'abbess@email.com',
        first_name:  'kaya',
        isActive: true,
        last_name: 'Abbes',
        phone: '00121212101'
    };
    this.apiService.createContact(contact).subscribe((response) => {
        console.log(response);
    });
    }
}
