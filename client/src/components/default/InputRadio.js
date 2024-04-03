import React, { useEffect } from "react";

const InputRadio = () => {
    useEffect(() => {
        const inlineFields = document.querySelectorAll('.sw_form input, .sw_form div, .sw_form textarea, .sw_form select');
        const inputFields = document.querySelectorAll('.sw_form-file, .sw_form-toggle, .sw_form-radio, .float-input');

        inlineFields.forEach(inlineField => {
            const inlineFormWidth = inlineField.getAttribute('data-width');
            const inlineInputs = inlineField.querySelectorAll('input, div, textarea, select');
            inlineInputs.forEach(inlineInput => {
                inlineInput.style.width = `${inlineFormWidth}%`;
            });
        });

        inputFields.forEach(inputField => {
            if (inputField.classList.contains('sw_form-file')) {
                inputField.addEventListener('change', () => {
                    let swFile = inputField.value.split('\\').pop();
                    const fileLabel = inputField.nextElementSibling;
                    fileLabel.textContent = swFile;
                });
            }
            if (inputField.classList.contains('sw_form-toggle')) {
                inputField.insertAdjacentHTML('afterend', '<span class="slider"></span>');
                const toggleWrapper = inputField.parentElement;
                const toggleShape = toggleWrapper.dataset.slider;
                if (toggleShape === 'round') {
                    const slider = toggleWrapper.querySelector('.slider');
                    slider.classList.add('round');
                }
            }
            if (inputField.classList.contains('sw_form-radio')) {
                const inputWrapper = inputField.parentElement;
                inputField.addEventListener("click", () => {
                    inputWrapper.querySelectorAll('.sw_form-radio').forEach(radioBtn => {
                        if (radioBtn !== inputField) {
                            radioBtn.checked = false;
                        }
                    });
                });
            }

            if (inputField.classList.contains('float-input')) {
                inputField.addEventListener('change', (event) => {
                    inputField.classList.toggle('has-value');
                    // You might want to do something with the value here
                    console.log(event.target.value);
                });
            }
            
            if (inputField.hasAttribute('placeholder')) {
                if (inputField.hasAttribute('data-placeholder-effect')) {
                    const placeholder = inputField.getAttribute('placeholder');
                    inputField.addEventListener('focus', () => {
                        inputField.setAttribute('placeholder', '');
                    });

                    inputField.addEventListener('blur', () => {
                        inputField.setAttribute('placeholder', placeholder);
                    });
                }
            }
            if (inputField.hasAttribute('data-focus')) {
                const inputFocus = inputField.getAttribute('data-focus');
                inputField.addEventListener('focus', () => {
                    inputField.style.borderColor = inputFocus.split('-').pop();
                    inputField.style.setProperty('border-color', inputFocus.split('-').pop(), 'important');
                });

                inputField.addEventListener('blur', () => {
                    inputField.style.borderColor = inputFocus.split('-').pop();
                    inputField.style.removeProperty('border-color', inputFocus.split('-').pop(), 'important');
                });
            }
        });

        const inputRadios = document.querySelectorAll('.sw_form-radio');
        inputRadios.forEach(inputRadio => {
            inputRadio.addEventListener('click', () => {
                inputRadios.forEach(otherInputRadio => {
                    if (otherInputRadio !== inputRadio) {
                        otherInputRadio.checked = false;
                    }
                });
            });
        });
    }, []);

    return (
        <div className="sw_form-radio-wrapper">
                <input type="radio" className="sw_form-radio" id="monthly" />
                <label className="sw_form-radio-label" htmlFor="monthly">Monthly</label>

                <br />
                <input type="radio" className="sw_form-radio" id="yearly" />
                <label className="sw_form-radio-label" htmlFor="yearly">Yearly</label>
            </div>
    );
};

export default InputRadio;
