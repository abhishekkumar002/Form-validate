document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      if (validateForm()) {
        this.submit(); 
      }
    });
  
    function validateForm() {
      const fname = document.getElementById('fname').value.trim();
      const lname = document.getElementById('lname').value.trim();
      const age = document.getElementById('age').value.trim();
      const contact = document.getElementById('contact').value.trim();
  
      if (fname === '' || lname === '' || age === '' || contact === '') {
        alert('All fields are required');
        return false;
      }
  
      if (isNaN(age) || parseInt(age) <= 0) {
        alert('Please enter a valid age');
        return false;
      }

      if (!(/^\d{10}$/.test(contact))) {
        alert('Contact should be a 10-digit number');
        return false;
      }
  
      return true; 
    }
});
