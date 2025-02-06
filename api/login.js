<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - My Le Epik Website</title>
    <link rel="icon" type="image/x-icon" href="../imgs/fwip.png">
    <script src="../static/js/jquery.js"></script>
    <style>
        /* =====================================================
           CSS Shi
        ===================================================== */
        :root {
            --main-border-color: black;
            --main-border-width: 5px;
            --main-border-radius: 15px;
            --main-image-max-width: 160%;
            --main-image-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
        }

        body {
            color: #fff;
            background-color: #191919;
            font-family: 'Jetbrains Mono', monospace;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        /* Main Login Container */
        .login-container {
            background-color: #232323;
            padding: 40px 20px;
            border-radius: 15px;
            width: 350px;
            margin: 100px auto;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
        }

        .login-container h2 {
            margin-bottom: 20px;
            font-size: 24px;
        }

        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #333;
            border-radius: var(--main-border-radius);
            background-color: #1a1a1a;
            color: #fff;
        }

        .g-recaptcha {
            margin-bottom: 20px;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: var(--main-border-radius);
            font-size: 16px;
        }

        button:hover {
            background-color: #0056b3;
        }

        .error-message {
            margin-top: 20px;
            color: red;
            font-size: 14px;
        }

        .gaytext {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 11pt;
            font-style: italic;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: rgb(42, 104, 20);
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
            .login-container {
                width: 90%;
            }
        }
    </style>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<body oncontextmenu="return false;">
    
    <h1 class="gaytext">Le Epik Website version 4.3</h1>

    <div class="login-container">
        <h2>Login</h2>
        <form id="login-form">
            <input type="password" id="password" placeholder="Enter your password" required>
            <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
            <button type="submit">Login</button>
        </form>

        <p id="error-message" class="error-message" style="display:none;">Invalid password or reCAPTCHA verification failed</p>
    </div>

    <script>
        // Disable right-click
        function disableRightClick() {
            alert("Hi imma steal u press ok NOW!!!");
            window.location.href = '../bigrat';
            return false;
        }

        // Handle login form submission
        document.getElementById('login-form').addEventListener('submit', async function (event) {
            event.preventDefault();

            const password = document.getElementById('password').value;
            const recaptchaResponse = grecaptcha.getResponse();

            // Validate reCAPTCHA
            if (!recaptchaResponse) {
                alert('Please verify that you are not a robot!');
                return;
            }

            const data = {
                password: password,
                recaptcha: recaptchaResponse
            };

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    // Redirect to the protected page after successful login
                    window.location.href = '/mlew/lol/password';
                } else {
                    document.getElementById('error-message').style.display = 'block';
                }
            } catch (error) {
                console.error('Error during login:', error);
                document.getElementById('error-message').style.display = 'block';
            }
        });
    </script>

    <footer>
        <h1>&copy; 2025 1up Entertainment LLC&trade;</h1>
    </footer>
</body>
</html>
