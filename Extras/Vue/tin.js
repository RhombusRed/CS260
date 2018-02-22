new Vue({
    el: '#root',
    data: {
        message: "hello world",
        vtitle: "title",
        seen: true,
        arrays: [
            { text: "one"},
            { text: "two"},
            { text: "three"}
        ]
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})