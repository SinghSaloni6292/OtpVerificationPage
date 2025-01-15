document.addEventListener('DOMContentLoaded', () => {
  const otpInputs = document.querySelectorAll('.otp-input');
  const otpForm = document.getElementById('otpForm');
  const resendOtpLink = document.getElementById('resendOtp');

  // Move focus to the next input when a number is entered
  otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value.length > 0 && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    // Move focus back when backspace is pressed
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        otpInputs[index - 1].focus();
      }
    });
  });

  // Handle OTP form submission
  otpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    if (otp.length === otpInputs.length) {
      alert(`OTP Verified: ${otp}`);
      // Here, you can make an API call to verify the OTP
    } else {
      alert('Please fill in all the fields.');
    }
  });

  // Resend OTP handler
  resendOtpLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('OTP has been resent!');
    // Add functionality to resend the OTP (e.g., API call)
  });
});