import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Link from 'next/link';

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    items: {
        children: string;
        // icon: React.ReactNode;
        href: string;
    }[];
}

export const NavbarSidebar = ({ open, onOpenChange, items }: Props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b">
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {items.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center hover:bg-black hover:text-white p-4 text-base font-medium text-left"
                            onClick={() => onOpenChange(false)}
                        >
                            {item.children}
                        </Link>
                    ))}
                    <div className="border-t">
                        <Link
                            href="sign-in"
                            className="flex items-center hover:bg-black hover:text-white p-4 text-base font-medium text-left"
                            onClick={() => onOpenChange(false)}
                        >
                            Login
                        </Link>
                        <Link
                            href="sign-up"
                            className="flex items-center hover:bg-black hover:text-white p-4 text-base font-medium text-left"
                            onClick={() => onOpenChange(false)}
                        >
                            Start selling
                        </Link>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};
