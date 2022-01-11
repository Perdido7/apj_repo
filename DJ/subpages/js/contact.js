$(document).ready(function () {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if ($('#contact-form')[0].checkValidity() === true) {
            $("#includedContent").load("./htmlPart/modalFormResponse.html", function () {
                $('#exampleModal').modal('show');

                $('#parargraphNameText').text($('#name').val())
                $('#parargraphLastNameText').text($('#lastName').val())
                $('#parargraphEmailText').text($('#email').val())
              });
        }

        $('#contact-form')[0].classList.add('was-validated');
    })
})