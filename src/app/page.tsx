import Image from 'next/image';
import LoginForm from './components/loginform/page';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
      <Link href="/signup">SignUp</Link>
    </main>
  );
}
