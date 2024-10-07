document.addEventListener('DOMContentLoaded', () => {
   
    const updateTotalPrice = () => {
        var total = 0;
        document.querySelectorAll('.card').forEach(card => {
            var quantity = parseInt(card.querySelector('.qute').textContent);
            var unitPrice = parseFloat(card.querySelector('.unitt-price').textContent);
            total += quantity * unitPrice;
        });
        document.getElementById('total-price').textContent = total.toFixed(2);
    };

    document.querySelectorAll('.fa-plus-circle').forEach(btn => {
        btn.addEventListener('click', () => {
            var quantitySpan = btn.nextElementSibling;
            var quantity = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = ++quantity;
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.fa-minus-circle').forEach(btn => {
        btn.addEventListener('click', () => {
            var quantitySpan = btn.previousElementSibling;
            var quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantitySpan.textContent = --quantity;
                updateTotalPrice();
            }
        });
    });

    
    document.querySelectorAll('.fa-trash-alt').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.card').remove();
            updateTotalPrice();
        });
    });

    
    document.querySelectorAll('.fa-heart').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('liked');
            btn.style.color = btn.classList.contains('liked') ? 'red' : 'black';
        });
    });

    
    updateTotalPrice();
});
