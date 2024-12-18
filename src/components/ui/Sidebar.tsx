import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import IMAGES from '@/Middleware/images';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-100 p-8 flex flex-col justify-between h-auto">
            <div>
                <Link href="/">
                    <Image
                        src={IMAGES.SBARLOGO}
                        width={170}
                        height={150}
                        alt="Logo"
                    />
                </Link>
                <nav className="mt-8">
                    <ul className="space-y-4">
                        <li>
                            <Link href="/" className="flex justify-left items-center gap-2 text-custom-blue font-medium">
                                <Image
                                    src={IMAGES.NAV1}
                                    width={20}
                                    height={20}
                                    alt="Logo"
                                />
                                Overview</Link>
                        </li>
                        <li>
                            <Link href="/users" className="text-gray-700 hover:text-custom-blue flex justify-left items-center gap-2 ">
                                <Image
                                    src={IMAGES.NAV2}
                                    width={20}
                                    height={20}
                                    alt="Logo"
                                />
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-gray-700 hover:text-custom-blue flex justify-left items-center gap-2">
                                <Image
                                    src={IMAGES.NAV3}
                                    width={20}
                                    height={20}
                                    alt="Logo"
                                />
                                Settings
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Button className="w-full bg-white text-custom-blue font-medium border border-custom-blue rounded-full py-2 px-4 
              hover:bg-custom-blue hover:text-white transition duration-300">
                Logout
            </Button>

        </aside>
    );
};

export default Sidebar;