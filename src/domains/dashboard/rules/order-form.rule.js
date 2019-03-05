const rules = {
    from: [
        {
            required: true,
            message: 'Please input from field!'
        },
    ],
    to: [
        {
            required: true,
            message: 'Please input to field!'
        }
    ],
    date: [
        {
            required: true,
            message: 'Please select date!'
        }
    ]
};

export const ORDER_FORM_RULE = rules;
