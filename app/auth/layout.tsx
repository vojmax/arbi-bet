const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-slate-100">
      {children}
    </div>
  );
};

export default AuthLayout;
