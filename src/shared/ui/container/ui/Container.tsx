import type { ContainerProps } from "../model/container";
import { containerStyles } from "./ContainerStyles";

export function Container({
  as: Component = "div",
  children,
  size = "standard",
}: ContainerProps) {
  return <Component className={containerStyles({ size })}>{children}</Component>;
}
