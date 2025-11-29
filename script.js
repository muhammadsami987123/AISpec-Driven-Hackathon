// Form Toggle Functionality
const showSignupBtn = document.getElementById('showSignup');
const showLoginBtn = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

showSignupBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm?.classList.remove('active');
    signupForm?.classList.add('active');
});

showLoginBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm?.classList.remove('active');
    loginForm?.classList.add('active');
});

// Password Toggle Functionality
const togglePasswordButtons = document.querySelectorAll('.toggle-password');

togglePasswordButtons.forEach(button => {
    button.addEventListener('click', () => {
        const inputWrapper = button.closest('.input-wrapper');
        const input = inputWrapper?.querySelector('input');

        if (input) {
            if (input.type === 'password') {
                input.type = 'text';
            } else {
                input.type = 'password';
            }
        }
    });
});

// Password Strength Indicator
const signupPasswordInput = document.getElementById('signup-password');
const strengthFill = document.querySelector('.strength-fill');
const strengthLevel = document.getElementById('strength-level');

function calculatePasswordStrength(password) {
    if (password.length === 0) return { strength: 'weak', width: 0, color: '#f56565' };
    if (password.length < 6) return { strength: 'weak', width: 33, color: '#f56565' };

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteriaCount = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length;

    if (criteriaCount >= 3 && password.length >= 10) {
        return { strength: 'strong', width: 100, color: '#48bb78' };
    } else if (criteriaCount >= 2 && password.length >= 8) {
        return { strength: 'medium', width: 66, color: '#ed8936' };
    }

    return { strength: 'weak', width: 33, color: '#f56565' };
}

signupPasswordInput?.addEventListener('input', (e) => {
    const result = calculatePasswordStrength(e.target.value);

    if (strengthFill) {
        strengthFill.style.width = `${result.width}%`;
        strengthFill.style.background = result.color;
    }

    if (strengthLevel) {
        strengthLevel.textContent = result.strength.charAt(0).toUpperCase() + result.strength.slice(1);
        strengthLevel.style.color = result.color;
        strengthLevel.style.fontWeight = '600';
    }
});

// Form Submission Handlers
const loginFormElement = document.getElementById('login');
const signupFormElement = document.getElementById('signup');

loginFormElement?.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email')?.value;
    const password = document.getElementById('login-password')?.value;

    console.log('Login submitted:', { email, password });

    // Add your login logic here
    alert('Login functionality would be implemented here!');
});

signupFormElement?.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('signup-firstname')?.value;
    const lastName = document.getElementById('signup-lastname')?.value;
    const email = document.getElementById('signup-email')?.value;
    const password = document.getElementById('signup-password')?.value;
    const confirmPassword = document.getElementById('signup-confirm-password')?.value;
    const termsAccepted = document.getElementById('terms')?.checked;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Validate terms acceptance
    if (!termsAccepted) {
        alert('Please accept the Terms of Service and Privacy Policy');
        return;
    }

    console.log('Signup submitted:', { firstName, lastName, email, password });

    // Add your signup logic here
    alert('Signup functionality would be implemented here!');
});

// Social Login Handlers
const socialButtons = document.querySelectorAll('.btn-social');

socialButtons.forEach(button => {
    button.addEventListener('click', () => {
        const provider = button.querySelector('span')?.textContent;
        console.log(`${provider} login clicked`);
        alert(`${provider} OAuth would be implemented here!`);
    });
});

// Add smooth animations on page load
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';

        setTimeout(() => {
            container.style.transition = 'all 0.6s ease-out';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }
});
