function setTab() {
  const tab = document.querySelector('.tab');
  const tabs = tab.querySelectorAll('.tab__block');
  const buttons = tab.querySelectorAll('.tab__button');

  buttons.forEach(function (item) {
    item.addEventListener('click', function () {
      if (!item.classList.contains('tab__button--active')) {
        buttons.forEach(function (button) {
          button.classList.remove('tab__button--active');
        });

        tabs.forEach(function (tab) {
          tab.classList.add('tab__block--hidden');
        });

        item.classList.add('tab__button--active');

        let tabId = item.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        currentTab.classList.remove('tab__block--hidden');
      }
    });
  });
  buttons[0].click();
}

// Call the setTab function after the DOM is loaded
document.addEventListener('DOMContentLoaded', setTab);
