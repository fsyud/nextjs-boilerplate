import { ReactNode } from "react";
import "./style.css";

type Props = {
  children: ReactNode;
};

// add commit
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
