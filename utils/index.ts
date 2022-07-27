const shortAddressRegex = /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

const getShortAddress = (address: string | undefined) => {
  if(!address) return '';
  const match = address.match(shortAddressRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
}

export { getShortAddress };