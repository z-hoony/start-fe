const $input = document.querySelector('#url');
const $button = document.querySelector('#btn');
const $textarea = document.querySelector('#log');

function get(event) {
  fetch($input.value)
    .then((res) => {
      res.text().then((text) => {
        $textarea.value = text;
      });
    })
    .catch((e) => {
      $textarea.value = e;
    });
}

$input.addEventListener('change', get);
$button.addEventListener('click', get);
