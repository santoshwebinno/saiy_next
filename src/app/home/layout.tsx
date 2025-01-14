import { AppSidebar } from "@/components/AppSidebar";
import HeaderBar from "@/components/HeaderBar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 m-7">
                <HeaderBar />
                {children}
            </main>
        </SidebarProvider>

    );
}
