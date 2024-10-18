import createWebStorage from "redux-persist/lib/storage/createWebStorage";


const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
}

const createStorage = () => {
  if (typeof window === 'undefined') {
    return createNoopStorage();
  }
  return createWebStorage('local');
}

export default createStorage();