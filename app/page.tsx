import PatientForm from "@/components/forms/PatientForm";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="container remove-scrollbar my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex space-x-2 items-center mb-12">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              alt="patient"
              className=" h-16 w-fit "
            />
            <h1 className="text-[45px] mb-1 font-bold"> AlphaCare</h1>
          </div>
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © All rights reserved by Muhammad | 2025
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
