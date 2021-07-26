const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


	form.addEventListener('submit', e => {
		e.preventDefault();

		checkInputs();

	});
		
function checkInputs() {
   
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		if (checkLength(3, 15, usernameValue)) {
			setSuccessFor(username);
		} else {
			setErrorFor(username, 'Must be between 3 and 15 chars')
		}
	}

  if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

  if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		if (checkLength(6, 20, passwordValue)) {
			setSuccessFor(password);
		} else {
			setErrorFor(password, 'Must be between 6 and 20 chars')
		}
	}

  if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function checkLength(min, max, text) {
	if (text.length < min || text.length > max)	{
		return false;
	}
	return true;
}

function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   formControl.className = 'form-control error';
   small.innerText = message;
  }


function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}