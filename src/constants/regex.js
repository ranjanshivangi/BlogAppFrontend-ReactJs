export const EMAIL_REGEX = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
export const PASSWORD_REGEX =/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
export const USERNAME_REGEX = /^[a-zA-Z0-9]+$/;
export const FULLNAME_REGEX = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;