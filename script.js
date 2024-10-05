document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const discordEmail = document.getElementById('discordEmail').value;
    const topic = document.getElementById('topic').value;
    const message = document.getElementById('message').value;

    // Prepare data for Discord webhook (Embed Format)
    const webhookUrl = 'https://discord.com/api/webhooks/1292123762539630632/c7zgcNRkZPpcnmQLaczODEdOeUgBSJn5v-yuHYEbNz6RAoUjVGsYAB2uInNY_moZFDtl'; // Replace with your webhook URL

    const embedPayload = {
        username: "Quantum Studios", // Name displayed on the webhook
        avatar_url: "https://media.discordapp.net/attachments/1292122735840858214/1292122857580527707/Untitled102_20241002210914.png?ex=670296af&is=6701452f&hm=1b9a46f652a23be7e874aca3ad5fa42ef08f46266e924a0ee4475e1701b6d67e&", // Optional: Your logo URL
        embeds: [
            {
                title: "New Contact Form Submission",
                color: 65280, // Green color in decimal (you can choose other colors)
                fields: [
                    {
                        name: "Discord Name / Email",
                        value: discordEmail,
                        inline: false
                    },
                    {
                        name: "Topic",
                        value: topic,
                        inline: false
                    },
                    {
                        name: "Message",
                        value: message,
                        inline: false
                    }
                ],
                footer: {
                    text: "Quantum Studios Contact Form",
                    icon_url: "https://media.discordapp.net/attachments/1292122735840858214/1292122857580527707/Untitled102_20241002210914.png?ex=670296af&is=6701452f&hm=1b9a46f652a23be7e874aca3ad5fa42ef08f46266e924a0ee4475e1701b6d67e&" // Optional: Footer logo URL
                },
                timestamp: new Date().toISOString() // Adds a timestamp
            }
        ]
    };

    // Send data to Discord webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(embedPayload),
    })
    .then(response => {
        if (response.ok) {
            // Show the popup after successful form submission
            document.getElementById('popup').style.display = 'flex';
        } else {
            alert('There was an error sending the message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending the message.');
    });

    // Clear the form
    document.getElementById('contactForm').reset();
});
