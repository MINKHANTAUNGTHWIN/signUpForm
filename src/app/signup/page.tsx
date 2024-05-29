import Link from 'next/link';
import SignUpForm from '../components/signupform/page';

const SignUp = () => {
  return (
    <>
      <SignUpForm />
      <Link href="/">LogIn</Link>
    </>
  );
};

export default SignUp;
