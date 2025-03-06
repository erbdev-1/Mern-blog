import { SignUp } from "@clerk/clerk-react";

function RegisterPage() {
  return (
    <div>
      <div className="flex items-center justify-center h-[calc(100vh-80px)] ">
        <SignUp signInUrl="/login" />
      </div>
    </div>
  );
}

export default RegisterPage;
