import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="base" />
      <Stack.Screen name="(employee)" />
    </Stack>
  );
}
