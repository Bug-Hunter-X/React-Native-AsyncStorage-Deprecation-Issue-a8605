This solution replaces AsyncStorage with MMKVStorage for more reliable data persistence.

```javascript
import { MMKVStorage } from 'react-native-mmkv-storage';

const storage = new MMKVStorage.Loader().initialize();

const storeData = async (value) => {
  try {
    await storage.setStringAsync('@user_name', value);
  } catch (e) {
    console.error('Failed to store user name:', e);
  }
};

const getData = async () => {
  try {
    const value = await storage.getStringAsync('@user_name');
    return value;
  } catch (e) {
    console.error('Failed to retrieve user name:', e);
  }
};
```

Remember to install `react-native-mmkv-storage`:
```bash
npm install react-native-mmkv-storage
```

And link it (if necessary, depending on your setup):
```bash
react-native link react-native-mmkv-storage
```