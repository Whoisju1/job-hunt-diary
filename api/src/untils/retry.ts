type Func = <T>(...arg: unknown[]) => T

const retry = (func: Func, retries = 3): ReturnType<Func> => {
  let count = retries;
  try {
    return func();
  } catch (error) {
    if (count <= retries) {
      count++;
      return func() ;
    } else {
      throw error;
    }
  }
};

export default retry;
