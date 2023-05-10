export const getBasicAuthorization = () =>
  `Basic ${Buffer.from(
    `${process.env.NEXT_PUBLIC_DEMO_USERNAME}:${process.env.NEXT_PUBLIC_DEMO_PASSWORD}`
  ).toString("base64")}`;
