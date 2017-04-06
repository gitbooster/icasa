  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                        message:'Introduceți cel puțin 2 caractere.'
                    },
                        notEmpty: {
                        message: 'Furnizați prenumele dvs.'
                    }
                }
            },
             
            email: {
                validators: {
                    notEmpty: {
                        message: 'Vă rugăm să furnizeze adresa de e-mail.'
                    },
                    emailAddress: {
                        message: 'Vă rugăm să furnizați o adresă de e-mail validă.'
                    }
                }
            },
            
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Introduceți cel puțin 10 de caractere și nu mai mult de 200.'
                    },
                    notEmpty: {
                        message: 'Vă rugăm să furnizați o descriere a proiectului.'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

