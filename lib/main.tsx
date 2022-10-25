import React from "react";
import { wrapper } from "./main.css";

interface Props {
  scaleFactor?: number;
  children?: React.ReactNode;
}

// TODO: Use scaleFactor to customize scaling
const SteamCard: React.FC<Props> = ({ children, scaleFactor }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  function map(
    val: number,
    minA: number,
    maxA: number,
    minB: number,
    maxB: number
  ) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  }

  function transformCard(card: HTMLDivElement, ev: MouseEvent) {
    const innerDiv = card.querySelector("div")!;
    const imgRect = card.getBoundingClientRect();

    const width = imgRect.width;
    const height = imgRect.height;
    const mouseX = ev.offsetX;
    const mouseY = ev.offsetY;
    const rotateY = map(mouseX, 0, width, -25, 25);
    const rotateX = map(mouseY, 0, height, 25, -25);
    const brightness = map(mouseY, 0, height, 1.5, 0.5);

    innerDiv.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    innerDiv.style.filter = `brightness(${brightness})`;
  }

  React.useEffect(() => {
    ref.current?.addEventListener("mousemove", onMouseMove);
    ref.current?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      ref.current?.removeEventListener("mousemove", onMouseMove);
      ref.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  function onMouseMove(ev: MouseEvent) {
    if (ref.current) {
      transformCard(ref.current, ev);
    }
  }

  function onMouseLeave(ev: MouseEvent) {
    let innerDiv = ref.current?.querySelector("div")!;

    innerDiv.style.transform = "rotateX(0deg) rotateY(0deg)";
    innerDiv.style.filter = "brightness(1)";
  }

  return (
    <div ref={ref} className={wrapper}>
      <div
        style={{
          transition: "all 200ms ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SteamCard;
