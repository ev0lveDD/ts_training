import Image from "next/image";
import { ReactNode } from "react";

interface HeaderProps {
    image: {
        src: string;
        alt: string;
    };
    children?: ReactNode; // adding ? makes the property optional
}

export default function ComponentsProps({ image, children }: HeaderProps) {

      return (
        <header>
            <Image {...image} />
            {children}
        </header>
      )
    }
    