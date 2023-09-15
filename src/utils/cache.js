import AsyncStorage from '@react-native-async-storage/async-storage';

export class Cache {
  static async save(key, value, expiry) {
    if (typeof value === 'object') value = JSON.stringify(value);
    if (expiry) {
      const expiryDate = new Date().getTime() + expiry * 1000;
      value = `${value}#:#${expiryDate}`;
    } else {
      value = value.toString();
    }
    return AsyncStorage.setItem(key, value);
  }

  static async retrieve(key) {
    const data = await AsyncStorage.getItem(key);
    if (!data) return null;
    const value = data.split('#:#');
    if (value.length > 1) {
      const expiryDate = Number(value[1]);
      if (new Date().getTime() > expiryDate) {
        AsyncStorage.removeItem(key);
        return null;
      }
    }
    return value[0];
  }

  static async remove(key) {
    return AsyncStorage.removeItem(key);
  }

  static async clear() {
    return AsyncStorage.clear();
  }

  static async push(key, value, expiry) {
    const data = await this.retrieve(key);
    if (!data) {
      return this.save(key, [value], expiry);
    }
    const list = JSON.parse(data);
    list.push(value);
    return this.save(key, list, expiry);
  }

  static async preserve(key, fn, { expiry, useCache }) {
    if (useCache) {
      const data = await this.retrieve(key);
      if (data) {
        try {
          return JSON.parse(data);
        } catch (e) {
          return data;
        }
      }
    }
    const data = await fn();
    this.save(key, data, expiry);
    return data;
  }
}

export default Cache;
