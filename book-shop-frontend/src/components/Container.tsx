import Navbar from '@/components/ui/navbar'


export default function Container({children} : any) {
  return (
    <>
    <Navbar />
      {children}
    </>
  );
}
