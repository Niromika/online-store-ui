import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('name is required')
        .min(2, 'must be at list 2 chars')
        .max(40, 'no more than 40 chars'),
    brand: yup 
        .string()
        .required('price is required'),   
    price: yup
        .number()
        .required('price is required'),
    categoryId: yup
        .string()
        .required('category is required'),
    image: yup
         .string()    
});