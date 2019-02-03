(function () {
  var dialog = document.querySelector ('.mdl-dialog');
  var showModalBtn = document.querySelector ('.show-modal');
  var closeModalBtn = document.querySelector ('.cancel');

  showModalBtn.addEventListener ('click', function () {
    dialog.showModal ();
  });

  closeModalBtn.addEventListener ('click', function () {
      dialog.close();
  });
}) ();
