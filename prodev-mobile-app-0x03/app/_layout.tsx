import { Stack } from "expo-router";

export default function RootLayout() {
  const screenOptions = { headerShown: false };

  return <Stack screenOptions={screenOptions} />;
}
