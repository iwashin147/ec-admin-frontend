import { ReactNode } from "react";
import CounterPage from "./CounterPage";

interface CounterProps {
  children: ReactNode;
}

export default function Counter({ children }: CounterProps) {
  return <CounterPage>{children}</CounterPage>;
}
