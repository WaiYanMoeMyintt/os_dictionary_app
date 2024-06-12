import ClientLayout from './ClientLayout';
import Search from './component/Search';
const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientLayout>
       <Search />
      {children}
    </ClientLayout>
  );
};

export default Page;
