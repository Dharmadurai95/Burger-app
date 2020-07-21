

export const updateObject = (oldObject, updatedproperty) => {
    return {
        ...oldObject,
        ...updatedproperty
    };
};
// export const updateObject = (oldObject, updatedProperties) => {
//     return {
//         ...oldObject,
//         ...updatedProperties
//     };
// };