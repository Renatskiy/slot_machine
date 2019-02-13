export default {
    namespaced: true,
    state: {
       items: [
           {
            name: 'one',
            image: '../assets/images/2xBAR.png',
            cost:"",
           },
           {
            name: 'two',
            image: '../assets/images/3xBAR.png',
            cost:"",
           },
           {
            name: 'three',
            image: '../assets/images/7.png',
            cost:"",
           },
           {
            name: 'four',
            image: '../assets/images/BAR.png',
            cost:"",
           },
           {
            name: 'five',
            image: '../assets/images/Cherry.png',
            cost:"",
           },
        ]

    },
    getters: {
        items: ({items}) => items
    }
}