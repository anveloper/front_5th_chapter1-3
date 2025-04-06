import { NotificationProvider, ThemeProvider, UserProvider } from "../contexts";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NotificationProvider>
      <UserProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </UserProvider>
    </NotificationProvider>
  );
};

export default Providers;
