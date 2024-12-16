export const media = {
    mobile: (styles: string) => `
      @media (max-width: 767px) {
        ${styles}
      }
    `,
    tablet: (styles: string) => `
      @media (min-width: 768px) and (max-width: 1024px) {
        ${styles}
      }
    `,
  };