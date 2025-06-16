export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex flex-col">
            {children}
        </div>
    );
}