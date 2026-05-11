document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const address = document.getElementById('address').value;

        // Base URL for the Google Form
        const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSewNQMmpySA_FesuczmmeVgC0lZmxSkKFjTp-J7PKuNVsEy6Q/viewform';
        
        // Form Entry IDs based on user input
        // entry.677308980 = Produto
        // entry.1866836889 = Quantidade
        // entry.223438221 = Numero Zap
        // entry.973265489 = Endereço

        // Create params
        const params = new URLSearchParams();
        params.append('usp', 'pp_url');
        params.append('entry.677308980', product);
        params.append('entry.1866836889', quantity);
        params.append('entry.223438221', whatsapp);
        params.append('entry.973265489', address);

        // Build Final URL
        const finalUrl = `${baseUrl}?${params.toString()}`;

        // Redirect to the URL
        // Using window.location.href to redirect in the same tab, or window.open for a new tab
        // Opening in the same tab is usually better for mobile flows, but new tab preserves the app.
        window.open(finalUrl, '_blank');
        
        // Optional: clear the form after submission
        // form.reset();
    });
});
