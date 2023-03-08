import React from "react";
import styles from "./styles.module.scss";

export type IconProps = {
  name: string;
  title?: string;

  className?: string;
};

export default function Icon({ name, className, ...rest }: IconProps) {
  return (
    <span className={`${styles.icon} ${className}`} {...rest}>
      {name}
    </span>
  );
}
