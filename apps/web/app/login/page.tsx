import FireDesignerLogo from '../ui/fire-designer-logo';
import LoginForm from '../ui/login-form';

export default function LoginPage() {
  return (
    <main className='w-full flex items-center justify-center md:h-screen'>
      <div className='relative w-full mx-auto flex max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <div className='flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36'>
          <div className='w-full text-white'>
            <FireDesignerLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
