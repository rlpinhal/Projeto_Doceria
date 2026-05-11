document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values
        const nome = document.getElementById('nome').value;
        const preferencia = document.getElementById('preferencia').value;
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const address = document.getElementById('address').value;
        const observacoes = document.getElementById('observacoes').value;

        // Base URL for the Google Form
        const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdqfevq-oimji29KxUjTD97FqYhqpRyvWUMB0G0jJ8GiKhI1Q/formResponse';
        
        // Formatar observações
        const observacoesFinais = `Quantidade: ${quantity}\n${observacoes ? 'Obs: ' + observacoes : ''}`;

        // Create FormData
        const formData = new FormData();
        formData.append('entry.324301652', nome);
        formData.append('entry.41738870', preferencia);
        formData.append('entry.1023102199', address);
        formData.append('entry.73929848', whatsapp);
        formData.append('entry.683016357', product);
        formData.append('entry.2138500953', observacoesFinais);

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
