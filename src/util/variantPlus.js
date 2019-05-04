export const get = (obj, ...paths) => {
  const value = paths.reduce((a, path) => {
    if (is(a)) return a;
    const keys = typeof path === "string" ? path.split(".") : [path];
    return keys.reduce((a, key) => (a && is(a[key]) ? a[key] : null), obj);
  }, null);
  return is(value) ? value : paths[paths.length - 1];
};

export const is = n => n !== undefined && n !== null;

export const isObject = n => typeof n === "object" && n !== null;

export const variantPlus = ({ key, prop = "variant", scale: defaultScale = {} }) => {
  const fn = props => get(props.theme, [key, props[prop]].join("."), null);
  const scale = get(props.theme, key, defaultScale);
  // fn.propTypes = {
  //   [prop]: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  // };
  return fn;
};
