function closeOverlay() {
            document.getElementById('overlay').style.display = 'none';
        }

        document.getElementById('discordForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var formData = new FormData(this);
            var webhookURL = 'https://discord.com/api/webhooks/1212803548148932639/fViEfLsUREg52y-362hW6XxxSeEsvSbFU8JFFGQvLpHBs8zFRcXyB_cJidk3VkqUXAaN';

            var message = {
                content: "Solicitud de ingreso de | " + formData.get('name'),
                embeds: [{
                    title: 'Solicitud descripcion.',
                    description: "> " + formData.get('message'),
                    color: 16777215 // Puedes cambiar el color como prefieras
                }]
            };

            fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al enviar el mensaje a Discord');
                }
                document.getElementById('overlay').style.display = 'flex';
                document.getElementById('discordForm').reset();
            })
            .catch(error => {
              window.location.href = './success.html';
            });
        });
