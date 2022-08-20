export function sortUserByTime(array = []) {
  const res = array.sort((a, b) => {
    const lastMessageDateA = a.messages[a.messages.length - 1].date,
      lastMessageDateB = b.messages[a.messages.length - 1].date;

    return lastMessageDateB - lastMessageDateA;
  });

  return res;
}
