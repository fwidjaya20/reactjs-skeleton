const rules = {
    email: [
        {
            required: true,
            message: 'Please input email field!'
        },
        {
            type: 'email',
            message: 'Please input with valid email format!'
        }
    ],
    password: [
        {
            required: true,
            message: 'Please input password field!'
        }
    ],
};

export const LOGIN_FORM_RULE = rules;
