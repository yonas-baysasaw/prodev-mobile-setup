# prodev-mobile-app-0x00

Objective

- Create a first Expo Router mobile app and document scaffolding.

Quick prerequisites

- Node.js + npm, npx, Expo Go (phone).

Scaffolding (short)

1. cd prodev-mobile-setup
2. npx create-expo-app@latest .
3. Edit app/(tabs)/index.tsx — change <Text>Welcome!</Text> to <Text>First App Created</Text>
4. Start: npx expo start (scan QR with Camera/Expo Go)

Reset (npm run reset-project)

- Typical effects: clears caches, restores files from app-example, may remove/reinstall node_modules.
- Likely outcome: app/(tabs)/index.tsx may be reverted to example text; commit before reset to preserve changes.

Quick checks

- app/(tabs)/index.tsx shows "First App Created"
- npx expo start launches dev server and QR opens app
- If reset reverted edits, reapply or restore from git

References

- app-example/app/(tabs)/index.tsx
- app-example/constants/Colors.tsx
- package.json (inspect reset-project script)

GitHub Copilot

- Update this README after running reset locally.
