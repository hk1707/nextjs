import React from 'react';
import countryList from './country-list';
import Error from "./Error";
import { MDBInput , MDBContainer , MDBRow , MDBCol  } from 'mdb-react-ui-kit';

const Billing = ( { input, handleOnChange } ) => {
	return (
		<React.Fragment>
			
            <MDBContainer className="px-0">
                <MDBRow className="py-2">
                    {/*Name*/}
                    <MDBCol sm='12' className='first-name col-sm-12 col-lg-6 py-1'>
                         <MDBInput label='First Name' size="lg" onChange={ handleOnChange } 
                                   value={ input.firstName }  type="text" name="firstName" id="first-name"/>
                          <Error errors={ input.errors } fieldName={ 'firstName' }/>
                    </MDBCol>
                    <MDBCol sm='12' className='last-name col-sm-12 col-lg-6 py-1'>
                         <MDBInput label='Last Name' size="lg" onChange={ handleOnChange } 
                                   value={ input.lastName }  type="text" name="lastName" id="last-name"/>
                        <Error errors={ input.errors } fieldName={ 'lastName' }/>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow className="py-2">
                    {/* Company Name */}
                    <MDBCol size='12' className='company-name'>
                    <MDBInput label='Company Name' size="lg" onChange={ handleOnChange } 
                                   value={ input.company }  type="text" name="company" id="company"/>
                        <Error errors={ input.errors } fieldName={ 'company' }/>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow className="py-2">
                    {/* Country */}
                    <div className="form-group mb-3">
                        <label className="text-xs" htmlFor="country-select">
                            Country
                            <abbr className="required" title="required">*</abbr>
                        </label>
                        <select onChange={ handleOnChange } value={ input.country } name="country" className="form-control woo-next-checkout-input p-2 w-full border-solid border border-gray-500 rounded" id="country-select">
                            <option value="">Select a country...</option>
                            { countryList.length && (
                                countryList.map( ( country, index ) => (
                                    <option key={ `${country}-${index}` } value={ country.countryCode }>{ country.countryName }</option>
                                ) )
                            ) }
                        </select>
                        <Error errors={ input.errors } fieldName={ 'country' }/>
                    </div>
                </MDBRow>
                
                <MDBRow className="py-2">
                    {/* Street Address */}
                    <MDBCol size='12' className='address-label col-sm-12 col-lg-12 py-1 pb-0'>
                        <label className="text-xs" htmlFor="street-address">
                            Street Address
                            <abbr className="required" title="required">*</abbr>
                        </label>
                    </MDBCol>
                    <MDBCol sm='12' className='address1 col-sm-12 col-lg-6 py-1'>
                         <MDBInput label='House number and street name' size="lg" onChange={ handleOnChange } 
                                   value={ input.address1 }  type="text" name="address1" id="address1"/>
                          <Error errors={ input.errors } fieldName={ 'address1' }/>
                    </MDBCol>
                    <MDBCol sm='12' className='address2 col-sm-12 col-lg-6 py-1'>
                         <MDBInput label='Apartment, suite etc.(optional)' size="lg" onChange={ handleOnChange } 
                                   value={ input.address2 }  type="text" name="address2" id="address2"/>
                        {/* <Error errors={ input.errors } fieldName={ 'address2' }/> */}
                    </MDBCol>
                </MDBRow>

                <MDBRow className="py-2">
                    {/* Town/City & State */}
                    <MDBCol sm='12' className='city col-sm-12 col-lg-6 py-1'>
                         <MDBInput label='City' size="lg" onChange={ handleOnChange } 
                                   value={ input.city }  type="text" name="city" id="city"/>
                        <Error errors={ input.errors } fieldName={ 'city' }/>
                    </MDBCol>
                    <MDBCol sm='12' className='state col-sm-12 col-lg-6 py-1'>
                         <MDBInput label='State' size="lg" onChange={ handleOnChange } 
                                   value={ input.state }  type="text" name="state" id="state"/>
                          <Error errors={ input.errors } fieldName={ 'state' }/>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="py-2">
                    {/* Postcode */}
                    <MDBCol size='12' className='Postcode'>
                        <MDBInput label='Postcode' size="lg" onChange={ handleOnChange } 
                                   value={ input.company }  type="text" name="postcode" id="postcode"/>
                        <Error errors={ input.errors } fieldName={ 'postcode' }/>
                    </MDBCol>
                </MDBRow>
                                
                <MDBRow className="py-2">
                    {/*Phone & Email*/}
                    <MDBCol sm='12' className='phone col-sm-12 col-lg-6 py-1'>
                         <MDBInput label='Phone' size="lg" onChange={ handleOnChange } 
                                   value={ input.phone }  type="text" name="phone" id="phone"/>
                        <Error errors={ input.errors } fieldName={ 'phone' }/>
                    </MDBCol>
                    <MDBCol sm='12' className='email col-sm-12 col-lg-6 py-1'>
                         <MDBInput label='Email' size="lg" onChange={ handleOnChange } 
                                   value={ input.email }  type="text" name="email" id="email"/>
                          <Error errors={ input.errors } fieldName={ 'email' }/>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
			
			
			{/*	@TODO Create an Account */}
			{/*<div className="form-check">*/}
			{/*	<label className="text-xs" className="form-check-label">*/}
			{/*		<input onChange={ handleOnChange } className="form-check-input" name="createAccount" type="checkbox"/>*/}
			{/*			Create an account?*/}
			{/*	</label>*/}
			{/*</div>*/}
			{/*<h2 className="mt-4 mb-4">Additional Information</h2>*/}
			{/* @TODO Order Notes */}
			{/*<div className="form-group mb-3">*/}
			{/*	<label className="text-xs" htmlFor="order-notes">Order Notes</label>*/}
			{/*	<textarea onChange={ handleOnChange } defaultValue={ input.orderNotes } name="orderNotes" className="form-control woo-next-checkout-textarea" id="order-notes" rows="4"/>*/}
			{/*	<Error errors={ input.errors } fieldName={ 'orderNotes' }/>*/}
			{/*</div>*/}
		</React.Fragment>
	);
};

export default Billing;
