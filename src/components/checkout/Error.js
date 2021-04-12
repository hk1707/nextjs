const Error = ( { errors, fieldName } ) => {

	//console.log(errors);

	return(
		errors && ( errors.hasOwnProperty( fieldName ) ) ? (
			<div className="invalid-feedback d-block py-3 text-red-500">{ errors[fieldName] }</div>
		) : ''
	)
};

export default Error;
