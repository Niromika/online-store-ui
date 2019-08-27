import * as yup from 'yup';

export default yup.object().shape({
    first_name: yup
        .string()
        .required('first name is required')
        .min(2, 'must be at list 2 chars')
        .max(40, 'no more than 40 chars'),
    last_name: yup
        .string()
        .required('last name is required')
        .min(2, 'must be at list 2 chars')
        .max(40, 'no more than 40 chars'),
    email: yup
        .string()
        .required('email address is required')
        .email()
        .min(6, 'must be at list 6 chars')
        .max(36, 'no more than 40 chars'),
    bday: yup
        .string()
        .test('adult', 'you must be at least 18 years old',
        function(value) {
          var birth = new Date(value);
          var dt = new Date();
          var age = dt.getFullYear() - birth.getFullYear();
          var m = dt.getMonth() - birth.getMonth();
          if(m < 0 || (m === 0 && dt.getDate() < birth.getDate())) {
              age--;
        }
        return age >= 18;
        }),
    password: yup
        .string()
        .required('password is required')
        .min(8, 'at least 8 chars')
        .matches(/[a-z]/, 'at least one lowercase char')
        .matches(/[A-Z]/, 'at least one uppercase char')
        .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).'),      
});