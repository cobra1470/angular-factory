
export const setHTML = (selector: string) => (val: string) => {
  const wrapper: HTMLElement | null  = document.querySelector(selector);

  !!wrapper && (wrapper.innerHTML = val);
}

export const consoleHTML = (selector: string, type: 'info' | 'error' = 'info') => ({label, value}:{label: string, value: string | number | unknown}) => {
  const wrapper: HTMLElement | null  = document.querySelector(selector);

  if (wrapper) {
    const _item = document.createElement('p');

    _item.innerHTML = `
      <label class="label">${label}</label>
      <span class="arrow">=></span>
      <span class="value ${type}">${value}</span>
    `;
    _item.classList.add('item-console');
    wrapper.appendChild(_item);
  }
}