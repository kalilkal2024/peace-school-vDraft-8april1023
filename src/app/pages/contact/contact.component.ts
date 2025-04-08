import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService, ContactMessage } from '../../core/services/contact.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactPageComponent {
  formData: ContactMessage = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.contactService.sendMessage(this.formData).subscribe(
      success => {
        if (success) {
          // Reset form
          this.formData = {
            name: '',
            email: '',
            message: ''
          };
          
          // Show success message using SweetAlert2
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for contacting us. We will get back to you soon.',
            confirmButtonColor: '#2563eb'
          });
        }
      },
      error => {
        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
          confirmButtonColor: '#2563eb'
        });
      }
    );
  }
}