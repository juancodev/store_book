"use client";

import Image from "next/image";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Description.module.sass";

const PLACE_HOLDER_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABAwUAAAAAAAAAAAAAAAAAAQIRAyEiMmH/xAAVAQEBAAAAAAAAAAAAAAAAAAAFB//EAB0RAAECBwAAAAAAAAAAAAAAAAEAAgMEERIiMZH/2gAMAwEAAhEDEQA/AIfXiVxbd7l1TgABw91NqjvlYNxwHAv/2Q==";

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => setHasBorder(!hasBorder);

  const context = classNames.bind(styles);

  const buttonStyle = context("Description__button", {
    "Description__button--border": hasBorder,
  });

  console.log(buttonStyle);
  return (
    <>
      <section className={styles.Description}>
        <button onClick={handleClick} className={buttonStyle}>
          <div className={styles.Description__imageContainer}>
            <Image
              src="/images/bookshop.jpg"
              alt="Book Shop Image"
              fill
              placeholder="blur"
              blurDataURL={PLACE_HOLDER_BLUR}
              // priority={false}
              //quality={100}
            />
          </div>
        </button>
        <div className={styles.Description__text}>
          <h2>The best Book Shop in the world</h2>
          <p>Your knowledge is power and get more reading!</p>
        </div>
      </section>
    </>
  );
};
