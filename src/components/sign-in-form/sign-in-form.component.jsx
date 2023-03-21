import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


//import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormField] = useState(defaultFormFields);
    const { email, password } = formFields;



    const resetFormFields = () => {
        setFormField(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // eslint-disable-next-line no-unused-vars
            const { user } = await signInAuthUserWithEmailAndPassword (
                email, 
                password
            );
            resetFormFields();

        } catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert("no user associated with this email")
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({...formFields, [name] : value });
    }

    return (
        <div className="sign-up-container">
            <h2>Already have a account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Email'
                    type="email" 
                    onChange={handleChange} 
                    required 
                    name="email" 
                    value={email} 
                />

                <FormInput
                    label='Password'
                    type="password" 
                    onChange={handleChange} 
                    required 
                    name="password" 
                    value={password} 
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="submit" onClick={signInWithGoogle} buttonType='google'>
                        Google Sign In
                    </Button>
                </div>
                
            </form>
        </div>
    );
}

export default SignInForm;