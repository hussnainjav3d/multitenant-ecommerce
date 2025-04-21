'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavbarSidebar } from './navbar-sidebar';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700'],
});

interface NavbarItemsProp {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemsProp) => {
    return (
        <Button
            asChild
            variant="outline"
            className={cn(
                'bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg',
                isActive && 'bg-black text-white hover:bg-white hover:text-black'
            )}
        >
            <Link href={href}>{children}</Link>
        </Button>
    );
};

const navbarItems = [
    { href: '/', children: 'Home' },
    { href: '/about', children: 'About' },
    { href: '/features', children: 'Features' },
    { href: '/pricing', children: 'Pricing' },
    { href: '/contact', children: 'Contact' },
];

export const Navbar = () => {
    const pathName = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
                <span className={cn('text-5xl font-semibold', poppins.className)}>funroad</span>
            </Link>
            <div className="items-center gap-4 hidden lg:flex">
                {navbarItems.map(item => (
                    <NavbarItem key={item.href} href={item.href} isActive={pathName === item.href}>
                        {item.children}
                    </NavbarItem>
                ))}
            </div>
            <NavbarSidebar
                open={isSidebarOpen}
                onOpenChange={setIsSidebarOpen}
                items={navbarItems}
            />
            <div className="hidden lg:flex">
                <Button
                    asChild
                    variant="secondary"
                    className="border-l border-r-0 border-b-0 border-t-0 rounded-none px-12 h-full bg-white hover:bg-pink-400 text-lg transition-colors"
                >
                    <Link href="/sign-in">Login</Link>
                </Button>
                <Button
                    asChild
                    className="border-l border-r-0 border-b-0 border-t-0 rounded-none px-12 h-full bg-black text-white hover:text-black hover:bg-pink-400 text-lg transition-colors"
                >
                    <Link href="/sign-up">Start selling</Link>
                </Button>
            </div>
            <div className="flex lg:hidden items-center justify-center">
                <Button
                    variant="ghost"
                    className="size-12 border-transparent bg-white"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <MenuIcon />
                </Button>
            </div>
        </nav>
    );
};
