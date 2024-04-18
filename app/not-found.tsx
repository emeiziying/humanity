import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex size-full flex-col items-center justify-center'>
      <h2>404 Not Found</h2>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
