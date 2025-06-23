import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink({ href, label }: { href: string; label: string }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}
    >
      {label}
    </Link>
  );
}
