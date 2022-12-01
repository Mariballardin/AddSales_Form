
            $(function () {
                $('.next-step').click(function (event) {
                    event.preventDefault();
                    $(this).parents('.form-step').hide().next().show();
                });
            });
