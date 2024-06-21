export default function logIn(e) {
	e.preventDefault();

	emailForm.style.visibility = "hidden";
	let emailAddress = email.value.trim();
	let index = emailAddress.indexOf("@");
	let userName = emailAddress.slice(0, index);
	welcome.innerHTML = `Welcome ${userName}!`;
	welcome.style.visibility = "visible";
}
