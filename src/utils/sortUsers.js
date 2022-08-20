export function sortUserByTime(array = []) {
  const res = array.sort((a, b) => {
    let lastMessageDateA = a.messages[a.messages.length - 1].date,
      lastMessageDateB = b.messages[b.messages.length - 1].date;

    return lastMessageDateB - lastMessageDateA;
  });

  return res;
}
