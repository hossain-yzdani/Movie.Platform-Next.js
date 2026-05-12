import RoutesBlockCategory from "@/components/categories/routesBlockCategory";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-col justify-start pr-8 pt-22 pb-4">
        <h1 className="text-themecolor text-3xl font-bold">دسته بندی ها</h1>
      </div>
      {/* <RoutesBlockCategory /> */}
      <div>{children}</div>
    </div>
  );
}

