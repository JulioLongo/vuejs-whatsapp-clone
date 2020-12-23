export default function serialize(obj) {
  let queryString = '';

  Object.keys(obj).forEach((key) => {
    queryString += `&${key}=${obj[key]}`;
  });

  return queryString;
}
