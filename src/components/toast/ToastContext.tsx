import type { FC, ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type ToastVariant = "success" | "error" | "info";

export interface ToastOptions {
  id: number;
  message: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  toasts: ToastOptions[];
  pushToast: (message: string, variant?: ToastVariant) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

let toastIdCounter = 0;

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const pushToast = useCallback(
    (message: string, variant: ToastVariant = "info") => {
      toastIdCounter += 1;
      const id = toastIdCounter;

      setToasts((current) => [...current, { id, message, variant }]);

      window.setTimeout(() => {
        removeToast(id);
      }, 3500);
    },
    [removeToast]
  );

  const value = useMemo(
    () => ({ toasts, pushToast, removeToast }),
    [toasts, pushToast, removeToast]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
