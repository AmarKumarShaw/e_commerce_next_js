module.exports = {
    routes:[
        {
            method:"GET",
            path:"/orders/pretransaction",
            handler:"custom.exampleAction",
            config:{
                auth:false
            }
        }
    ]
}