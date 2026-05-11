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
        const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSewNQMmpySA_FesuczmmeVgC0lZmxSkKFjTp-J7PKuNVsEy6Q/formResponse';
        
        // Create FormData
        const formData = new FormData();
        formData.append('entry.677308980', product);
        formData.append('entry.1866836889', quantity);
        formData.append('entry.223438221', whatsapp);
        formData.append('entry.973265489', address);

        // Visual Feedback (Loading)
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Enviando...</span><i class="ph ph-spinner ph-spin" style="animation: spin 1s linear infinite;"></i>';
        submitBtn.disabled = true;

        // Send request silently
        fetch(baseUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        }).then(() => {
            // Sucesso (no-cors always resolves if no network error)
            alert('Encomenda enviada com sucesso! Entraremos em contato em breve via WhatsApp.');
            form.reset();
        }).catch((error) => {
            console.error('Error submitting form:', error);
            alert('Houve um erro ao enviar. Por favor, tente contatar via WhatsApp diretamente.');
        }).finally(() => {
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
});
