'use strict';
/* global $ */

const main = () => {
  // empty storing variable
  let userInput;
  // function to add items
  const addItem = () => {
    userInput = $('#shopping-list-entry').val();
    $('ul').append(`<li>
    <span class="shopping-item">${userInput}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
    $('#shopping-list-entry').val('');
  };
  // check button
  $('ul').on('click', 'button.shopping-item-toggle', function () {
    $(this).parents('li').children('span').toggleClass('shopping-item__checked');
  });
  // delete button
  $('ul').on('click', 'button.shopping-item-delete', function () {
    $(this).parents('li').remove();
  });
  // run addItem on keypress enter/return
  $('input[type="text"]').keypress((e) => {
    if (e.which === 13) {
      e.preventDefault();
      addItem();
    }
  });
  // run addItem on click
  $('button[type="submit"]').click((e) => {
    e.preventDefault();
    addItem();
  });
};
$(main);