/*     Modal       */
$(function () {
  $("form[name='formulario-contacto']").validate({
    // Specify validation rules
    rules: {
      choose: "required",
      name: "required",
      company: "required",
      message: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      company: "Please enter your company",
      message: "Please enter your message",
    },

    submitHandler: function (form, event) {
      event.preventDefault();
      $.post('https://backend-usuarios-sqdcgxmbqq-uc.a.run.app/landing/sendMessage',$(form).serialize())
        .done(function() {
          $(".mask").addClass("active");
        })
        .fail(function(data) {
          alert(data.responseJSON.message)
        })
    }
  });

  function closeModal() {
    $(".mask").removeClass("active");
  }

  $(".close, .mask").on("click", function () {
    closeModal();
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      closeModal();
    }
  });

})


