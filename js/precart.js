function addToPreCart(product_id, quantity) {
    quantity = typeof(quantity) != 'undefined' ? quantity : 1;

    $.ajax({
        url: 'index.php?route=checkout/precart/addprecart',
        type: 'post',
        data: 'product_id=' + product_id + '&quantity=' + quantity,
        dataType: 'json',
        success: function(json) {
            $('.success, .warning, .attention, .information, .error').remove();
            
            if (json['redirect']) {
                location = json['redirect'];
            }
            
            if (json['success']) {

                $('.breadcrumb').after('<div class="alert alert-success" style="display:none">' + json['success'] + '<button class="close" data-dismiss="alert" type="button">×</button></div>');
                $('.alert-success').fadeIn('slow');
                
                $('html, body').animate({ scrollTop: 0 }, 'slow'); 
            }   
        }
    });
} 