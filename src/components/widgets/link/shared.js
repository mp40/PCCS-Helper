export const onClick = (event, href) => {
  event.preventDefault();
  window.history.pushState({}, '', href);

  const navEvent = new PopStateEvent('popstate');
  window.dispatchEvent(navEvent);
};
