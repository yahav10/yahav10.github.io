import React from 'react';
import { useForm } from 'react-hook-form';
import {
    StyledContactWrapper,
    StyledContactHeadline,
    StyledContactForm,
    StyledContactFormLabel,
    StyledContactFormInput,
    StyledContactFormMessage,
    StyledContactSubmitButton
} from "../Contact/Contact.styled";


const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <StyledContactWrapper id="contact">
            <StyledContactHeadline>Contact Me</StyledContactHeadline>
            <StyledContactForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <StyledContactFormLabel>Full Name:</StyledContactFormLabel>
                    <StyledContactFormInput type="text"
                                            placeholder="Full name"
                                            name="First name"
                                            ref={register({required: true, maxLength: 80})}
                                            onChange={e => this.setState({ fullName: e.target.value})}/>
                    <StyledContactFormLabel>Email:</StyledContactFormLabel>
                    <StyledContactFormInput type="text"
                                            placeholder="Email"
                                            name="Email"
                                            ref={register({required: true, pattern: /^\S+@\S+$/i})}
                                            onChange={e => this.setState({ email: e.target.value})}/>
                    <StyledContactFormLabel>Phone:</StyledContactFormLabel>
                    <StyledContactFormInput type="tel"
                                            placeholder="Phone number"
                                            name="Mobile number"
                                            ref={register({required: true, minLength: 6, maxLength: 12})}
                                            onChange={e => this.setState({ phone: e.target.value})}/>
                    <StyledContactFormLabel>Subject</StyledContactFormLabel>
                    <StyledContactFormInput type="text"
                                            placeholder="Subject"
                                            name="Subject"
                                            ref={register({required: true, min: 1})}
                                            onChange={e => this.setState({ subject: e.target.value})}/>
                    <StyledContactFormLabel>Message:</StyledContactFormLabel>
                        <StyledContactFormMessage
                            name="Subject"
                            ref={register({required: true, min: 1, maxLength: 400})}
                            onChange={e => this.setState({ message: e.target.value})}/>
                    <StyledContactSubmitButton>Submit</StyledContactSubmitButton>
                </form>
            </StyledContactForm>
        </StyledContactWrapper>
    )};
export default Contact;