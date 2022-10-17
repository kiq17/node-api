class homeController{
    index(req,res){
        return res.json({hello: "world"});
    }
}

export default new homeController();