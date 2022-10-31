export const getAvatar = ((name)  => {
  const initial = name?.match(/\b(\w)/g);
  const newName = initial?.join('');
  return newName?.toUpperCase().substring(0,2);
});